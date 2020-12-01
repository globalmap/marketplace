import React from 'react';
import Header from '../../components/Header/Header';
import AuthBlock from './components/AuthBlock/AuthBlock';
import { Row, Col } from "antd"

const Auth: React.FC<{ authType: string }> = ({authType}) => {
    return (
        <Row>
            <Col
                span={24}
            >
                <Header auth={true} textColor="#000" />
            </Col>

            <Col
                span={12}
                className="authblock"              
            >
                <AuthBlock typeAuth={authType} />
            </Col>
        </Row>
    )
}

export default Auth;