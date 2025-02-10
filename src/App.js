import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleEvaluate = () => {
    try {
      const result = basicEval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Simple evaluation function
  const basicEval = (expression) => {
    // Replace operators with spaces to avoid injection
    const sanitizedExpression = expression.replace(/[^0-9+\-*/().]/g, '');
    return new Function(`'use strict'; return (${sanitizedExpression})`)(); // Using Function constructor for simplicity
  };

  return (
    <div className={`calculator ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button className="clear" onClick={handleClear}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        
        <button onClick={handleEvaluate} className="equal">=</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>

        <button className="zero" onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
      </div>
    </div>
  );
}

export default App;
