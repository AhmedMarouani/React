import React from 'react';
import { useFormik } from 'formik';
import Header from '../components/Header';

const bodyy = {
    marginTop : "50px",
    marginLeft : "300px",
    width:"800px"
};

const validate = (values) => {

    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length >10) {
        errors.name = 'Invalid name';
    }
    
    if (!values.price) {
        errors.price = 'Required';
    } else if (values.price.length > 10) {
        errors.price = 'Invalid price';
    }
    
    if (!values.description) {
        errors.description = 'Required';
    } else if (values.description.length > 100) {
        errors.description = 'Invalid description';
    }
    if (!values.quantity) {
        errors.quantity = 'Required';
        } else if (values.quantity.length > 10) {
        errors.quantity = 'Invalid quantity';
        }
    
    return errors;
};


const AddProduct =() => {

    const formik = useFormik({
        initialValues: {
          name: '',
          price: '',
          description: '',
          quantity: '',
        },
        validate,
        onSubmit: async (values, { resetForm }) => {
          console.log(values); // Add this line to check if the form submission is working
          try {
            const response = await fetch('http://localhost:3002/JProduct', {
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
              window.location.reload(false);
            } else {
              alert('Registration failed');
            }
          } catch (error) {
            alert('Registration failed');
          }
        }
        
      });
    

    return (
            <>
            <Header />
            <div style={bodyy}>
            <h1 className="text-dark text-center">Add Product</h1>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-outline mb-4">
                                <input type="name" id="name" name="name" className="form-control" onChange={formik.handleChange} value={formik.values.name}/>
                                <label className="form-label" htmlFor="name">name</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="price" id="price" name="price" className="form-control" onChange={formik.handleChange} value={formik.values.price}/>
                                <label className="form-label" htmlFor="price">Price</label>
                            </div>
                            
                            <div className="form-outline mb-4">
                                <input type="description" id="description" name="description" className="form-control" onChange={formik.handleChange} value={formik.values.description}/>
                                <label className="form-label" htmlFor="description">Description</label>
                            </div>
                            
                            <div className="form-outline mb-4">
                                <input type="quantity" id="quantity" name="quantity" className="form-control" onChange={formik.handleChange} value={formik.values.quantity}/>
                                <label className="form-label" htmlFor="quantity">Quantity</label>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mb-4">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
            </>
    )
}

export default AddProduct

