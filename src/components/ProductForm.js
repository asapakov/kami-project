import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const ProductForm = (props) => {
    const [product, setProduct] = useState(() => {
        return {
            productname: props.product ? props.product.productname : '',
            amount: props.product ? props.product.amount : '',
        };
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { productname, amount } = product;

    let navigate = useNavigate();

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [productname, amount];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const product = {
                id: uuidv4(),
                productname,
                amount
            };
            navigate('/products');
            props.handleOnSubmit(product);
        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'quantity':
                if (value === '' || parseInt(value) === +value) {
                    setProduct((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            case 'price':
                if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                    setProduct((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            default:
                setProduct((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };

    return (
        <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Наименование товара</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="productname"
                        value={productname}
                        placeholder="Наименование"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Стоимость товара</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="amount"
                        value={amount}
                        placeholder="Стоимость"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-btn">
                    Добавить
                </Button>
            </Form>
        </div>
    );
};

export default ProductForm;
