import { sculptureList } from '../data2.js';
import { useState } from 'react';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handleMoreclick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <div
                style={{
                    maxWidth: '400px',
                    margin: '40px auto',
                    padding: '24px',
                    borderRadius: '16px',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                    background: '#fff',
                    textAlign: 'center',
                    fontFamily: 'Segoe UI, Arial, sans-serif'
                }}
            >
                <h2 style={{ marginBottom: '8px', color: '#2d3748', fontWeight: 700 }}>
                    {sculpture.name}
                </h2>
                <h3 style={{ margin: '0 0 16px', color: '#718096', fontWeight: 400, fontSize: '1rem' }}>
                    ({index + 1} of {sculptureList.length})
                </h3>
                {showMore && (
                    <p style={{ color: '#4a5568', margin: '16px 0' }}>
                        {sculpture.description}
                    </p>
                )}
                <img
                    src={sculpture.url}
                    alt={sculpture.alt}
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        margin: '16px 0',
                        borderRadius: '12px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                    }}
                />
                <button
                    onClick={handleMoreclick}
                    style={{
                        padding: '8px 20px',
                        borderRadius: '8px',
                        border: 'none',
                        background: '#38a169',
                        color: '#fff',
                        fontWeight: 600,
                        cursor: 'pointer',
                        marginBottom: '16px',
                        transition: 'background 0.2s'
                    }}
                    onMouseOver={e => e.currentTarget.style.background = '#2f855a'}
                    onMouseOut={e => e.currentTarget.style.background = '#38a169'}
                >
                    {showMore ? 'Esconder' : 'Mostrar'} detalhes
                </button>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
                    <button
                        onClick={() => {
                            if (index > 0) {
                                setIndex(index - 1);
                            }
                        }}
                        style={{
                            padding: '8px 20px',
                            borderRadius: '8px',
                            border: 'none',
                            background: index === 0 ? '#cbd5e1' : '#3182ce',
                            color: '#fff',
                            fontWeight: 600,
                            cursor: index === 0 ? 'not-allowed' : 'pointer',
                            transition: 'background 0.2s'
                        }}
                        disabled={index === 0}
                        onMouseOver={e => {
                            if (index !== 0) e.currentTarget.style.background = '#2b6cb0';
                        }}
                        onMouseOut={e => {
                            if (index !== 0) e.currentTarget.style.background = '#3182ce';
                        }}
                    >
                        Voltar
                    </button>
                    <button
                        onClick={() => {
                            if (index < sculptureList.length - 1) {
                                setIndex(index + 1);
                            } else {
                                alert('Você chegou ao final da galeria!');
                            }
                        }}
                        style={{
                            padding: '8px 20px',
                            borderRadius: '8px',
                            border: 'none',
                            background: '#3182ce',
                            color: '#fff',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}
                        onMouseOver={e => e.currentTarget.style.background = '#2b6cb0'}
                        onMouseOut={e => e.currentTarget.style.background = '#3182ce'}
                    >
                        Próximo
                    </button>
                </div>
            </div>
        </>
    );
}