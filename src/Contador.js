import React, { useState } from 'react';

export default function ContadorGenero() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  // Cálculo do total
  const total = homens + mulheres;

  // Funções para incrementar e decrementar, com limite mínimo de 0
  const incrementarHomens = () => setHomens(homens + 1);
  const decrementarHomens = () => setHomens(homens > 0 ? homens - 1 : 0);

  const incrementarMulheres = () => setMulheres(mulheres + 1);
  const decrementarMulheres = () => setMulheres(mulheres > 0 ? mulheres - 1 : 0);

  return (
    <div>
      <h2>Contador de Gênero</h2>

      <div>
        <h3>Homens: {homens}</h3>
        <button onClick={incrementarHomens}>+</button>
        <button onClick={decrementarHomens}>-</button>
      </div>

      <div>
        <h3>Mulheres: {mulheres}</h3>
        <button onClick={incrementarMulheres}>+</button>
        <button onClick={decrementarMulheres}>-</button>
      </div>

      <hr />
      <h3>Total: {total}</h3>
    </div>
  );
}
