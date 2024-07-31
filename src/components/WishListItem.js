import React from 'react';

const WishlistItem = ({ name, quantity, date, price, onDelete, onEdit, onMarkCompleted }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{date}</td>
      <td>{price}</td>
      <td>
        <button onClick={onEdit}>Редактировать</button>
        <button onClick={onDelete}>Удалить</button>
      </td>
      <td>
        <button onClick={onMarkCompleted}>Выполнить</button>
      </td>
    </tr>
  );
};

export default WishlistItem;