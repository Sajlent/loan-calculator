import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputRadio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        };

        this.handleChange = this.handleChange.bind(this);
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

    handleChange(e) {
        this.setState({
            checked: e.target.checked
        });
    }

    render() {
        return(
            <React.Fragment>
                <label className={`label--radio ${ this.state.checked ? `label--checked` : `` }`}>
                    { this.props.label }
                    <input className="input--radio" type="radio" name={ this.props.name } id={ this.props.label } value={ this.props.label }
                           defaultChecked={ this.props.defaultValue }
                           onChange={ this.props.chooseOption }/>
                </label>
            </React.Fragment>
        );
    }
}

InputRadio.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.number.isRequired,
    defaultValue: PropTypes.bool.isRequired,
    chooseOption: PropTypes.func
};
