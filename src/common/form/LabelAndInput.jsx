import React from 'react'
import Grid from '../layout/Grid'

const LabelAndInput = props => (
    <Grid cols={props.cols}>
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input className="form-control" {...props.input} 
                placeholder={props.placeholder} readOnly={props.readOnly} 
                type={props.type} />
        </div>
    </Grid>
)

export default LabelAndInput