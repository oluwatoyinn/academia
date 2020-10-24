import React, { Component } from 'react'
import {Formik, Form} from "formik"
import {LoginSchema} from '../Registration/LoginSchema'
import {CustomLoginForm} from '../Registration/CustomFormikForm'

class Login extends Component {

    render() {
        return (
            <React.Fragment>
                <Formik initialValues={{
                    email:"",
                    password:''
                }}
                onSubmit={this.props.handleSubmit}
                validationSchema={LoginSchema}
                >
                    {()=>(
                        <Form>
                            <div className="login_page">
                                <div className="container">
                                    <div className="login_form">
                                        <div className="row">
                                            <h1>Login</h1>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <CustomLoginForm
                                                    label="Email"
                                                    labelFor="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <CustomLoginForm
                                                label="Password"
                                                labelFor="password"
                                                name="password"
                                                type="password"
                                                placeholder="Enter your password"
                                            />
                                            </div>
                                           <div className="col-md-12">
                                               <button className="btn btn-primary">Login</button>
                                           </div>
                                            
                                        </div>   
                                    </div>
                                </div>
                            </div>
                           
                        </Form>
                    )}
                    
                </Formik>
            </React.Fragment>
        )
    }
}

export default Login