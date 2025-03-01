package handlers

import (
	"encoding/json"
	"github.com/cjcaio/enc-dec_vigenere/internal/cipher"
	"github.com/cjcaio/enc-dec_vigenere/internal/models"
	"net/http"
)

type CipherHandler struct {
	cipher *cipher.Vigenere
}

func NewCipherHandler(cipher *cipher.Vigenere) *CipherHandler {
	return &CipherHandler{
		cipher: cipher,
	}
}

func (h *CipherHandler) Encrypt(w http.ResponseWriter, r *http.Request) {
	var req models.CipherRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	result := h.cipher.Encrypt(req.Text, req.Key)

	response := models.CipherResponse{
		Result: result,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func (h *CipherHandler) Decrypt(w http.ResponseWriter, r *http.Request) {
	var req models.CipherRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	result := h.cipher.Decrypt(req.Text, req.Key)

	response := models.CipherResponse{
		Result: result,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}
