import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const AboutButton = styled.button`
    position: fixed;
    top: 20px;
    left: 20px;
    background: transparent;
    border: none;
    font-family: 'Attone-SemiBold', sans-serif;
    font-size: 18px;
    cursor: pointer;
    color: var(--text-light);
    padding: 8px;
    box-shadow: none;
    z-index: 1001;

    &:hover {
        transform: none;
        opacity: 0.8;
    }
`;

export const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 998;
`;

export const Sidebar = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 300px;
    background: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
    z-index: 999;
`;

export const SidebarContent = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const MenuItem = styled.button`
    background: transparent;
    border: none;
    text-align: left;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    color: var(--text-light);
    transition: all 0.2s ease;
    box-shadow: none;
    
    &:hover {
        background: rgba(0, 0, 0, 0.05);
        transform: none;
    }
`;

export const ContentContainer = styled.div`
    padding: 20px 10px;
    color: var(--text-light);
    font-size: 14px;
    line-height: 1.6;
`;

export const Title = styled.h2`
    font-size: 20px;
    margin-bottom: 15px;
    color: var(--text-dark);
`;

export const Paragraph = styled.p`
    margin-bottom: 12px;
`;

export const Link = styled.a`
    color: #60a5fa;
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
`;