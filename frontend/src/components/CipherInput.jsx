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
    background-color: ${props => props.isFlipped ? '#f97316' : '#60a5fa'};
    color: white;
    border: none;
    border-radius: 20px;
    padding: 8px 24px;
    font-size: 14px;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: var(--button-shadow);

    &:hover {
        transform: translate(-1px, -1px);
        box-shadow: var(--button-shadow-hover);
    }
`;



const QuestionText = styled.p`
    color: #000;
    margin: 1rem 0;
    font-size: 16px;
    text-align: center;
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
    border: 2.5px solid #1a1a1a; 
    background-color: white;
    box-shadow: 3px 3px 0 rgba(26, 26, 26, 0.9);
    box-sizing: border-box;
    transition: border-color 0.2s ease, transform 0.2s ease;

    &:hover {
        border-color: #1a1a1a;
        transform: translate(-2px, -2px);
        box-shadow: 5px 5px 0 rgba(26, 26, 26, 0.9);
    }
`;


const FrontFace = styled(CardFace)``;

const BackFace = styled(CardFace)`
    transform: rotateY(180deg);
`;

const CipherInput = ({ onEncrypt, onDecrypt }) => {
    const [text, setText] = useState('');
    const [key, setKey] = useState('');
    const [result, setResult] = useState('');
    const [encryptedText, setEncryptedText] = useState('');
    const [isFlipped, setIsFlipped] = useState(false);

    const handleSubmit = async () => {
        if (!text || !key) return;

        try {
            let apiResult;
            if (!isFlipped) {
                apiResult = await onEncrypt(text, key);
                setEncryptedText(apiResult);
            } else {
                apiResult = await onDecrypt(encryptedText, key);
                setText(apiResult);
            }

            setIsFlipped(!isFlipped);
        } catch (error) {
            console.error('Error:', error);
        }
    };




    return (
        <Container>
            <ButtonWrapper>
                <ActionButton onClick={handleSubmit} isFlipped={isFlipped}>
                    {isFlipped ? 'DECODE' : 'ENCODE'}
                </ActionButton>
            </ButtonWrapper>

            <CardContainer>
                <Card
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <FrontFace>
                        <TextInput
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Enter text to encode..."
                        />
                    </FrontFace>
                    <BackFace>
                        <TextInput
                            value={encryptedText}
                            readOnly
                            placeholder="Encrypted text will appear here..."
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
