import React from 'react'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'
import getValidationState from './getValidationState'
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

export default props => {
    const { input, meta, label, options } = props

    return (
        <FormGroup validationState={getValidationState(meta)}>
            <ControlLabel>{label}</ControlLabel>
            <Typeahead multiple
                onChange={(selected) => {
                    // Handle selections...
                }}
                options={options}
            />

        </FormGroup>
    )
}
