import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function NameInputForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting name:", name);
    onSubmit(name);
    setSubmitted(true); // Set submitted to true after onSubmit
  };

  // If submitted is true, navigate to "/Greeting"
  if (submitted) {
    return <Navigate to="/Greeting" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NameInputForm;
