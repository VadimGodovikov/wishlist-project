import React from 'react';

const DoneWishListItem = ({ name, quantity, date, price, onDelete }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{date}</td>
      <td>{price}</td>
      <td>
        <button onClick={onDelete}>Удалить</button>
      </td>
    </tr>
  );
};

export default DoneWishListItem;