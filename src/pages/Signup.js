import React from 'react'
import { useFormik } from 'formik';
import Header from '../components/Header';




const bodyy = {
    marginTop : "50px",
    marginLeft : "300px",
    width:"800px"
};
const validate = (values) => {

    const errors = {};
    if (!values.fname) {
        errors.fname = 'Required';
    } else if (values.fname.length > 15) {
        errors.fname = 'Must be 15 characters or less';
    }
    
    if (!values.lname) {
        errors.lname = 'Required';
    } else if (values.lname.length > 10) {
        errors.lname = 'Must be 10 characters or less';
    }
    
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
        } else if (values.password.length > 20) {
        errors.password = 'Invalid Password';
        }
    
    return errors;
    };

const Signup =() => {
    const formik = useFormik({
        initialValues: {
          fname: '',
          lname: '',
          email: '',
          password: '',
        },
        validate,
        onSubmit: async (values, { resetForm }) => {
          try {
            const response = await fetch('http://localhost:3001/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });
            console.log(response)
            if (response.ok) {
              resetForm();
              alert('Registration successful');
            } else {
              alert('Registration failed');
            }
          } catch (error) {
            alert('Registration faaaaailed');
          }
        },
      });

    return (

            <div >
            <Header />            
                <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo " style={bodyy}>
                    <div className="wrapper wrapper--w960">
                        <div className="card card-2">
                            <div className="card-heading"></div>
                            <div className="card-body">
                                <h2 className="title">Registration Platform</h2>
                                <form onSubmit={formik.handleSubmit} >
                                    <div className="mb-3">
                                        <input className="form-control" type="text" placeholder="First Name" onChange={formik.handleChange} value={formik.values.fname} name="fname" />
                                    </div>
                                    <div className="row row-space">
                                        <div className="col">
                                            <div className="mb-3">
                                                <input className="form-control" type="text" onChange={formik.handleChange} value={formik.values.lname} placeholder="Last Name" name="lname" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-space">
                                        <div className="col">
                                            <div className="mb-3">
                                                <input className="form-control" type="email" onChange={formik.handleChange} value={formik.values.email}  placeholder="Email" name="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-space">
                                        <div className="col">
                                            <div className="mb-3">
                                                <input className="form-control" type="password" onChange={formik.handleChange} value={formik.values.password} placeholder="password" name="password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-t-30">
                                        <button type="submit" className="btn btn-primary" >
                                        Submit
                                        </button>    
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Signup

