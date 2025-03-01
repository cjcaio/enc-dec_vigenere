import React from 'react';
import { ContentContainer, Title, Paragraph, Link, List, ListItem } from './styles';

const About = () => (
    <ContentContainer>
        <Title>About This Project</Title>

        <Paragraph>
            I’ve always been drawn to cryptography, so when I set out to learn more about Go, I decided to combine the two.
            This project reimagines the Vigenère cipher, showcasing Go’s backend capabilities with clear design patterns,
            while leveraging modern front-end tools for a smooth user experience.
        </Paragraph>

        <Paragraph>
            <strong>Technologies I Used:</strong>
        </Paragraph>
        <List>
            <ListItem style={{ fontSize: '14px' }}>
                React & Framer Motion for interactive, seamless animations
            </ListItem>
            <ListItem style={{ fontSize: '14px' }}>
                A Go backend to explore reliable design approaches and coding techniques
            </ListItem>
            <ListItem style={{ fontSize: '14px' }}>
                Emotion for styling, ensuring a consistent and responsive interface
            </ListItem>
        </List>

        <Paragraph>
            This project aims to be more than just a cipher tool. It represents an in-depth exploration of Go,
            cryptographic concepts, and building a straightforward, maintainable codebase. If you're interested
            in these topics or simply curious about its inner workings, feel free to explore the repository!
        </Paragraph>

        <Paragraph>
            <Link
                href="https://github.com/cjcaio/enc-dec_vigenere"
                target="_blank"
                rel="noopener noreferrer"
            >
                Check out the source on GitHub →
            </Link>
        </Paragraph>
    </ContentContainer>
);

export default About;