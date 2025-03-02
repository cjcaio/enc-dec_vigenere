import React, { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import CipherInput from './components/CipherInput';
import About from './components/about/About';
import Footer from './components/Footer';
import './styles/globals.css';
import { checkSecretCombo } from './secret';
import { Analytics } from '@vercel/analytics/next';

const baseURL = process.env.REACT_APP_API_BASE_URL;

function App() {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [easterEgg, setEasterEgg] = useState({ found: false, message: '' });

  const apiCall = async (endpoint, text, key) => {
   try {
       const secretCheck = checkSecretCombo(text, key);
       if (secretCheck.found) {
           setEasterEgg({
               found: true,
               message: secretCheck.message
           });
           return secretCheck.message;
       }

       const response = await fetch(`${baseURL}${endpoint}`, {
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
            <CipherInput
                onEncrypt={handleEncrypt}
                onDecrypt={handleDecrypt}
                easterEgg={easterEgg}
            />
            {error && (
                <div style={{
                    color: '#dc2626',
                    textAlign: 'center',
                    marginTop: '1rem'
                }}>
                    {error}
                </div>
            )}
            <Footer />
            <Analytics />
        </div>
    );
}





export default App;