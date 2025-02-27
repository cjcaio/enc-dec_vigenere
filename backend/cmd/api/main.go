package main

import (
	"fmt"
	"github.com/cjcaio/enc-dec_vigenere/internal/cipher"
)

func main() {
	vigenere := cipher.NewVigenere()

	message := "First Message"
	key := "key"

	encrypted := vigenere.Encrypt(message, key)
	decrypted := vigenere.Decrypt(encrypted, key)

	fmt.Println("Original message:", message)
	fmt.Println("\nEncrypted message:", encrypted, "\nUsing key:", key, "\n")
	fmt.Println("Decrypted message:", decrypted)
}
