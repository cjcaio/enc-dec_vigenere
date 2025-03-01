import React, { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import CipherInput from './components/CipherInput';
import ResultDisplay from './components/ResultDisplay';
import About from './components/About';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const apiCall = async (endpoint, text, key) => {
       try {
           const response = await fetch(`http://localhost:8080/api/${endpoint}`, {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify({ text, key }),
           });

           console.log('API Response status:', response.status);

           if (!response.ok) {
               const errorText = await response.text();
               console.error('API Error:', errorText);
               throw new Error(`HTTP error! status: ${response.status}`);
           }

           const data = await response.json();
           console.log('API Response data:', data);

           setResult(data.result);
           setError('');
           return data.result;
       } catch (err) {
           console.error('Error in apiCall:', err);
           setError(`Error: ${err.message}`);
           setResult('');
           throw err;
       }
  };

  const handleEncrypt = async (text, key) => {
      console.log('encrypting...');
      return await apiCall('encrypt', text, key);
  };

  const handleDecrypt = async (text, key) => {
      console.log('decrypting...');
      return await apiCall('decrypt', text, key);
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
            {error ? (
                <div style={{
                    color: '#dc2626',
                    textAlign: 'center',
                    marginTop: '1rem'
                }}>
                    {error}
                </div>
            ) : (
                <ResultDisplay result={result} />
            )}
            <Footer />
        </div>
    );
}




export default App;