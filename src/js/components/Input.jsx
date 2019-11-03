import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { changeLoanAmount } from '../actions/actions';
import {connect} from "react-redux";

class Input extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const loanAmount = parseInt(e.target.value, 10);

        this.props.dispatch(changeLoanAmount(loanAmount));
    }

    render() {
        return(
            <React.Fragment>
                <label>
                    { this.props.label }
                    <input type="number" name={ this.props.name } id={ this.props.name }
                           defaultValue={ this.props.defaultValue }
                           onChange={ this.handleChange }/>
                </label>
            </React.Fragment>
        );
    }
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    defaultValue: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        loanAmount: state.loanAmount
    }
}

export default connect(mapStateToProps)(Input);