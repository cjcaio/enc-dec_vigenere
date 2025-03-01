package main

import (
	"log"
	"os"

	"github.com/cjcaio/enc-dec_vigenere/internal/server"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	srv := server.NewServer()
	srv.ConfigureRoutes()

	log.Fatal(srv.Start(":" + port))
}
