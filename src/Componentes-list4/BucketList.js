// BucketList.js
import { useState } from 'react';

// Estilos
const containerStyle = { display: 'flex', justifyContent: 'center', padding: '40px 20px', backgroundColor: '#f0f2f5', fontFamily: 'sans-serif' };
const cardStyle = { backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '450px' };
const listContainerStyle = { marginTop: '16px' };
const listStyle = { listStyleType: 'none', padding: 0 };
const listItemStyle = { padding: '8px 0', borderBottom: '1px solid #eee' };
const labelStyle = { display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '18px' };
const checkboxStyle = { marginRight: '10px' };

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

// Componente filho para renderizar a lista
function ItemList({ artworks, onToggle }) {
  return (
    <ul style={listStyle}>
      {artworks.map(artwork => (
        <li style={listItemStyle} key={artwork.id}>
          <label style={labelStyle}>
            <input
              style={checkboxStyle}
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(myList.map(a => a.id === artworkId ? { ...a, seen: nextSeen } : a));
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(yourList.map(a => a.id === artworkId ? { ...a, seen: nextSeen } : a));
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>Art Bucket List</h1>
        <div style={listContainerStyle}>
          <h2>My list of art to see:</h2>
          <ItemList artworks={myList} onToggle={handleToggleMyList} />
        </div>
        <div style={listContainerStyle}>
          <h2>Your list of art to see:</h2>
          <ItemList artworks={yourList} onToggle={handleToggleYourList} />
        </div>
      </div>
    </div>
  );
}