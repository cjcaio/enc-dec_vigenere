import React from 'react';
import styled from '@emotion/styled';

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 100%;
    min-height: 150px;
    border: none;
    background: transparent;
    font-family: 'Helvetica Neue', 'Arial', sans-serif; 
    font-weight: 400;
    letter-spacing: -0.02em; 
    font-size: 16px;
    padding: 15px;
    text-align: center;
    resize: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1a1a1a;

    &::placeholder {
        color: #6b7280;
        font-style: normal;
        opacity: 0.7;
    }

    &:focus {
        outline: none;
        background-color: rgba(26, 26, 26, 0.02);
    }
`;

const TextInput = (props) => {
    return <StyledTextArea {...props} />;
};

export default TextInput;