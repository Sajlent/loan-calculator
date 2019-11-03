import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeRepaymentPeriod } from '../actions/actions';
import InputRadio from "./InputRadio";

class RadioGroup extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.checked);
        this.state = {
            default: this.props.checked
        }
    }

    chooseOption = (e) => {
        const repaymentPeriod = parseInt(e.target.value, 10);

        this.props.dispatch(changeRepaymentPeriod(repaymentPeriod));
        this.setState({
            default: repaymentPeriod
        })
    };

    render() {
        console.log('Render radiogroup', this.state);
        return(
            <React.Fragment>
                <h3 className="form__heading">{ this.props.groupHeading }</h3>
                { this.props.groupData.map((item) =>
                    <InputRadio key={ item } name={ this.props.name } label={ item }
                                defaultValue={ this.state.default === item }
                                chooseOption={ this.chooseOption.bind(this) } />
                )}
            </React.Fragment>
        );
    }
}

RadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    groupHeading: PropTypes.string,
    groupData: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(RadioGroup);
