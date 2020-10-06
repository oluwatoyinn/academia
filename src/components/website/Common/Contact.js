import React, {Component} from 'react'
import {Formik,Form } from 'formik'
import {MessageSchema} from '../../../utils/ValidationSchema'
import {CustomFormInput} from '../Common/CustomForm'

class Contact extends Component {
    render(){
        return(
            <React.Fragment>
                <Formik initialValues={{
                    name:'',
                    email:'',
                    phone:'',
                    message:''
                }}
                // onSubmit={{setSubmitting}=>{
                //     setSubmitting(true)

                // }}
                onSubmit={({setSubmitting})=>{
                    setSubmitting(true)
                }}
                validationSchema={MessageSchema} 
                >

                    {({values,error})=>(
                            <section className="page-section" id="contact">
                                <div className="container">
                                    <div className="text-center">
                                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                                        <h3 className="section-subheading text-muted">Have any question?. Please contact us</h3>
                                    </div>
                                    <Form id="contactForm" name="sentMessage" noValidate="novalidate">
                                        <div className="row align-items-stretch mb-5">
                                            <div className="col-md-6">
                                               <CustomFormInput
                                                    className="form-control"
                                                    id="name"
                                                    type="name"
                                                    placeholder="Your Name"
                                                    name="name"
                                               />

                                                <CustomFormInput
                                                    className="form-control"
                                                    id="email"
                                                    type="email"
                                                    placeholder="Your Email"
                                                    name="email"
                                               />

                                            </div>
                                            <div className="col-md-6">
                                                <CustomFormInput
                                                    className="form-control"
                                                    id="phone"
                                                    type="phone"
                                                    placeholder="Your Phone"
                                                    name="phone"
                                               />

                                                <CustomFormInput
                                                    className="form-group form-group-textarea mb-md-0"
                                                    id="message"
                                                    type="textarea"
                                                    placeholder="Your Message"
                                                    name="message"
                                                    cols="10" rows="2"
                                               />
                                            </div>
                                        </div>
                                    <div className="text-center">
                                        <div id="success" />
                                        <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                                    </div>
                                    </Form>
                                </div>
                            </section>
                    )}

                </Formik>
           

            </React.Fragment>
        )
    }
}

export default Contact