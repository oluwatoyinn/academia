import React, { Fragment } from 'react'
import {useField} from 'formik'

export const CustomLoginForm=({iconFor, ...props})=>{
    const [field,meta] = useField(props)
    return(
        <Fragment>
            <div className="form-group input-field">
                <i className={iconFor} />
                <input 
                {...field}
                {...props} 
                className={'form-control' + (meta.error && meta.touched ? ' is-invalid' : '')} 
                />
                 {meta.error&&meta.error?(
                        <div className="invalid-feedback">
                            {meta.error}
                        </div> 
                    ) : null
                 }
            </div>
       </Fragment>
    )
   
}