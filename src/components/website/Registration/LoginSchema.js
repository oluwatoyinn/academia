import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape({
    email:Yup.string()
        .email("Invalid email address")
        .required("required"),
    password:Yup.string()
        .min(5, "too short")
        .required("required")
})