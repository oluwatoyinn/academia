import React, { Component } from 'react'
import {Link}  from 'react-router-dom'

export class Register extends Component {
    render() {
        return (

            <React.Fragment>
                <div className="container-fluid sub_bg ">
                    <div className="row">
                        <div className="col-md-4 subject  col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
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
                          </ul>
                          
                        </div>
                        <div className="col-md-5 mr-5">
                            <form>
                                    <div className="form-group">
                                      <label>First Name</label>
                                      <input type="text" className="form-control py-4" placeholder="Enter first name"/>
                                    </div>
                                    <div className="form-group">
                                      <label>Last Name</label>
                                      <input type="text" className="form-control py-4" placeholder="Enter last name"/>
                                    </div>
                                    <div className="form-group">
                                      <label>Contact</label>
                                      <input type="textarea" className="form-control py-4" placeholder="Enter Contact Address"/>
                                    </div>
                                    <div className="form-group">
                                      <label >Email</label>
                                      <input type="email" className="form-control py-4"  placeholder="Email Address"/>
                                    </div>
                                     <div className="form-group">
                                      <label>Password</label>
                                      <input type="password" className="form-control py-4" placeholder="Enter password"/>
                                    </div>
                                     <div className="form-group">
                                      <label for="exampleFormControlFile1">Profile</label>
                                      <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                                     </div>
                                  <div className="">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                  </div>
                            </form>
                        </div>
                        <div className="col-md-3">
                        </div>

                    
                    </div>
                
                </div>

            </React.Fragment>
        )
    }
}

export default Register
