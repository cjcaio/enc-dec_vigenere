import React from 'react';
import { motion } from 'framer-motion';
import { ContentContainer, Title, Paragraph, Link } from './styles';

const VigenereInfo = () => (
    <ContentContainer>
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Title>The Vigenère Cipher: A Historic Leap in Cryptography</Title>
        </motion.div>

        <Paragraph>
            Often considered a milestone in the evolution of encryption, the Vigenère cipher was popularized during the 16th century by Blaise de Vigenère.
            It represented a significant improvement over simpler ciphers like the Caesar cipher, thanks to its polyalphabetic nature that made it far more
            resistant to frequency analysis.
        </Paragraph>

        <Paragraph>
            <strong>How Does It Work?</strong> At its core, the Vigenère cipher relies on a secret keyword that governs how each letter in your message
            should be shifted. The keyword letters are repeated or truncated to match the message length, ensuring continuous variation in shifts.
            Below is a brief summary:
        </Paragraph>

        <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
            <li>Each letter in the keyword corresponds to a shift value for its matching position in the message.</li>
            <li>If the message is longer than the keyword, the keyword repeats to remain aligned with every character.</li>
            <li>This approach diversifies the shifts, complicating any attempts to break the code through common techniques like frequency analysis.</li>
        </ul>

        <Paragraph>
            Historically, the Vigenère cipher was hailed as “le chiffre indéchiffrable” (French for “the indecipherable cipher”). Although it
            can be broken with modern computing power and analytical methods, it stands as a testament to centuries of ingenuity in the quest for
            secure communication.
        </Paragraph>

        <Paragraph>
            Curious to learn more about its origins, applications, and eventual vulnerabilities?
        </Paragraph>

        <Paragraph>
            <Link href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" target="_blank" rel="noopener noreferrer">
                Explore further details about the Vigenère cipher →
            </Link>
        </Paragraph>
    </ContentContainer>
);

export default VigenereInfo;