import React, {useState} from 'react'
// import {TextField, Button} from '@material-ui/core'

const TestingReg = () => {

    const initialState ={
        name:'',
        address:'',
        house:'',
        message:''
    }

    const [data, setData] = useState(initialState)

    const handleInput = e => {
      const {name, value} = e.target
      setData(data=>({...data, [name]:value}))
    }

    const handleSubmit = e => {
        e.preventDefault()
        alert(JSON.stringify(data, null, 2))
    }

    const {name,address,house,message} = data
    return (
        <div style={{alignContent:'center', paddingLeft:'100px'}}>
            <h1>Testing</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="col-md-5">
                        <input type="text" name="name" value={name} onChange={handleInput}/> 
                    </div>
                    <div className="col-md-5">
                        <input type="text" name="address" value={address} onChange={handleInput}/> 
                    </div>
                    <div className="col-md-5">
                        <input type="text" name="house" value={house} onChange={handleInput}/> 
                    </div>
                    <div className="col-md-5">
                        <textarea type="text" name="message" value={message} onChange={handleInput}/> 
                    </div>
                    <button type="submit">Submit</button> 
                </form>
               

                {/* <TextField value name="name"  />
                <TextField value name="address"  />
                <TextField value name="house" />
                <TextField value name="message" /> */}

                {/* <Button />  */}
            </div>
        </div>
    )
}

export default TestingReg
