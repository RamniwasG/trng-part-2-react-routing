import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router";
import reportWebVitals from './reportWebVitals';
import Header from './common/Header';
import { headerMenuList } from './constants/headerConstants';
import ProductsPage from './components/Products';
import GalleryPage from './components/Gallery';
import AboutPage from './components/AboutUs';
import SerivicesComp from './components/Services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='container-fluid'>
        <Header menuList={headerMenuList} />
        <div className='App-container'>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<App />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path='/services' element={<SerivicesComp />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
