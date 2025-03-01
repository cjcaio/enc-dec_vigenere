package server

import (
	"github.com/cjcaio/enc-dec_vigenere/internal/cipher"
	"github.com/cjcaio/enc-dec_vigenere/internal/handlers"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

type Server struct {
	router *mux.Router
	cipher *cipher.Vigenere
}

func NewServer() *Server {
	return &Server{
		router: mux.NewRouter(),
		cipher: cipher.NewVigenere(),
	}
}

func (s *Server) ConfigureRoutes() {
	cipherHandler := handlers.NewCipherHandler(s.cipher)

	// Configurar CORS
	s.router.Use(func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
			w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

			if r.Method == "OPTIONS" {
				w.WriteHeader(http.StatusOK)
				return
			}

			next.ServeHTTP(w, r)
		})
	})

	// Rotas da API
	api := s.router.PathPrefix("/api").Subrouter()
	api.HandleFunc("/encrypt", cipherHandler.Encrypt).Methods("POST", "OPTIONS")
	api.HandleFunc("/decrypt", cipherHandler.Decrypt).Methods("POST", "OPTIONS")
}

func (s *Server) Start(port string) error {
	log.Printf("Server starting on port %s", port)
	return http.ListenAndServe(port, s.router)
}
