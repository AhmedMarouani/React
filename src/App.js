import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

export default class App extends Component {
  render(){
    return (
      <>
      <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={ <Header />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/editproduct/:id' element={<EditProduct />} />
        </Routes>
      </div>
      </Router>
      </>
    );
  }
  
}

