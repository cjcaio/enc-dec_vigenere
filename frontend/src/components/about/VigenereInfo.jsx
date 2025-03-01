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
            <Title>The Vigenère Cipher: A Historic Encryption Method</Title>
        </motion.div>

        <Paragraph>
            Developed in the 16th century by Blaise de Vigenère, this cipher was once deemed unbreakable. It marked a pivotal shift from the simple Caesar cipher, introducing a polyalphabetic approach that added complexity and security.
        </Paragraph>

        <Paragraph>
            <strong>How Does It Work?</strong> Imagine having a secret keyword that controls how each letter in your message is shifted. Here’s a quick overview:
        </Paragraph>

        <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
            <li>The keyword’s letters determine the shift for each corresponding character in the message.</li>
            <li>The keyword is repeated to match the message length.</li>
            <li>Multiple letter shifts make it harder to decipher using frequency analysis compared to a single shift method.</li>
        </ul>

        <Paragraph>
            With its ingenious approach, the Vigenère cipher not only influenced later encryption methods but also set the stage for secure communications in eras long before modern computers.
        </Paragraph>

        <Paragraph>
            Interested in a deeper dive into its history and impact?{' '}
            <Link href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" target="_blank" rel="noopener noreferrer">
                Learn more about the Vigenère cipher →
            </Link>
        </Paragraph>
    </ContentContainer>
);

export default VigenereInfo;