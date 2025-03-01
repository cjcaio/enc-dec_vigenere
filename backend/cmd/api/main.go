package main

import (
	"github.com/cjcaio/enc-dec_vigenere/internal/server"
	"log"
)

func main() {
	srv := server.NewServer()
	srv.ConfigureRoutes()

	log.Fatal(srv.Start(":8080"))
}
