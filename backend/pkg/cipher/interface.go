package cipher

type Cipher interface {
	Encrypt(message, key string) string
	Decrypt(cipher, key string) string
}
