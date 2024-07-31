import React from 'react';
import DoneWishListItem from '../components/DoneWishListItem';

const DonePage = ({ items, deleteItem }) => {
  return (
    <div>
      <div class="number-length"><h1>Вполненный список</h1>
      <h2>{items.filter(i => i.completed).length}</h2></div>
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Количество</th>
            <th>Дата</th>
            <th>Цена</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {items.filter(i => i.completed).map((item, index) => (
            <DoneWishListItem 
              key={index}
              name={item.name}
              quantity={item.quantity}
              date={item.date}
              price={item.price}
              onDelete={() => deleteItem(item.name)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonePage;