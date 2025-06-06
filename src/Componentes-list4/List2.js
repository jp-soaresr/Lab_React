// List2.js
import { useState } from 'react';

// Reutilizando os estilos do componente List
const containerStyle = { display: 'flex', justifyContent: 'center', padding: '40px 20px', backgroundColor: '#f0f2f5', fontFamily: 'sans-serif' };
const cardStyle = { backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '350px' };
const listStyle = { listStyleType: 'none', padding: 0, marginTop: '16px' };
const listItemStyle = { padding: '12px 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const deleteButtonStyle = { padding: '5px 10px', border: 'none', borderRadius: '4px', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer' };

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

export default function List2() {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>Inspiring sculptors:</h1>
        <ul style={listStyle}>
          {artists.map(artist => (
            <li style={listItemStyle} key={artist.id}>
              <span>{artist.name}</span>
              <button style={deleteButtonStyle} onClick={() => {
                setArtists(artists.filter(a => a.id !== artist.id));
              }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}