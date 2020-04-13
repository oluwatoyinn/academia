import React, { Component } from 'react'

export class Products extends Component {
    render() {
        return (
            <>
            <div className="product pb-0">
                <div className=" pb-3">
                    <h1 className="text-center mt-5" >Welcome, lets take you around</h1>
                    <p className="text-center"> Academia helps you connect with qualified tutors in your 
                    area to master the subjects, skills and exams that matter to you. </p>
                </div>
                <div className="container-fluid pt-5 my-3 px-4 ">
                    <div className="row icon mx-5 ">
                        <div className="col-md-4 ">
                            <i className="far fa-calendar-alt fa-7x "></i>
                        <h1>Trusted professional</h1>
                        <p className="text-center">Book online in about 60 seconds and plan your private lessons according to your own schedule.</p>
                        </div>
                        <div className="col-md-4 ">
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
            </div>
            </>
        )
    }
}

export default Products

