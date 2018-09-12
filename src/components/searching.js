import React from 'react'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'
import getValidationState from './getValidationState'
import Suggestions from './suggession'
export default props => {
    const { input, type, meta, label } = props
    this.state = {
        currentStepIndex: 0,
        query: '',
        results: []
    }
    const getInfo = () => {
        fetch('http://www.json-generator.com/api/json/get/bUzWfNvile?indent=2', {
            method: 'GET',
        }).then((response) => {
            response.json().then((result) => {
                var resultset = [];
                var i;
                for (i = 0; i < result.length; i++) {
                    resultset.push(result[i]);
                }
                this.setState({
                    // MusicGraph returns an object named data, 
                    // as does axios. So... data.data     
                    results: resultset
                })

                console.log(this.state.results);
            });

        });


    }

    const handleInputChange = () => {
        console.log("testing");
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            }
        })
    }
    return (
        <FormGroup validationState={getValidationState(meta)}>
            <ControlLabel>{label}</ControlLabel>
            <input
                placeholder="Search for..."
                ref={{ ...input }}
                onChange={this.handleInputChange}
            />
            <Suggestions results={this.state.results} />
        </FormGroup>
    )
}
