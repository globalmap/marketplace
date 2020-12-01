import React from 'react';
import { Typography, Button } from 'antd';
import Input from '../components/Input/Input';
import InputPassword from '../components/InputPassword/InputPassword';
import { useFormik } from 'formik';
import Titleinput from '../components/Input/Input';
import Api from '../../../Api';

const { Title } = Typography;

const SignUp: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            // fullname: ''
        },
        onSubmit: values => {
            Api.Auth.register(values.email, values.password)
                .then(dt => {
                    if(!dt.data.user) { // check error auth
                        alert(dt.data)
                    } else {
                        console.log(dt.data.user)
                    }
                })
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
             <Title level={2} className="textCenter">
                Register
            </Title>
    
            <Titleinput title="email" placeholder="Example@gmail.com" onChange={formik.handleChange} values={formik.values.email} />
            {/* <Titleinput title="Full Name" placeholder="Tony Stark" onChange={formik.handleChange} values={formik.values.fullname} /> */}
            <InputPassword title="password" onChange={formik.handleChange} values={formik.values.password} />
            <InputPassword title="Password Again" />
    
    
            <Button className="button" htmlType="submit" type="primary">Register</Button>
        </form>
    )
}

export default SignUp;