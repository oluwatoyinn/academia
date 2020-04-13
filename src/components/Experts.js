import React, { Component } from 'react'
import {tutorInfo} from '../Data'
import styled from 'styled-components'

export class Experts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:tutorInfo
        }
    }

    getTutor =()=> {

    }

    
    render() {

        const {data} = this.state

        return (
            <>

                <div className="container-fluid">
                    <h2 className="text-center text-capitalize font-weight-bold">learn from expert</h2>
                    <p className="text-center">No need to struggle. Get an experienced tutor.</p>

                    <div className="row">
                        {data.map(data=>{
                        const {img,firstname,lastname,department} = data;

                            return (
                                <div className="col-md-3">
                                    <div className="card">                                          
                                        <div className="img_cont">
                                            <img className="card-img-top " src={img} alt="Card image"  />
                                        </div>
                                        <div className="card-footer justify-content-between">
                                            <h4 className="align-self-centre text-center mb-0"> {` ${lastname} ${firstname}`} </h4>
                                            <p className="font-italic text-center mb-0"> {department} </p>
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

const Wrapper = styled.div `
 
card
{
  border-color: transparent;
  transition: all 1s linear
}
.card-footer

{
    background: transparent;
    border-top:transparent; 
    transition: all 1s linear;
}
&:hover
{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 8px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247);
    } 
}
."img"_cont
{
  position: relative;
  overflow: hidden;
}
.card-"img"-top{ 
  transition:all 1s linear;
}
."img"_cont:hover .card-"img"-top
{
  transform:scale(1.2);
}

.expert
{
    
    
}


`
