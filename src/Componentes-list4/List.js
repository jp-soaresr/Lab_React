// List.js
import { useState } from 'react';

// Estilos compartilhados para os componentes de lista
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '40px 20px',
  backgroundColor: '#f0f2f5',
  fontFamily: 'sans-serif',
};

const cardStyle = {
  backgroundColor: 'white',
  padding: '24px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '350px',
};

const inputGroupStyle = {
  display: 'flex',
  gap: '8px',
  marginBottom: '16px',
};

const inputStyle = {
  flexGrow: 1,
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
};

const buttonStyle = {
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#007bff',
  color: 'white',
  fontSize: '16px',
  cursor: 'pointer',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
  marginTop: '16px',
};

const listItemStyle = {
  padding: '12px 0',
  borderBottom: '1px solid #eee',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>Inspiring sculptors:</h1>
        <div style={inputGroupStyle}>
          <input
            style={inputStyle}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button style={buttonStyle} onClick={() => {
            setArtists([
              ...artists,
              { id: nextId++, name: name }
            ]);
            setName('');
          }}>Add</button>
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