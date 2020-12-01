import React, { FormEvent } from 'react';
import { Typography, Button } from 'antd';
import { useFormik } from 'formik';
import Titleinput from '../components/Input/Input';
import InputPassword from '../components/InputPassword/InputPassword';
import Api from '../../../Api/index';

const { Title } = Typography

const SighIn: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            Api.Auth.login(values.email, values.password)
                .then(dt => {
                    if(dt.data.code) { // check error auth
                        alert(dt.data.message)
                    } else {
                        console.log(dt.data.user.email)
                    }
                })
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} method="POST">
            <Title level={2} className="textCenter">
                Login
            </Title>

            <Titleinput title="email" onChange={formik.handleChange} values={formik.values.email} placeholder="Example@gmail.com" />
            <InputPassword title="password" onChange={formik.handleChange} values={formik.values.password} />
            <a href="/restore" className="textRight">Don’t remember password?</a>


            <Button htmlType="submit" className="button" type="primary">Continue</Button>
        </form>
    )
}

export default SighIn;