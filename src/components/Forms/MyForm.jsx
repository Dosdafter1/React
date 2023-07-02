import { red } from '@mui/material/colors';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import styles from './MyForm.module.css'
const initialValues = {
    name: '',
    amount: 1,
    price: 0.00
}
const PRODUCT_SCHEMA = Yup.object().shape({
    name: Yup.string()
            .required('Name is required')
            .min(3)
            .max(10),
    amount: Yup.number().min(1).positive().integer().required(),
    price: Yup.number().min(0).positive().required()
})



const MyForm = () => {
    const submitHandler = (values, formikBag)=>{
        console.log(values)
        formikBag.resetForm();
    }
    return (
        <div>
            <h1>Form</h1>
            <Formik initialValues={initialValues}
                    onSubmit={submitHandler}
                    validationSchema={PRODUCT_SCHEMA}
            >
                {()=><Form>
                    <div>
                        <Field name="name" placeholder="Product name..."/>
                        <ErrorMessage component="div" name='name' className={styles.error}/>
                    </div>
                    <div>
                        <Field name="amount"/>
                        <ErrorMessage component="div" name='amount' className={styles.error}/>
                    </div>
                    <div>
                        <Field name="price"/>
                        <ErrorMessage component="div" name='price' className={styles.error}/>
                    </div>
                    <Field type="submit" value="ADD" id="add"/>
                    </Form>}
            </Formik>
        </div>
    );
}

export default MyForm;
