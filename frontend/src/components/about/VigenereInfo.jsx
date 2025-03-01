import React from 'react';
import { ContentContainer, Title, Paragraph, Link } from './styles';

const VigenereInfo = () => (
    <ContentContainer>
        <Title>The Vigenère Cipher</Title>
        <Paragraph>
            The Vigenère cipher is a polyalphabetic substitution cipher that was considered unbreakable for centuries.
            Created by Blaise de Vigenère in the 16th century, it improves upon the standard Caesar cipher by using
            a keyword to shift each letter in the plaintext by different amounts.
        </Paragraph>
        <Paragraph>
            How it works:
            • Each letter in the keyword determines the shift amount for the corresponding letter in the plaintext
            • The keyword is repeated to match the length of the plaintext
            • This creates multiple Caesar ciphers, making it much harder to crack through frequency analysis
        </Paragraph>
        <Paragraph>
            <Link href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" target="_blank" rel="noopener noreferrer">
                Learn more about Vigenère cipher →
            </Link>
        </Paragraph>
    </ContentContainer>
);

export default VigenereInfo;