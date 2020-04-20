import React from 'react'
import {Link} from 'react-router-dom'
import {Formik} from 'formik'
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

        h1
        
        <div className="container-fluid sub_ng">
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
                    {formik => (
                    <form>
                    <div className="form-group"> 
                        <label htmlFor="firstname" >First Name</label>
                        <input id="firstname" {...formik.getFieldProps('firstname')} /> 
                        {formik.errors.firstname && formik.touched.firstname  ? (<div style={{color: 'red'}} >{formik.errors.firstname}</div>) :null}
                    </div>
                     <div className="form-group"> 
                        <label htmlFor="lastname" >Last Name</label>
                        <input id="lastname" {...formik.getFieldProps('lastname')} /> 
                        {formik.errors.lastname && formik.touched.lastname  ? (<div style={{color: 'red'}}>{formik.errors.lastname}</div>) :null}
                    </div>
                     <div className="form-group"> 
                        <label htmlFor="contact" >Contact</label>
                        <input id="contact" {...formik.getFieldProps('contact')} /> 
                        {formik.errors.contact && formik.touched.contact  ? (<div style={{color: 'red'}}>{formik.errors.contact}</div>) :null}
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="firstname" >Email</label>
                        <input id="email" {...formik.getFieldProps('email')} /> 
                        {formik.errors.email && formik.touched.email  ? (<div style={{color: 'red'}}>{formik.errors.email}</div>) :null}
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="password" >Password</label>
                        <input id="password" type="password" className="p-3" {...formik.getFieldProps('password')} /> 
                        {formik.errors.password && formik.touched.password ? (<div style={{color: 'red'}} >{formik.errors.password}</div>) :null}
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="confirmPassword" >Confirm Password</label>
                        <input id="confirmPassword" type="password" className="p-3" {...formik.getFieldProps('confirmPassword')} /> 
                        {formik.errors.confirmPassword && formik.touched.confirmPassword  ? (<div style={{color: 'red'}}>{formik.errors.confirmPassword}</div>) :null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Profile</label>
                        <input type="file" name="file" className="form-control-file" id="file"/>
                    </div>
                    <div className="">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
            </form>
        )}
        </Formik>
        </div>
        <div className="col-md-3"></div>


            </div>

        </div>
        

        
        </>
    )
}

export default RegisterTutor

