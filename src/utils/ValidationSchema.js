import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const MessageSchema = Yup.object().shape({
    
    name: Yup.string()
        .min(4, "must be more than 4 character ")
        .required("required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Enter a valid email address"),
    phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required("Enter your contact number"),
    message: Yup.string()
        .required("Please enter your message")
})

export const LoginSchema= Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Enter a valid email address"),
        
    password: Yup.string()
        .min(5, "must be at least 5 character")
        .required("Password is required"),
})

export const RegisterSchema =Yup.object().shape({
    name: Yup.string()
        .min(4, "must be more than 4 character ")
        .required("required"),
    lastName: Yup.string()
        .min(4, "must be more than 4 character ")
        .required("required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Enter a valid email address"), 
    password: Yup.string()
        .min(5, "must be at least 5 character")
        .required("Password is required"),
})