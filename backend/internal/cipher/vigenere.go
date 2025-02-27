package cipher

import (
	"strings"
)

type Vigenere struct {
	alphabet      string
	letterToIndex map[rune]int
	indexToLetter map[int]rune
}

func NewVigenere() *Vigenere {
	v := &Vigenere{
		alphabet:      "abcdefghijklmnopqrstuvwxyz",
		letterToIndex: make(map[rune]int),
		indexToLetter: make(map[int]rune),
	}

	for i, letter := range v.alphabet {
		v.letterToIndex[letter] = i
		v.indexToLetter[i] = letter
	}

	return v
}

func (v *Vigenere) Encrypt(message, key string) string {
	var encrypted strings.Builder
	message = strings.ToLower(message)
	currentKeyIndex := 0

	for _, letter := range message {
		if letter == ' ' {
			encrypted.WriteRune(' ')
		} else if index, exists := v.letterToIndex[letter]; exists {
			keyLetter := rune(key[currentKeyIndex])
			number := (index + v.letterToIndex[keyLetter]) % len(v.alphabet)
			encrypted.WriteRune(v.indexToLetter[number])
			currentKeyIndex = (currentKeyIndex + 1) % len(key)
		} else {
			encrypted.WriteRune(letter)
		}
	}

	return encrypted.String()
}

func (v *Vigenere) Decrypt(cipher, key string) string {
	var decrypted strings.Builder
	cipher = strings.ToLower(cipher)
	currentKeyIndex := 0

	for _, letter := range cipher {
		if letter == ' ' {
			decrypted.WriteRune(' ')
		} else if index, exists := v.letterToIndex[letter]; exists {
			keyLetter := rune(key[currentKeyIndex])
			number := (index - v.letterToIndex[keyLetter] + len(v.alphabet)) % len(v.alphabet)
			decrypted.WriteRune(v.indexToLetter[number])
			currentKeyIndex = (currentKeyIndex + 1) % len(key)
		} else {
			decrypted.WriteRune(letter)
		}
	}

	return decrypted.String()
}
