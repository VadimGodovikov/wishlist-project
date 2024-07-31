import React, { useState, useEffect } from 'react';

const WishlistForm = ({ onAdd, onEdit, existingItem }) => {
  const [name, setName] = useState(existingItem?.name || '');
  const [quantity, setQuantity] = useState(existingItem?.quantity || 1);
  const [date, setDate] = useState(existingItem?.date || '');
  const [price, setPrice] = useState(existingItem?.price || 0);

  useEffect(() => {
    
    if (existingItem) {
      setName(existingItem.name);
      setQuantity(existingItem.quantity);
      setDate(existingItem.date);
      setPrice(existingItem.price);
    } else {
      
      setName('');
      setQuantity(1);
      setDate('');
      setPrice(0);
    }
  }, [existingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, date, price: parseFloat(price) };
    if (existingItem) {
      onEdit && onEdit(item);
    } else {
      onAdd(item);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Название" required />
      <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} required />
      <button type="submit">{existingItem ? 'Редактировать' : 'Добавить'}</button>
    </form>
  );
};

export default WishlistForm;