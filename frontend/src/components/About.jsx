import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutButton = styled.button`
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

const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 998;
`;

const Sidebar = styled(motion.div)`
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

const SidebarContent = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const MenuItem = styled.button`
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

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                const aboutButton = document.querySelector('[data-about-button]');
                if (!aboutButton.contains(event.target)) {
                    setIsOpen(false);
                }
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const sidebarVariants = {
        open: { x: 0 },
        closed: { x: '-100%' }
    };

    const overlayVariants = {
        open: { opacity: 1 },
        closed: { opacity: 0 }
    };

    return (
        <>
            <AboutButton
                onClick={toggleSidebar}
                data-about-button
            >
                about
            </AboutButton>

            {isOpen && (
                <Overlay
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={overlayVariants}
                    transition={{ duration: 0.3 }}
                />
            )}

            <Sidebar
                ref={sidebarRef}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={sidebarVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <SidebarContent>
                    <MenuItem onClick={() => console.log("About Vigenere clicked")}>
                        about Vigenère Cipher
                    </MenuItem>
                    <MenuItem onClick={() => console.log("About Project clicked")}>
                        about the Project
                    </MenuItem>
                </SidebarContent>
            </Sidebar>
        </>
    );
};

export default About;