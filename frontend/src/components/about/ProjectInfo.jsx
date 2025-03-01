import React from 'react';
import { ContentContainer, Title, Paragraph, Link } from './styles';

const ProjectInfo = () => (
    <ContentContainer>
        <Title>About this Project</Title>
        <Paragraph>
            This project is a modern implementation of the classic Vigenère cipher, built with:
            • React + Framer Motion for smooth animations
            • Golang backend for cipher operations
            • Emotion for styled components
        </Paragraph>
        <Paragraph>
            Features:
            • Clean, minimalist interface
            • Real-time encoding/decoding
            • Responsive design
            • Dark/light theme support
        </Paragraph>
        <Paragraph>
            <Link href="https://github.com/yourusername/project-repo" target="_blank" rel="noopener noreferrer">
                View source on GitHub →
            </Link>
        </Paragraph>
    </ContentContainer>
);

export default ProjectInfo;