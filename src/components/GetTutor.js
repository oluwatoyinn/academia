import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class GetTutor extends Component {
    render() {
        return (
            <>
            
            <div id="getTutor">
               <div className="container-fluid ">
                    <div className=" mt-5 pb-3">
                        <h1 className="text-center mt-5" >Welcome, lets take you around</h1>
                        <p className="text-center"> Academia helps you connect with qualified tutors in your 
                        area to master the subjects, skills and exams that matter to you. </p>
                    </div>
                    <div className="container-fluid pt-0 px-4 ">
                        <div className="row icon mx-5 ">
                            <div className="col-md-4 ">
                                <i className="far fa-calendar-alt fa-7x "></i>
                            <h1 className="text-center">Trusted professional</h1>
                            <p className="text-center text-justify">Book online in about 60 seconds and plan your private lessons according to your own schedule.</p>
                            </div>
                            <div className="col-md-4  ">
                            <i className="fas fa-user-tie  fa-7x"></i>
                            <h1>Learn at your Pace</h1>
                            <p>Book online in about 60 seconds and plan your private lessons according to your own schedule.</p>
                            </div>
                            <div className="col-md-4 " >
                            <i className="fas fa-shield-alt fa-7x "></i>   
                                <h1>safe and secure</h1>
                                <p>Book online in about 60 seconds and plan your private lessons according to your own schedule.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-4 bg-dark info_text pt-2 pl-3">
                            <h1 className="">Need home tutor for your kids</h1>
                            <h2 className="pt-2">Put your kids ahead early</h2>
                            <p>Improve performance in class, get help with homework, build confidence in weak areas, be proud of your kids' results.</p>
                            <h2 className="pt-2" >Hire tutors you can trust</h2>
                            <p className="pb-2">Get fully vetted home tutors who're specifically experienced in teaching, mentoring and inspiring kids like yours.</p>
                            <Link to=""  >
                                <button className="bg-success tutor">get a tutor</button>
                            </Link>
                        </div>
                        <div className="col-md-8 info_img">
                            <img src="img/download.png" alt=""/>
                        </div>
                    </div>
                </div> 
            </div>
            </>
        )
    }
}

export default GetTutor 
