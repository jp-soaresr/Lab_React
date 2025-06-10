import { useState } from 'react';

export default function FormQuiz() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  // --- Estilos para o componente ---
  const quizContainerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '500px',
    margin: '40px auto',
    padding: '25px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    border: '1px solid #e9ecef',
    textAlign: 'center',
  };

  const h2Style = {
    color: '#2c3e50',
    marginBottom: '10px',
  };

  const pStyle = {
    color: '#34495e',
    fontSize: '1.1em',
    marginBottom: '20px',
  };

  const textareaStyle = {
    width: '100%',
    height: '100px',
    padding: '12px',
    border: '2px solid #bdc3c7',
    borderRadius: '6px',
    boxSizing: 'border-box',
    fontSize: '1em',
    marginBottom: '20px',
    resize: 'vertical',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#3498db',
    color: 'white',
    fontSize: '1.1em',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, opacity 0.3s ease',
  };

  const buttonDisabledStyle = {
    ...buttonStyle,
    backgroundColor: '#a4b0be',
    cursor: 'not-allowed',
    opacity: '0.7',
  };

  const errorStyle = {
    color: '#e74c3c',
    fontWeight: 'bold',
    marginTop: '15px',
  };
  
  const successStyle = {
    ...quizContainerStyle,
    backgroundColor: '#d4edda',
    color: '#155724',
    border: '1px solid #c3e6cb',
  };

  if (status === 'success') {
    return (
        <div style={successStyle}>
            <h1>That's right!</h1>
        </div>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }
  
  const isButtonDisabled = answer.length === 0 || status === 'submitting';

  return (
    <div style={quizContainerStyle}>
      <h2 style={h2Style}>City quiz</h2>
      <p style={pStyle}>
        In which city is there a billboard that turns air
        into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          style={textareaStyle}
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
          placeholder="Your answer here..."
        />
        <br />
        <button
          style={isButtonDisabled ? buttonDisabledStyle : buttonStyle}
          disabled={isButtonDisabled}
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit'}
        </button>
        {error !== null &&
          <p style={errorStyle}>
            {error.message}
          </p>
        }
      </form>
    </div>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima';
      if (shouldError) {
        reject(new Error('Oops, that\'s not it. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}