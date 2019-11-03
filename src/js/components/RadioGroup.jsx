import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeRepaymentPeriod } from '../actions/actions';

class RadioGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            repaymentPeriod: this.props.checked
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const repaymentPeriod = parseInt(e.target.value, 10);

        this.props.dispatch(changeRepaymentPeriod(repaymentPeriod));
    }

    render() {
        return(
            <React.Fragment>
                { this.props.groupData.map((item) =>
                    <label key={ item }>
                        { item }
                        <input type="radio" name={ this.props.name } id={ item } value={ item }
                               defaultChecked={ this.props.checked === item }
                               onChange={ this.handleChange }/>
                    </label>
                )}
            </React.Fragment>
        );
    }
}

RadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    groupData: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(RadioGroup);
