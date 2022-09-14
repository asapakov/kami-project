import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react';
import { AddProduct } from './AddProduct';
import { EditProduct } from './EditProduct';
import { Route, useNavigate } from 'react-router-dom';

const Product = ({
  id,
  productname,
  amount,
  handleRemoveProduct
}) => {
  const history = useHistory;
  let navigate = useNavigate();

  return (

    <tr>
      <td className='table-tr'>{productname}</td>
      <td className='table-tr'>{amount}</td>
      <td><Button variant="primary" onClick={() => navigate(`edit/${id}`)}>
        Редактировать
      </Button>{' '}</td>
      <td><Button variant="danger" onClick={() => handleRemoveProduct(id)}>
        Удалить
      </Button></td>
    </tr>
  );
};

export default Product;
