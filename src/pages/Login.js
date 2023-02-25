import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import { useFormik } from 'formik';
import styled from "styled-components";
import axios from 'axios';



const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black'
  };
  const bodyy = {
    marginTop : "50px",
    marginLeft : "350px",
    width:"600px"
};

  const loginLinkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length > 20) {
        errors.password = 'Invalid email address';
      }
  
    return errors;
  };





  const Login =() => {
    const [users, setUsers] = useState([]);

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validate,
      onSubmit: (values) => {
        const foundUser = users.find((user) => user.email === values.email && user.password === values.password);
        if (foundUser) {
          alert('Found');
        } else {
          alert('Not found');
        }
      },
    });
  
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3001/users');
      const data = await response.json();
      setUsers(data);
    };
  
    useState(() => {
      fetchUsers();
    }, []);

        return (
                <>
                <Header />
                <div style={bodyy}>
                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <Link to="/login" className="nav-link active" style={loginLinkStyle}>Login</Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link to="/signup" className="nav-link" style={linkStyle}>SignUp</Link>

                    </li>
                    </ul>

                    <div className="tab-content">
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form onSubmit={formik.handleSubmit}>
                        <div className="text-center mb-3">
                            <p>Sign in with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-github"></i>
                            </button>
                        </div>

                        <p className="text-center">or:</p>

                        <div className="form-outline mb-4">
                            <input type="email" id="email" name="email" className="form-control" onChange={formik.handleChange} value={formik.values.email}/>
                            <label className="form-label" htmlFor="email">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="password" name="password" className="form-control" onChange={formik.handleChange} value={formik.values.password}/>
                            <label className="form-label" htmlFor="password">Password</label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                        <div className="text-center">
                            <p>Not a member?<Link to="/signup" className="nav-link" style={linkStyle}>SignUp</Link>
</p>
                        </div>
                        </form>
                    </div>
                    </div>
                    </div>
                </>
        )
    }
    
export default Login


