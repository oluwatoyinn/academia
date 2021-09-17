import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Singleportfolio extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-item">
                        <Link className="portfolio-link" to="/" data-toggle="modal" href="#portfolioModal6">
                            {/* <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                            </div> */}
                            <img className="img-fluid" src={this.props.image} alt="error" />
                        </Link>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading"> {this.props.title} </div>
                            <div className="portfolio-caption-subheading text-muted"> {this.props.subtitle} </div>
                        </div>
                        </div>
                    </div>
                
            </React.Fragment>
        )
    }
}
