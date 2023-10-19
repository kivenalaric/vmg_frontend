"use client"
import * as React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import "./style.scss"
import H1 from '@/components/atoms/vmg';
import SubButton from "@/components/atoms/button"

interface SignupFormValues {
    name: string;
    email: string;
    password: string;
}

const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&()+-])[a-zA-Z0-9@$!%*?&()+-]{8,}$/;



const signupSchema = Yup.object().shape({
    email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required")
        .matches(
            emailRegex, "Invalid email address"
        ),

    first_name: Yup.string().required("Field is required"),

    password: Yup.string()
        .required("Password is required")
        .min(6, "Password is too short - Should too short")
        .matches(
            passwordRegex,
            "Password should contain a capital, small letter,number and a special character. eg:Asr237$ "
        ),
});


export default function App(props: IAppProps) {
    const [submitting, setSubmitting] = React.useState<boolean>(false)
    const handleFormSubmit = (_values: SignupFormValues) => {
        console.log(_values)
        // setSubmitting(true)
        // setTimeout(() => {
        //     alert(JSON.stringify(_values, null, 2));
        //     console.log(_values)
        //     setSubmitting(false);
        // }, 2000);
    }
    return (
        <div className='flex flex-col items-center justify-center p-24'>
            {/* <h1>Vision Muse Gallery</h1> */}
            <H1 text = "Vision Muse Gallery" />
            <Formik
                initialValues={{ name: "", email: '', password: '' }}
                validationSchema={signupSchema}
                onSubmit={(values: any) => {
                    handleFormSubmit(values);
                }}
            >
                {({ isSubmitting, handleChange }) => (
                    <Form className='form flex flex-col gap-3 px-10 py-11 rounded-lg'>
                        <h2 className='sign_up text-center'>Sign Up</h2>
                        <div className='input_sec flex flex-col gap-3'>
                            <label htmlFor="name">Name</label>
                            <Field type="name" name="name" placeholder="John Doe" className="input px-2 py-1 rounded-xl" onChange={handleChange} required />
                            <ErrorMessage name="name" className="error text-red-600 text-sm" component="div" />
                        </div>
                        <div className='input_sec flex flex-col gap-3'>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" placeholder="john@cracks.com" className="input px-2 py-1 rounded-xl" onChange={handleChange} required />
                            {/* <Field
                                name="email"
                                id="email"
                                placeholder="Enter Email"
                                onChange={handleChange}
                            /> */}
                            <ErrorMessage name="email" className="error text-red-600 text-sm" component="div" />
                        </div>
                        <div className='input_sec flex flex-col gap-3'>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" placeholder="Asr237$" className="input px-2 py-1 rounded-xl" onChange={handleChange} required />
                            <ErrorMessage name="password" className="error text-red-600 text-sm" component="div" />
                        </div>
                        {/* <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button> */}
                        <SubButton text="Submit" type="submit" disabled={isSubmitting} />
                    </Form>
                )}
            </Formik>
        </div>
    );
}
