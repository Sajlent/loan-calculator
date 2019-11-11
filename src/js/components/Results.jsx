import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monthlyRate: 0
        };
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
        const currentLoanAmount = this.props.loanAmount || this.props.defaultLoanAmount;
        const currentRepaymentPeriod = this.props.repaymentPeriod || this.props.defaultRepaymentPeriod;
        const rate = (this.props.interestRate / 100) / this.props.annualPayments;
        const nper = currentRepaymentPeriod * this.props.annualPayments;
        const pv = -currentLoanAmount;
        const pvif = Math.pow(1 + rate, nper);

        let pmt = rate / (pvif - 1) * -(pv * pvif);
        pmt /= (1 + rate);

        this.setState({
            monthlyRate: pmt.toFixed(2)
        })
    }

    render() {
        return(
            <div className="results">
                <h2>Monthly repayment</h2>
                <p className="results__repayment">{ this.state.monthlyRate } PLN</p>

                <h3>Interest rate</h3>
                <p className="results__rate">
                    { this.props.interestRate
                        ? `${this.props.interestRate.toString().replace('.', ',')}%`
                        : null
                    }
                </p>
            </div>
        );
    }
}

Results.propTypes= {
    loanAmount: PropTypes.number,
    repaymentPeriod: PropTypes.number,
    interestRate: PropTypes.number,
    annualPayments: PropTypes.number
};

function mapStateToProps(state) {
    return {
        interestRate: state.interestRate,
        loanAmount: state.loanAmount,
        repaymentPeriod: state.repaymentPeriod
    }
}

export default connect(mapStateToProps)(Results);
