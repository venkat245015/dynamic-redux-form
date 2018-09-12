import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Suggestions from '../../components/suggession'
import { Row, Col } from 'react-bootstrap'

export const WizardContext = React.createContext()

class WizardProvider extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentStepIndex: 0,
      query: '',
      results: []
    }
  }


  getInfo = () => {
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

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 0) {
        this.getInfo()
      }
    })
  }

  goToStep = stepIndex => something => {
    //console.log(JSON.stringify(something.step1.applicant));
    fetch('http://localhost:8080/forminsert', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(something.step1.applicant),
    }).then((response) => {
      console.log(response)
    });
  }

  render() {
    const { goToStep } = this
    const { currentStepIndex } = this.state
    const { children, steps } = this.props

    return (

      <WizardContext.Provider value={{ currentStepIndex, steps, goToStep }}>
        {children}
        <Row>
          <Col md={10}>
            <input
              placeholder="Search for..."
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
            <Suggestions results={this.state.results} />
          </Col>
        </Row>
      </WizardContext.Provider>
    )
  }
}

WizardProvider.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

WizardProvider.defaultProps = {
  steps: []
}

export default WizardProvider