import React from 'react';

const ResultDisplay = ({ result }) => {
    if (!result) return null;

    return (
        <div className="input-group">
            <h3>Result:</h3>
            <textarea
                value={result}
                readOnly
                rows={4}
                style={{
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    border: '1px solid var(--success-color)'
                }}
            />
        </div>
    );
};

export default ResultDisplay;