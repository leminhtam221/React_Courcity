import React, { useEffect, useState } from 'react';
import Card from './components/Card';

function CartPage(props) {
  const [listCard, setListCard] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('card')) {
      const newListCard = JSON.parse(localStorage.getItem('card'));
      setListCard(newListCard);
    }
  }, []);

  const handleDeleteCard = (card) => {
    const index = listCard.findIndex((item) => item.id === card.id);
    const newListCard = [...listCard];
    newListCard.splice(index, 1);
    setListCard(newListCard);
    localStorage.setItem('card', JSON.stringify(newListCard));
  };

  return (
    <div>
      <div className="container mt-5">
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: '50%' }}>Product</th>
              <th style={{ width: '10%' }}>Price</th>
              <th style={{ width: '8%' }}>Quantity</th>
              <th style={{ width: '22%' }} className="text-center">
                Subtotal
              </th>
              <th style={{ width: '10%' }} />
            </tr>
          </thead>

          <tbody>
            {listCard.length &&
              listCard.map((card, index) => (
                <Card key={index} card={card} handleDeleteCard={handleDeleteCard} />
              ))}
          </tbody>

          <tfoot>
            <tr className="visible-xs">
              <td className="text-center">
                <strong>Total 1.99</strong>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#" className="btn btn-warning">
                  <i className="fa fa-angle-left" /> Continue Shopping
                </a>
              </td>
              <td colSpan={2} className="hidden-xs" />
              <td className="hidden-xs text-center">
                <strong>Total $1.99</strong>
              </td>
              <td>
                <a href="#" className="btn btn-success btn-block">
                  Checkout <i className="fa fa-angle-right" />
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default CartPage;
