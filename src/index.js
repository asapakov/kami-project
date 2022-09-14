import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './router/App';
import './styles.scss';

const root = ReactDOM.createRoot(
    document.getElementById("root")
  );
  root.render(<App/>)