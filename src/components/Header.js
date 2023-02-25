import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom';
import styled from "styled-components";
import ViewProduct from './ViewProduct';

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };


export default class Header extends Component{
    
    render(){
        return (

        <div>
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav me-auto ">
                        <li className="nav-item active ">
                            <Link to="/"  style={linkStyle}>Home </Link>
                        </li>
                        <li className="nav-item active ">
                            <Link to="/addproduct"  style={linkStyle}>Add Product </Link>
                        </li>
                    </ul>
                </div>
                <div className="mx-auto order-0">
                    <a className="navbar-brand mx-auto" href="#">React Test</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link to="/signup"  style={linkStyle}>SignUp</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/login"  style={linkStyle}>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            <hr></hr>
            < ViewProduct />
        </div>
        )
    }
    
}


