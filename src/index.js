import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Courses from './Components/Home/Courses';
import Footer from './Components/Footer/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Header />
    <Home />3
    <Courses />
    <Footer />
    {/* <App /> */}
  </React.StrictMode>
);
