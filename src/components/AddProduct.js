import React, { useContext } from 'react';
import ProductForm from './ProductForm';
import ProductsContext from '../context/ProductsContext';

export const AddProduct = ({ history }) => {
  const { products, setProducts } = useContext(ProductsContext);

  const handleOnSubmit = (product) => {
    setProducts([product, ...products]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <ProductForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddProduct;
