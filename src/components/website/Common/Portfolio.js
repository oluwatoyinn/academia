import React, {Component} from "react"
import Singleportfolio from "./SinglePortfolio"

import img_1 from '../assets/teach.jpg'
import img_2 from '../assets/portfolio/eng2.jpg'
import img_3 from '../assets/portfolio/computer.jpg'
import img_4 from '../assets/portfolio/exam.jpg'
import img_5 from '../assets/portfolio/cook2.jpeg'
import img_6 from '../assets/portfolio/frontend.png'

const portfolio =[ 
    {title:'Mathematics', subtitle:'Algebra Calculus Geometry', image:img_1},
    {title:'English', subtitle:'Writing Grammar Literature', image:img_2},
    {title:'Cooking', subtitle:'Cakes Soups Snacks', image:img_5},
    {title:'Exam Preparation', subtitle:'SAT TOEFL ICAN IGCSE', image:img_4},
    {title:'Computer', subtitle:'Keyboard, Monitor, Mouse', image:img_3},
    {title:'Frontend', subtitle:'HTML, JavaScript, CSS', image:img_3}

]
class Porfolio extends Component{
    render(){
        return(
            <React.Fragment>
               <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Check some of the aspect we can help you with</h3>
                    </div>
                    <div className="row">
                        {portfolio.map((item, index)=>{
                            return <Singleportfolio {...item} key={index} />
                        })}
                    </div>
                </div>
             </section>
            </React.Fragment>
        )
    }
}
export default Porfolio;