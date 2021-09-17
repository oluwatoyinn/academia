import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Singleteam extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src={this.props.image} alt="" />
                        <h4> {this.props.name} </h4>
                        <p className="text-muted"> {this.props.position} </p>
                        <Link className="btn btn-dark btn-social mx-2" to="/" href="#!"><i className={`fab ${this.props.icon1}`} /></Link>
                        <Link className="btn btn-dark btn-social mx-2" to="/" href="#!"><i className={`fab ${this.props.icon2}`} /></Link>
                        <Link className="btn btn-dark btn-social mx-2" to="/" href="#!"><i className={`fab ${this.props.icon3}`} /></Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
