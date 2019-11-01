import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RadioGroup extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
    }

    render() {
        return(
            <div>
                { this.props.groupData.map((item) =>
                    <label key={ item }>
                        { item }
                        <input type="radio" name={ this.props.name } id={ item } value={ item }
                               onChange={ this.handleChange }/>
                    </label>
                )}
            </div>
        );
    }
}

RadioGroup.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    groupData: PropTypes.array
};