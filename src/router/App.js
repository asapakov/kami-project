import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import Header from '../components/Header';
import ProductsContext from '../context/ProductsContext';
import useLocalStorage from '../storage/useLocalStorage';
import { ProductsList } from '../components/ProductsList';
import { AddProduct } from '../components/AddProduct';
import { EditProduct } from '../components/EditProduct';

const App = () => {
    const [products, setProducts] = useLocalStorage('products', []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <ProductsContext.Provider value={{ products, setProducts }}>
                        <Routes>
                            <Route path="products" element={<ProductsList products={products} />} />
                            <Route path="/products/edit/:id" element={<EditProduct />} />
                            <Route path='products/create' element={<AddProduct />} />
                            <Route
                                path="*"
                                element={
                                    <main style={{ padding: "1rem" }}>
                                        <p>There's nothing here!</p>
                                    </main>
                                }
                            />
                        </Routes>
                    </ProductsContext.Provider>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
