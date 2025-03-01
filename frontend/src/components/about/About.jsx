import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VigenereInfo from './VigenereInfo';
import ProjectInfo from './ProjectInfo';
import {
    AboutButton,
    Overlay,
    Sidebar,
    SidebarContent,
    MenuItem
} from './styles';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentView, setCurrentView] = useState('vigenere');
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

    const handleMenuClick = (view) => {
        setCurrentView(view);
    };

    return (
        <>
            <AboutButton onClick={toggleSidebar} data-about-button>
                about
            </AboutButton>

            {isOpen && (
                <Overlay
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                        open: { opacity: 1 },
                        closed: { opacity: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                />
            )}

            <Sidebar
                ref={sidebarRef}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { x: 0 },
                    closed: { x: '-100%' }
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <SidebarContent>
                    <MenuItem
                        onClick={() => handleMenuClick('vigenere')}
                        style={{
                            background: currentView === 'vigenere' ? 'rgba(0, 0, 0, 0.05)' : 'transparent'
                        }}
                    >
                        about Vigenère Cipher
                    </MenuItem>
                    <MenuItem
                        onClick={() => handleMenuClick('project')}
                        style={{
                            background: currentView === 'project' ? 'rgba(0, 0, 0, 0.05)' : 'transparent'
                        }}
                    >
                        about the Project
                    </MenuItem>
                </SidebarContent>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    key={currentView}
                >
                    {currentView === 'vigenere' ? <VigenereInfo /> : <ProjectInfo />}
                </motion.div>
            </Sidebar>
        </>
    );
};

export default About;