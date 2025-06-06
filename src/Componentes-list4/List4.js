// List4.js
import { useState } from 'react';

// Reutilizando estilos
const containerStyle = { display: 'flex', justifyContent: 'center', padding: '40px 20px', backgroundColor: '#f0f2f5', fontFamily: 'sans-serif' };
const cardStyle = { backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '350px' };
const buttonStyle = { width: '100%', padding: '10px 15px', border: 'none', borderRadius: '4px', backgroundColor: '#17a2b8', color: 'white', cursor: 'pointer', fontSize: '16px' };
const listStyle = { listStyleType: 'none', padding: 0, marginTop: '16px' };
const listItemStyle = { padding: '12px 0', borderBottom: '1px solid #eee' };

const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export default function List4() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <div style={containerStyle}>
        <div style={cardStyle}>
            <button style={buttonStyle} onClick={handleClick}>
                Reverse
            </button>
            <ul style={listStyle}>
                {list.map(artwork => (
                <li style={listItemStyle} key={artwork.id}>{artwork.title}</li>
                ))}
            </ul>
        </div>
    </div>
  );
}