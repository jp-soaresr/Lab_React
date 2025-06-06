// List3.js
import { useState } from 'react';

// Reutilizando estilos
const containerStyle = { display: 'flex', justifyContent: 'center', padding: '40px 20px', backgroundColor: '#f0f2f5', fontFamily: 'sans-serif' };
const cardStyle = { backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '350px' };
const inputGroupStyle = { display: 'flex', gap: '8px', marginBottom: '16px' };
const inputStyle = { flexGrow: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' };
const buttonStyle = { padding: '10px 15px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' };
const listStyle = { listStyleType: 'none', padding: 0, marginTop: '16px' };
const listItemStyle = { padding: '12px 0', borderBottom: '1px solid #eee' };

let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

export default function List3() {
  const [name, setName] = useState('Teste');
  const [artists, setArtists] = useState(initialArtists);

  function handleClick() {
    const insertAt = 1; // Insere na segunda posição
    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>Inspiring sculptors:</h1>
        <div style={inputGroupStyle}>
          <input style={inputStyle} value={name} onChange={e => setName(e.target.value)} />
          <button style={buttonStyle} onClick={handleClick}>Insert</button>
        </div>
        <ul style={listStyle}>
          {artists.map(artist => (
            <li style={listItemStyle} key={artist.id}>{artist.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}