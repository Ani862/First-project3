import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Layout from './Layout';
import Product from './Pages/Product';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
             <Route index element={<App/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/product' element={<Product/>}/>
          </Route>    
        </Routes>
        
    </BrowserRouter>
  </React.StrictMode>
);


