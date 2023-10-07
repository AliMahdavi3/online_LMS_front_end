import React from 'react'
import Input from './Input';

const FormikControl = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props}/>
        default:
            return null;
    }
}

export default FormikControl
