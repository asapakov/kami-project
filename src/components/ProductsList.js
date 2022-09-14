import React, { useContext, Link } from 'react';
import _ from 'lodash';
import Product from './Product';
import ProductsContext from '../context/ProductsContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useSearchParams } from 'react-router-dom';

export const ProductsList = () => {
  const { products, setProducts } = useContext(ProductsContext);
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });


  const handleRemoveProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <div className='d-flex justify-content-between mt-3'>
        <input className='form-control my-4 w-75'
          placeholder='Поиск товара'
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter }, { replace: true });
            } else {
              setSearchParams({}, { replace: true });
            }
          }}
        />
        <div className='my-auto'>
          <NavLink to={"/products/create"} className="btn btn-success" >Добавить</NavLink>
        </div>
      </div>

      <table className='table'>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Стоимость</th>
            <th>Редактировать</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>{!_.isEmpty(products) ? (
          products
            .filter((product) => {
              let filter = searchParams.get('filter');
              if (!filter) return true;
              let name = product.productname.toLowerCase();
              return name.startsWith(filter.toLowerCase().trim());
            })
            .map((product) => (
              <Product key={product.id} {...product} handleRemoveProduct={handleRemoveProduct} />
            ))
        ) : (
          <p className="message">No products available. Please add some products.</p>
        )}
        </tbody>
      </table>
    </div>

  );
};

export default ProductsList;
