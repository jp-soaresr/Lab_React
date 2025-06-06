// CounterList.js
import { useState } from 'react';

// Reutilizando estilos
const containerStyle = { display: 'flex', justifyContent: 'center', padding: '40px 20px', backgroundColor: '#f0f2f5', fontFamily: 'sans-serif' };
const cardStyle = { backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '350px' };
const listStyle = { listStyleType: 'none', padding: 0 };
const listItemStyle = { padding: '12px 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '18px' };
const buttonStyle = { padding: '5px 12px', border: 'none', borderRadius: '4px', backgroundColor: '#28a745', color: 'white', cursor: 'pointer', fontSize: '16px' };

let initialCounters = [0, 0, 0];

export default function CounterList() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <div style={containerStyle}>
        <div style={cardStyle}>
            <h1>Counters</h1>
            <ul style={listStyle}>
                {counters.map((counter, i) => (
                <li style={listItemStyle} key={i}>
                    {counter}
                    <button style={buttonStyle} onClick={() => handleIncrementClick(i)}>
                        +1
                    </button>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
}