import React from 'react';
import { EyeOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { inputType } from '../Input/Input';
import s from '../Input/Input.module.scss';



const InputPassword: React.FC<inputType> = ({ title, ...props }) => {

    return (
        <div className={s.main}>
            <label htmlFor={title}>{title}</label>
            <Input.Password
                id={title}
                name={title}
                className={s.input}
                onChange={props.onChange}
                value={props.values}
            />
        </div>
    )
}

export default InputPassword;