package models

type CipherRequest struct {
	Text string `json:"text"`
	Key  string `json:"key"`
}

type CipherResponse struct {
	Result string `json:"result"`
	Error  string `json:"error,omitempty"`
}
