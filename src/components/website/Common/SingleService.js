import React, { Component } from 'react'

class Singleservice extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        {/* <i className="fas fa-circle fa-stack-2x text-primary" /> */}
                        <i className={`fas ${this.props.icon} fa-stack-1x  `}/>
                    </span>
                    <h4 className="my-3"> {this.props.title} </h4>
                    <p className="text-muted"> {this.props.description} </p>
                </div>
            </React.Fragment>
        )
    }
}


export default Singleservice