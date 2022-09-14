import React, { useContext } from 'react';
import ProductForm from './ProductForm';
import { useParams } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';

export const EditProduct = ({ history }) => {
  const { products, setProducts } = useContext(ProductsContext);
  const { id } = useParams();
  const productToEdit = products.find((product) => product.id === id);

  const handleOnSubmit = (product) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts([product, ...filteredProducts]);
    history.push('/');
  };

  return (
    <div>
      <ProductForm product={productToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditProduct;
