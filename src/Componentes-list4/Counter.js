import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '30vh',
            background: '#f7fafc',
            fontFamily: 'Segoe UI, Arial, sans-serif'
        }}>
            <div style={{
                background: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                padding: '32px 40px',
                display: 'flex',
                alignItems: 'center',
                gap: '24px'
            }}>
                <h1 style={{
                    fontSize: '4rem',
                    color: '#2d3748',
                    margin: 0
                }}>
                    {number}
                </h1>
                <button
                    onClick={() => { setNumber(number + 1); }}
                    style={{
                        padding: '16px 28px',
                        fontSize: '1.5rem',
                        borderRadius: '8px',
                        border: 'none',
                        background: '#3182ce',
                        color: '#fff',
                        fontWeight: 600,
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        transition: 'background 0.2s'
                    }}
                    onMouseOver={e => e.currentTarget.style.background = '#2b6cb0'}
                    onMouseOut={e => e.currentTarget.style.background = '#3182ce'}
                >
                    +1
                </button>
            </div>
        </div>
    );
}
