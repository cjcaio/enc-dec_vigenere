import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import TextInput from './TextInput';
import KeyInput from './KeyInput';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    gap: 2rem;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
`;


const ActionButton = styled.button`
    background-color: ${props => props.isFlipped ? 'var(--decode-color)' : 'var(--accent-color)'};
    color: var(--text-light);
    border: 2px solid var(--border-color-light);
    border-radius: 12px;
    padding: 8px 24px;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.15s ease, border-color 0.3s ease, color 0.3s ease;

    body.dark-mode & {
        background-color: ${props => props.isFlipped ? 'var(--decode-color-dark)' : 'var(--accent-color-dark)'};
        color: var(--text-dark);
        border-color: var(--border-color-dark);
    }

    &:hover {
        background-color: ${props => props.isFlipped ? 'var(--decode-color-hover)' : 'var(--accent-color-hover)'};
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(1px);
    }
`;

const CardContainer = styled.div`
    perspective: 1000px;
    width: 100%;
    max-width: 500px;
    min-height: 200px;
    margin: 20px 0; 
`;

const Card = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    min-height: 150px;
`;

const CardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 150px;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 10px;
    border: 3px solid #1a1a1a;
    background-color: white;
    box-shadow: 3px 3px 0 rgba(26, 26, 26, 0.9);
    box-sizing: border-box;
    transition: border-color 0.2s ease, transform 0.2s ease;

    &:hover {
        border-color: #1a1a1a;
    }
`;

const FrontFace = styled(CardFace)`
    &:hover {
        ${props => !props.isFlipped && `
            transform: translate(-2px, -2px);
            box-shadow: 5px 5px 0 rgba(26, 26, 26, 0.9);
        `}
    }
`;

const BackFace = styled(CardFace)`
    transform: rotateY(180deg);

    &:hover {
        ${props => props.isFlipped && `
            transform: rotateY(180deg) translate(-2px, -2px);
            box-shadow: 5px 5px 0 rgba(26, 26, 26, 0.9);
        `}
    }
`;


const CipherInput = ({ onEncrypt, onDecrypt }) => {
    const [text, setText] = useState('');
    const [key, setKey] = useState('');
    const [result, setResult] = useState('');
    const [encryptedText, setEncryptedText] = useState('');
    const [isFlipped, setIsFlipped] = useState(false);

    const handleSubmit = async () => {
        if (!text && !encryptedText) {
            setText('');
            setEncryptedText('');
            setIsFlipped(!isFlipped);
            return;
        }

        if (key) {
            try {
                let apiResult;
                if (!isFlipped) {
                    apiResult = await onEncrypt(text, key);
                    setEncryptedText(apiResult);
                } else {
                    apiResult = await onDecrypt(encryptedText, key);
                    setText(apiResult);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        setIsFlipped(!isFlipped);
    };

    const handleTextChange = (e) => {
        const newText = e.target.value;
        setText(newText);
        if (!newText) {
            setEncryptedText('');
        }
    };

    const handleEncryptedTextChange = (e) => {
        const newText = e.target.value;
        setEncryptedText(newText);
        if (!newText) {
            setText('');
        }
    };


    return (
        <Container>
            <ButtonWrapper>
                <ActionButton onClick={handleSubmit} isFlipped={isFlipped}>
                    {isFlipped ? 'decode' : 'encode'}
                </ActionButton>
            </ButtonWrapper>

            <CardContainer>
                <Card
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <FrontFace isFlipped={isFlipped}>
                        <TextInput
                            value={text}
                            onChange={handleTextChange}
                            placeholder={isFlipped ? "Enter text to encode..." : "Enter text to encode..."}
                        />
                    </FrontFace>
                    <BackFace isFlipped={isFlipped}>
                        <TextInput
                            value={encryptedText}
                            onChange={handleEncryptedTextChange}
                            placeholder={isFlipped ? "Enter text to decode..." : "Enter text to decode..."}
                        />
                    </BackFace>
                </Card>
            </CardContainer>

            <KeyInput
                type="text"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Enter your key"
            />
        </Container>
    );
};

export default CipherInput;
