import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { changeLoanAmount } from '../actions/actions';
import { connect } from "react-redux";

class InputNumber extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if (e.target.value.match(/^[0-9]+$/)) {
            const loanAmount = parseInt(e.target.value, 10);

            if (loanAmount < this.props.limits['min'] || loanAmount > this.props.limits['max']) {
                this.setState({ error: true });
            } else {
                this.props.dispatch(changeLoanAmount(loanAmount));
                if (this.state.error) this.setState({ error: false });
            }
        } else {
            this.setState({ error: true });
        }
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
                { this.state.error &&
                    <p className="form__error">
                        Amount must be a number between { this.props.limits['min'] } and { this.props.limits['max'] } PLN.
                    </p> }
            </React.Fragment>
        );
    }
}

InputNumber.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    limits: PropTypes.object.isRequired,
    defaultValue: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(InputNumber);