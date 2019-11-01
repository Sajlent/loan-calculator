import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
    }

    render() {
        return(
            <React.Fragment>
                <label>
                    { this.props.label }
                    <input type="number" name={ this.props.name } id={ this.props.name } onChange={ this.handleChange }/>
                </label>
            </React.Fragment>
        );
    }
}

Input.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string
};