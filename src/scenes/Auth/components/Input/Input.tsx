import { Col, Row, Input } from 'antd';
import React from 'react';
import s from './Input.module.scss';

 export type inputType = {
    placeholder?: string,
    title: string,
    type?: string,
    onChange?: any,
    values?: string
}

const Titleinput: React.FC<inputType> = ({ placeholder, title, type, ...props }) => (
    <div className={s.main}>
        <label htmlFor={title}>{title}</label>
        <Input id={title} name={title} onChange={props.onChange} value={props.values} placeholder={placeholder} className={s.input} />
    </div>

)

export default Titleinput;