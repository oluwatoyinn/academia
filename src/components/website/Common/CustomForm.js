import React, { Fragment } from 'react'
import {useField} from 'formik'

export const CustomFormInput =({...props})=>{
    const [field, meta] = useField(props)
    return(
        <Fragment>
            <div className="form-group">
                <input className="form-control" 
                  {...field}
                  {...props}
                  className={'form-control' + (meta.error && meta.touched ? ' is-invalid' : '')} 
                />
                <p className="help-block text-danger" />
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