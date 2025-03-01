import React from 'react';
import { ContentContainer, Title, Paragraph, Link, List, ListItem } from './styles';

const About = () => (
    <ContentContainer>
        <Title>About This Project</Title>
        <Paragraph>
            My passion for cryptography and a desire to explore Go led me to create this project. I wanted to dive deep into Go’s structures, types, and test it for backend development, which inspired me to reimagine the classic Vigenère cipher.
        </Paragraph>

        {/* Using a consistent font size for the bullet points */}
        <Paragraph>
            <strong>Technologies I Worked With:</strong>
        </Paragraph>
        <List>
            <ListItem style={{ fontSize: '14px' }}>
                React & Framer Motion for smooth, dynamic animations
            </ListItem>
            <ListItem style={{ fontSize: '14px' }}>
                A Go backend to truly understand thoughtful design patterns and coding practices
            </ListItem>
            <ListItem style={{ fontSize: '14px' }}>
                Emotion for styling, ensuring a clear and responsive interface
            </ListItem>
        </List>

        <Paragraph>
            This project is more than just a cipher tool — it's my personal desire and journey into mastering new technologies and coding paradigms.
        </Paragraph>

        <Paragraph>
            <Link
                href="https://github.com/cjcaio/enc-dec_vigenere"
                target="_blank"
                rel="noopener noreferrer"
            >
                View source on GitHub →
            </Link>
        </Paragraph>
    </ContentContainer>
);

export default About;