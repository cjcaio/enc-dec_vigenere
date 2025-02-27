import React from 'react';
import styled from '@emotion/styled';

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 100%;
    min-height: 150px;
    border: none;
    background: transparent;
    font-size: 16px;
    padding: 15px; 
    text-align: center;
    resize: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
        outline: none;
        background-color: rgba(96, 165, 250, 0.05);
    }
`;


const TextInput = (props) => {
    return <StyledTextArea {...props} />;
};

export default TextInput;