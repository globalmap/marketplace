import React from 'react';
import { Button, Typography } from 'antd';
import Input from '../components/Input/Input';
import { useFormik } from 'formik';
import Titleinput from '../components/Input/Input';
import Api from '../../../Api';

const { Title } = Typography;

const RestorePassword: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: (values) => {
            Api.Auth.restorePassword(values.email)
                .then((dt) => {
                    console.log(dt)
                })
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} >
             <Title level={2} className="textCenter">
                Restore Password
            </Title>
    
            <Titleinput title="email" placeholder="Example@gmail.com" onChange={formik.handleChange} values={formik.values.email} />
    
    
            <Button className="button" htmlType="submit" type="primary">Continue</Button>  
        </form>
    )
}

export default RestorePassword;