import React, { Component } from 'react'
import Singleteam from './SingleTeam'

// Images
import img1 from '../assets/team/boss.jpg'
import img2 from '../assets/team/Kemi.JPG'
import img3 from '../assets/team/rotex.jpg'


const teams =[
    {name:'Victor Ajayi', position:'Deisgner', image:img1, icon1:'fa-twitter', icon2:'fa-facebook-f', icon3:'fa-linkedin-in'},
    {name:'Ibra James', position:'Engineer', image:img2, icon1:'fa-twitter', icon2:'fa-facebook-f', icon3:'fa-linkedin-in'},
    {name:'Noah Annoi', position:'Accountant', image:img3, icon1:'fa-twitter', icon2:'fa-facebook-f', icon3:'fa-linkedin-in'}
]
export default class Team extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="page-section bg-light" id="team">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">No need to struggle. Get an experienced tutor.</h3>
                        </div>
                        <div className="row">
                            {teams.map((team, index)=>{
                                return <Singleteam {...team} key={index}/>
                            })}
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Get fully vetted home tutors who're specifically experienced in teaching, mentoring and inspiring kids like yours.</p></div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
