import React from 'react';
import { Col, Row } from 'antd';
import Header from '../../components/Header/Header';

const MainPage: React.FC = () => (
    <Row>
        <Col
            span={24}
            style={{background: "linear-gradient(180deg, #090810 0%, #171236 100%)"}}>
            <Header />
        </Col>
    </Row>
)

export default MainPage;