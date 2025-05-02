import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div>
      <h1>Welcome to E-commerce Platform</h1>
      <p>{message}</p> {/* ✅ Now using `message` */}
    </div>
  );
}

export default App;
