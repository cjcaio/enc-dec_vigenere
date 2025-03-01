import React, { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import CipherInput from './components/CipherInput';
import ResultDisplay from './components/ResultDisplay';
import About from './components/About';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  const [result, setResult] = useState('');

  const handleEncrypt = async (text, key) => {
    setResult(`Encrypted: ${text} (with key: ${key})`);
  };

  const handleDecrypt = async (text, key) => {
    setResult(`Decrypted: ${text} (with key: ${key})`);
  };

    return (
        <div className="container" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <About />
            <ThemeToggle />
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
                Vigenère Cipher
            </h1>
            <CipherInput onEncrypt={handleEncrypt} onDecrypt={handleDecrypt} />
            <ResultDisplay result={result} />
            <Footer />
        </div>
    );
}



export default App;