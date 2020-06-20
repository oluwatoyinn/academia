import React, { Component } from 'react'
import BottomFooter from './BottomFooter'
import {Link} from 'react-router-dom'


class Footer extends Component {

   
    render() {
        return (
            <React.Fragment>
                <div id="footer">
                <div className="container-fluid">
                    <div className="col-12 footerPage">
                    <footer className=" page-footer apply_tutor font-small bg-primary my-5 py-2">
                            <div className=" apply_text">
                                <div className="list-unstyled list-inline my-3 text-center  ">
                                    <div className="my-4">
                                        <h5 className="text-capitalize teaching">experienced in teaching?</h5>
                                    </div>
                                    <div className="my-4">
                                        <Link to="/registertutor" className="btn tutor text-capitalize">apply to tutor</Link>
                                    </div>
                                </div>                       
                            </div>               
                    

                        <div className=" text-center pt-5 ">
                        {/* Grid row */}
                            <div className="row">
                            {/* Grid column */}

                            <div className="col-md-3 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                                <h5 className="font-weight-bold text-uppercase mb-4">get to know us</h5>
                                <ul className="list-unstyled text-capitalize">
                                    <li>
                                        <p> <Link to="#">about academia</Link> </p>
                                    </li>
                                    <li>
                                        <p> <Link to="/">trust and safety</Link> </p>
                                    </li>
                                    <li>
                                        <p><Link to="/">blog</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to="/">awards</Link></p>
                                    </li>
                                </ul>
                            </div>

                            {/* Grid column */}
                            <hr className="clearfix w-100 d-md-none" />
                            {/* Grid column */}

                            <div className="col-md-3 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                                <h5 className="font-weight-bold text-uppercase mb-4">learn with us</h5>
                                <ul className="list-unstyled text-capitalize">
                                    <li>
                                        <p> <Link to="">home tutoring</Link> </p>
                                    </li>
                                    <li>
                                        <p> <Link to="/">find subject </Link> </p>
                                    </li>
                                    <li>
                                        <p><Link to="/">find tutor</Link></p>
                                    </li>
                                
                                </ul>
                            </div>

                            <hr className="clearfix w-100 d-md-none" />

                            <div className="col-md-3 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                                <h5 className="font-weight-bold text-uppercase mb-4">work with us</h5>
                                <ul className="list-unstyled text-capitalize">
                                    <li>
                                        <p> <Link to="/registertutor">become a tutor</Link> </p>
                                    </li>          
                                </ul>
                            </div>
                        
                            <hr className="clearfix w-100 d-md-none" />
                            
                        
                            {/* Grid column */}
                            <hr className="clearfix w-100 d-md-none" />
                            {/* Grid column */}

                            <div className="col-md-3 col-lg-2 text-center mx-auto my-4">
                                <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>  
                                <ul className="list-unstyled py-2">
                                    <li>
                                        <Link to="/" type="button" className="btn-floating btn-fb py-2">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" type="button" className="btn-floating btn-tw">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>             
                                        <Link to="/" type="button" className="btn-floating btn-gplus py-2">
                                            <i className="fab fa-google-plus-g" />
                                        </Link>
                                    </li>
                                    <li>                
                                    <Link to="/" type="button" className="btn-floating btn-dribbble py-2">
                                        <i className="fab fa-dribbble" />
                                    </Link>
                                    </li> 
                                </ul> 
                            </div>
                            </div>
                        </div>
                        {/* <div className=" footerbelow fixed-below text-center">
                            <footer class="bg-dark">Copyright@2019 <span>web class starks</span>.All rights reserved | Designed by <span>oluwatoyinn</span></footer>
                        </div> */}
                        <BottomFooter/>
                </footer>
                
                
                    </div>
                </div>
                
                {/* Footer */}
                </div>

            </React.Fragment>
        )
    }
}

export default Footer
