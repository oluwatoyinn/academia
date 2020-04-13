import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Info extends Component {
    render() {
        return (
            <>
               <div className="container-fluid ">
                <div className="row py-5 ">
                    <div className="col-md-4 bg-dark info_text pt-5 pl-5">
                        <h1 className="">Need home tutor for your kids</h1>
                        <h2 className="pt-5">Put your kids ahead early</h2>
                        <p>Improve performance in class, get help with homework, build confidence in weak areas, be proud of your kids' results.</p>
                        <h2 className="pt-5" >Hire tutors you can trust</h2>
                        <p className="pb-5">Get fully vetted home tutors who're specifically experienced in teaching, mentoring and inspiring kids like yours.</p>
                        <Link to=""  >
                            <button className="bg-success tutor">get a home tutor</button>
                        </Link>
                    </div>
                    <div className="col-md-8 info_img">
                        <img src="img/download.png" alt=""/>
                    </div>
                </div>
                </div> 
            </>
        )
    }
}

export default Info
