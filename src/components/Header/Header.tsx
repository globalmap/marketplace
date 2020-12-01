import React from 'react';
import s from './Header.module.scss';
import { Button, Col, Input, Row, Typography } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

type headerType = {
    auth?: boolean,
    textColor?: string,
}

const Header: React.FC<headerType> = ({ auth, textColor }) => (
    <>
    <Row className={s.main} justify="space-around" align="middle" >
        <Col><Title level={2}><a href="/" style={{color: textColor}}>MarketPlace</a></Title></Col>
        
        <Col className={s.rightBlock}>
            <Button type="primary"  size="large">Sell</Button>
            <Link to="/login" className={s.link}>
                <Text style={{color: textColor}}>
                    Login
                </Text>
            </Link>
            <Link to="/favorite" className={s.favorite}>
                <HeartOutlined style={{color: textColor, fontSize: "1.2rem"}} />
            </Link>
        </Col>
        
    </Row> {/* Рендер компоненту нище тільки на головній сторінці */}
    {!auth
        && (
            <>
                <Row className={s.search} justify="center">
                    <Col>
                        <Input
                            className={s.input}
                            placeholder="Search products by name"
                            prefix={<i className="fas fa-search" />}
                        />
                        <Input
                            className={s.input}
                            placeholder="Location"
                            prefix={<i className="far fa-compass" />}
                        />  
                        <button className={s.button} ><i className="fas fa-search" /> Search</button>
                    </Col>
                </Row>
            </>
        )
    }
    </>
)

Header.defaultProps = {
    textColor: "white",
    auth: false
}

export default Header;