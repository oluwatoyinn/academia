import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'



const validationSchema = Yup.object().shape({
    firstname: Yup.string().max(15, "must be 15 character or less").required("required"),
    lastname: Yup.string().min(2).required("required"),
    contact: Yup.string().min(1, "must have a character").required("must enter your contact"),
    email: Yup.string().email("Invalid email address").required("Enter a valid email address"),
    password: Yup.string().min(5, "Password must contain at least 5 characters").required("Enter your password"),
    confirmPassword:Yup.string("Enter your password").required("Confirm your password").oneOf([Yup.ref("password")],"Password does not match"),
    file: Yup.mixed().required()
})





const RegisterTutor = () => {  
    return (

        <>
         <Navbar bg="dark" variant="dark" className=" navbar fixed-top"  collapseOnSelect expand="lg">
                    {/* <Navbar.Brand href="#home" className="mr-5">Academia</Navbar.Brand> */}
                   <span className="text-capitalize header" >Join thousand of professional</span>
                        <Nav className=" ml-auto" >
                            <ul className="navbar-nav align-items-center ml-5 mr-5 ">
                                <li className="nav-item  mr-3 text-light font-weight-bold ">
                                    <Link to="/" className="nav-link"> HOME</Link>
                                </li>  
                            </ul>  
                        </Nav>
        </Navbar> 
        
        <div className="container-fluid mt-5">
            <div className="registerTutor">
                <div className="col-md-12 clearfix mb-2">
                        {/* <div className="float-right">
                                <Link to="/"> 
                                    <i className="fas fa-chevron-circle-left" ><span className="mt-3  pr-3"> Go Back</span> </i> 
                                </Link>
                        </div>  */}
                   
                </div>
                <div className="row">
                <div className="col-md-4 subject  col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                <div className="vl"></div>
                            <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            </form>
                          <ul className="list-unstyled text-capitalize mt-3">
                              <hr/>
                              <li>
                                  <p> <Link to="" >Calculus</Link> </p>
                              </li>
                              <hr/>
                              <li>
                                  <p> <Link to="">Physics</Link> </p>
                              </li>
                              <hr/>
                              <li>
                                  <p><Link to="">Chemistry</Link></p>
                              </li>
                              <hr/>
                              <li>
                                  <p><Link to="">Biology</Link></p>
                              </li>
                              <hr/>
                               <li>
                                  <p><Link to="">Calculus</Link></p>
                              </li>
                              <hr/>
                              <li>
                                  <p><Link to="">Physics</Link></p>
                              </li>
                              <hr/>
                              <li>
                                  <p><Link to="">Chemistry</Link></p>
                              </li>
                              <hr/>
                              <li>
                                  <p><Link to="">Biology</Link></p>
                              </li>
                              <hr/>
                              <li>
                                  <p><Link to="">Physics</Link></p>
                              </li>
                              <hr/>
                              <li>
                                  <p><Link to="">Chemistry</Link></p>
                              </li>
                              <hr/>
                              <li>
                                  <p><Link to="">Biology</Link></p>
                              </li>
                              <hr/>
                              <li>
                                  <p><Link to="">Web Design</Link></p>
                              </li>
                              <hr/>
                                <li>
                                  <p><Link to="">React js</Link></p>
                              </li>
                              <hr/>
                                <li>
                                  <p><Link to="">JavaScript</Link></p>
                              </li>
                              <hr/>
                          </ul> 
                </div>
                <div className="vl"></div>
                <div className="col-md-5 wrap">
                    <Formik initialValues={
                        {firstname:"",
                        lastname:"",
                        contact:"",
                        email:"", 
                        password:"",
                        confirmPassword:"", 
                        file:null}} 
                        validationSchema={validationSchema}
                        >
                    {({handleBlur,getFieldProps,touched,errors}) => (
                    <Form>
                    <div className="form-group"> 
                        <label htmlFor="firstname" >First Name</label>
                        <input id="firstname" onBlur={handleBlur} {...getFieldProps('firstname')}  /> 
                        {touched.firstname && errors.firstname  ? (<div style={{color: 'red'}} >{errors.firstname}</div>) :null}
                    </div>
                     <div className="form-group"> 
                        <label htmlFor="lastname" >Last Name</label>
                        <input id="lastname" {...getFieldProps('lastname')} /> 
                        {errors.lastname &&touched.lastname  ? (<div style={{color: 'red'}}>{errors.lastname}</div>) :null}
                    </div>
                     <div className="form-group"> 
                        <label htmlFor="contact" >Contact</label>
                        <input id="contact" {...getFieldProps('contact')} /> 
                        {errors.contact && touched.contact  ? (<div style={{color: 'red'}}>{errors.contact}</div>) :null}
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="firstname" >Email</label>
                        <input id="email" {...getFieldProps('email')} /> 
                        {errors.email && touched.email  ? (<div style={{color: 'red'}}>{errors.email}</div>) :null}
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="password" >Password</label>
                        <input id="password" type="password" className="p-3" {...getFieldProps('password')} /> 
                        {errors.password && touched.password ? (<div style={{color: 'red'}} >{errors.password}</div>) :null}
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="confirmPassword" >Confirm Password</label>
                        <input id="confirmPassword" type="password" className="p-3" {...getFieldProps('confirmPassword')} /> 
                        {errors.confirmPassword && touched.confirmPassword  ? (<div style={{color: 'red'}}>{errors.confirmPassword}</div>) :null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Profile</label>
                        <input type="file" name="file" className="form-control-file" id="file"/>
                        {errors.file && touched.file  ? (<div style={{color: 'red'}}>{errors.file}</div>) :null}
                    </div>
                    <div className="">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
            </Form>
        )}
        </Formik>
        </div>
        <div className="col-md-3"></div>


            </div>

            </div>
                
        </div>
        

        
        </>
    )
}

export default RegisterTutor

