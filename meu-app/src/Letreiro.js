import React, { useState, useEffect } from 'react';

export default function Letreiro() {
  // Texto completo que será exibido no letreiro
  const textoCompleto = "Venha estudar na Fatec";
  
  // Estado para o texto atual (que será mostrado)
  const [textoAtual, setTextoAtual] = useState("");
  // Estado para o índice do texto
  const [index, setIndex] = useState(0);

  // useEffect para atualizar o texto a cada intervalo de tempo
  useEffect(() => {
    // Se o índice for menor que o comprimento do texto, o intervalo deve continuar
    if (index < textoCompleto.length) {
      const intervalo = setInterval(() => {
        // Adiciona uma letra ao texto exibido
        setTextoAtual((prev) => prev + textoCompleto[index]);
        setIndex(index + 1); // Aumenta o índice
      }, 150); // Intervalo de 150ms

      // Limpeza do intervalo quando o componente for desmontado ou o índice mudar
      return () => clearInterval(intervalo);
    }
  }, [index]); // Dependência é o índice, ou seja, a cada vez que o índice mudar, a animação é disparada.

  return (
    <div>
      <h2>meu letreiro</h2>
      <h1>{textoAtual}</h1>
    </div>
  );
}

  