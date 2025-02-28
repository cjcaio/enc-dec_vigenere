import React from 'react';
import styled from '@emotion/styled';

const KeyContainer = styled.div`
    width: 100%;
    max-width: 500px;
    margin-top: 1rem;
    perspective: 1000px;
`;

const StyledKeyInput = styled.input`
    width: 100%;
    min-height: 45px;
    border: 2px solid var(--border-color);
    border-radius: 10px;
    padding: 12px 15px;
    font-size: 14px;
    text-align: center;
    background-color: white;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    letter-spacing: -0.02em;
    box-shadow: 2.5px 2.5px 0 rgba(26, 26, 26, 0.6);
    transition: var(--transition);
    box-sizing: border-box;

    &:focus {
        outline: none;
        background-color: rgba(26, 26, 26, 0.02);
    }

    &:hover {
        transform: translate(-1.5px, -1.5px);
        box-shadow: 3.5px 3.5px 0 rgba(26, 26, 26, 0.6);
    }

    &::placeholder {
        color: #6b7280;
        opacity: 0.7;
    }
`;


const KeyInput = (props) => {
    return (
        <KeyContainer>
            <StyledKeyInput {...props} />
        </KeyContainer>
    );
};

export default KeyInput;