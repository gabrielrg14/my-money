import React from 'react'

const Input = props => (
    <input className="form-control" {...props.input} 
        placeholder={props.placeholder} readOnly={props.readOnly} 
        type={props.type} />
)

export default Input