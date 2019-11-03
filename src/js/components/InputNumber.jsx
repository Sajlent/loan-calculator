import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { changeLoanAmount } from '../actions/actions';
import { connect } from "react-redux";

class InputNumber extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // TODO: Add input validation for min max value
        const loanAmount = parseInt(e.target.value, 10);

        this.props.dispatch(changeLoanAmount(loanAmount));
    }

    render() {
        return(
            <React.Fragment>
                <label className="label">
                    { this.props.label }
                    <input type="number" name={ this.props.name } id={ this.props.name }
                           className="input"
                           defaultValue={ this.props.defaultValue }
                           onChange={ this.handleChange }/>
                </label>
            </React.Fragment>
        );
    }
}

InputNumber.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    defaultValue: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(InputNumber);