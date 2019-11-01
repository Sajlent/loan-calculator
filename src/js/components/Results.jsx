import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monthlyRate: 0
        }
    }

    componentDidMount() {
        this.calculateResult();
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.calculateResult();
        }
    }

    calculateResult() {
        const rate = (this.props.interestRate / 100) / this.props.annualPayments;
        const nper = parseInt(this.props.repaymentPeriod, 10) * this.props.annualPayments;
        const loanAmount = parseInt(this.props.loanAmount, 10);
        const pv = -loanAmount;

        const pvif = Math.pow(1 + rate, nper);
        let pmt = rate / (pvif - 1) * -(pv * pvif);

        pmt /= (1 + rate);

        this.setState({
            monthlyRate: pmt.toFixed(2)
        })
    }

    render() {
        console.log('render results');
        return(
            <div className="">
                <h3>{ this.state.monthlyRate }</h3>
            </div>
        );
    }
}

Results.propTypes= {
    loanAmount: PropTypes.string,
    repaymentPeriod: PropTypes.string,
    interestRate: PropTypes.number,
    annualPayments: PropTypes.number
};