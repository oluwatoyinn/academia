import React, { Component } from 'react'
// import {tutorInfo} from '../Data' 
import styled from 'styled-components'
import axios from 'axios'
import {base_url} from './config/constant'
import {Link}  from 'react-router-dom'

class Experts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
        }
    }

    componentDidMount(){
        this.getTutor()
    }

    getTutor =()=> {
        axios.get(`${base_url}/biodata`)
        .then(res=>{   
            
            this.setState({
                data:res.data
            })
        })
    }

    
    render() {
        const {data} = this.state

        return (

            <>         
                <div className="container-fluid expert_p"> 
                      
                    <h1 className="text-center text-capitalize font-weight-bold">learn from expert</h1>
                    <p className="text-center">No need to struggle. Get an experienced tutor.</p>

                    <div className="row">
                        {data.map(data =>{

                        const {id,img,firstname,lastname,department} = data;

                            return (
                               
                                      <div className="container col-9 mx-auto col-md-6 col-lg-3 my-3 px-5 ml-0"> 
                                          <div className="expert" key={id}>
                                              <div className="card hovercard">
                                                <div className="cardheader">
                                                </div>
                                                <div className="avatar">
                                                  <img alt src={img} />
                                                </div>
                                                <div className="info">
                                                  <div className="title">
                                                    <a target="_blank bg-primary"> {` ${lastname} ${firstname}`} </a>
                                                  </div>
                                                  <div className="desc"> {department} </div>
                                                 
                                                </div>
                                              </div> 
                                        </div>
                                      </div>
                                 

                            )
                        })}
                    </div>
                
                </div>

            </>

        )
    
    }
}

export default Experts

// const Wrapper = styled.div `

// card
// {
//   border-color: transparent;
//   transition: all 1s linear;

// }
// .card-footer
// {
//     background: transparent;
//     border-top:transparent; 
//     transition: all 1s linear;
// }
// &:hover
// {
//     .card{
//         border: 0.04rem solid rgba(0,0,0,0.2);
//         box-shadow:2px 2px 5px 8px rgba(0,0,0,0.2);
//     }
//     .card-footer{
//         background:rgba(247,247,247);
//     } 
// }
// .img_cont
// {
//   position: relative;
//   overflow: hidden;
//   border-radius: 10px;
// }
// .card-img-top{ 
//   transition:all 1s linear;
// }
// .img_cont:hover .card-img-top
// {
//   transform:scale(1.2);
// }


// `
