import React, { useState } from 'react';
import WishlistForm from '../components/WishListForm';
import WishlistItem from '../components/WishListItem';

const TodoPage = ({ items, setItems }) => {
  const [editingItem, setEditingItem] = useState(null);
  
  const addItem = (item) => {
    setItems([...items, { ...item, completed: false }]);
  };

  const editItem = (item) => {
    setItems(items.map(i => (i.name === item.name ? item : i)));
    setEditingItem(null);
  };

  const deleteItem = (name) => {
    setItems(items.filter(i => i.name !== name));
  };

  const markAsCompleted = (name) => {
    setItems(items.map(i => (i.name === name ? { ...i, completed: true } : i)));
  };

  return (
    <div>
      <div class="number-length"><h1>Список желаний</h1>
      <h2>{items.filter(i => !i.completed).length}</h2></div>
      <WishlistForm 
        onAdd={addItem} 
        onEdit={editingItem ? editItem : undefined} 
        existingItem={editingItem} 
        setEditingItem={setEditingItem}
      />
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Количество</th>
            <th>Дата</th>
            <th>Цена</th>
            <th>Действие</th>
            <th>Выполнено</th>
          </tr>
        </thead>
        <tbody>
          {items.filter(i => !i.completed).map((item, index) => (
            <WishlistItem
              key={index}
              name={item.name}
              quantity={item.quantity}
              date={item.date}
              price={item.price}
              onDelete={() => deleteItem(item.name)}
              onEdit={() => setEditingItem(item)}
              onMarkCompleted={() => markAsCompleted(item.name)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoPage;