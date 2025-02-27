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
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    padding: 8px 15px;
    font-size: 14px;
    text-align: center;
    background-color: white;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
    transition: border-color 0.2s ease, background-color 0.2s ease;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #60a5fa;
        background-color: rgba(96, 165, 250, 0.05);
    }

    &:hover {
        border-color: #60a5fa;
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