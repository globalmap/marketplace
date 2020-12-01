import React from 'react';
import {  Col, Row } from 'antd';
import s from './AuthBlock.module.scss';
import SighIn from '../../SignIn/SignIn';
import RestorePassword from '../../RestorePassword/RestorePassword';
import SignUp from '../../SignUp/SignUp';

const AuthBlock: React.FC<{ typeAuth?: string }> = ({ typeAuth }) => (
    <>
        <Row justify="center" className={s.main}>
            <Col span={20}>
                {typeAuth === "login"
                    ? <SighIn />
                    : typeAuth === "register" 
                            ? <SignUp />
                    : <RestorePassword />
                }
            </Col>
        </Row>
        {typeAuth === "login"
            &&
                (
                    <Col className={s.main} style={{textAlign: "center"}}>
                        <span>I have no account, <a href="/register">REGISTER NOW</a></span>
                    </Col>
                )
        }
    </>
)

export default AuthBlock;