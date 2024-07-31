import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import DonePage from './pages/DonePage';
import './App.css';

const App = () => {
  const [items, setItems] = useState(() => {
    
    const storedItems = localStorage.getItem('wishlistItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const deleteItem = (name) => {
    setItems(prevItems => prevItems.filter(item => item.name !== name));
  };

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(items));
  }, [items]);

  return (
    <div class="container">
      <Router>
        <nav>
          <Link to="/">Список желаний</Link>
          <Link to="/done">Выполненный список</Link>
        </nav>
        <Routes>
          <Route path="/" element={<TodoPage items={items} setItems={setItems} />} />
          <Route path="/done" element={<DonePage items={items} deleteItem={deleteItem} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;