import React, { Component } from 'react'

class AdminWrapper extends Component {

    render() {
        return (
            <React.Fragment>
               <div className="admin_page">
                   {this.props.children}
               </div>   
            </React.Fragment>
        )
    }
}

export default AdminWrapper