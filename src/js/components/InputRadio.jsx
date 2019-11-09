import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputRadio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        };
    }

    componentDidMount() {
        if (this.props.defaultValue) {
            this.setState({
                checked: true
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            this.setState({
                checked: this.props.defaultValue
            });
        }
    }

    render() {
        return(
            <label className={`label--radio ${ this.state.checked ? `label--checked` : `` }`}>
                { this.props.label }
                <input className="input--radio" type="radio" name={ this.props.name } id={ this.props.label } value={ this.props.label }
                       defaultChecked={ this.props.defaultValue }
                       onChange={ this.props.chooseOption }/>
            </label>
        );
    }
}

InputRadio.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.number.isRequired,
    defaultValue: PropTypes.bool.isRequired,
    chooseOption: PropTypes.func
};
