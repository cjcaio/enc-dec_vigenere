const CUSTOM_HASH_KEY = process.env.REACT_APP_CUSTOM_HASH_KEY;
const ENCRYPTED_MESSAGE = process.env.REACT_APP_ENCRYPTED_MESSAGE;
const SECRET_TEXT = process.env.REACT_APP_SECRET_TEXT;

const createCustomHash = (text, key) => {
    const combined = text.toLowerCase() + ":" + key.toLowerCase();
    let hash = 0;

    for (let i = 0; i < combined.length; i++) {
        const char = combined.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return Math.abs(hash).toString(16);
};

const decryptSecretMessage = (encrypted) => {
    return encrypted.split('').map(char =>
        String.fromCharCode(char.charCodeAt(0) - 5)
    ).join('');
};

const CORRECT_HASH = createCustomHash(SECRET_TEXT, CUSTOM_HASH_KEY);

export const checkSecretCombo = (text, key) => {
    const inputHash = createCustomHash(text, key);
    if (inputHash === CORRECT_HASH) {
        return {
            found: true,
            message: ENCRYPTED_MESSAGE
        };
    }
    return {
        found: false,
        message: ''
    };
};