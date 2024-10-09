import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NameInputForm from './NameInputForm';
import Greeting from './Greeting';
import ItemMaster from './ItemMaster';


function App() {
  const [name, setName] = useState('');

  const handleSubmit = (submittedName) => {
    setName(submittedName);
  };

  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4 text-white">
            <li>
              <a href="/" className="hover:underline">welcome to my Home</a>
            </li>
            <li>
              <a href="/greeting" className="hover:underline">Greeting message</a>
            </li>
            <li>
              <a href="/item-master" className="hover:underline">Item Master</a>
            </li>
            <li>
              <a href="/purchase-order" className="hover:underline">Purchase Order</a>
            </li>
          </ul>
        </nav>

        {/* Route Management */}
        <Routes>
          <Route path="/" element={<NameInputForm onSubmit={handleSubmit} />} />
          <Route path="/greeting" element={<Greeting name={name} />} />
          <Route path="/item-master" element={<ItemMaster />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
