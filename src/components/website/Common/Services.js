import React, { Component } from "react";
import Singleservice from "./SingleService";

const services =[
    {title: 'Trusted Professional', description:'Every tutor is experienced, friendly, manually screened, and thoroughly vetted for highest quality.', icon:'fa-user-tie'},
    {title:'Learn at Your Pace', description:'Book online in about 60 seconds and plan your private lessons according to your own schedule.', icon:'fa-calendar-alt'},
    {title:'Safe and Secure', description:'Trusted by 100s of happy parents, professionals and students with more than 90% success rate.', icon:'fa-shield-alt'}
]
class Services extends Component{
    render(){
        return(
            <React.Fragment>
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Tuteria helps you connect with qualified tutors in your area to master the subjects, skills and exams that matter to you</h3>
                        </div>
                        <div className="row text-center">
                            {services.map((service, index)=>{
                                return <Singleservice {...service} key={index}/>
                            })}
                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}

export default Services