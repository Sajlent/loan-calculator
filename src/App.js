import React, { Component } from 'react';
import Input from './js/components/Input';
import RadioGroup from './js/components/RadioGroup';
import Results from './js/components/Results';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultLoanAmount: 50000,
            defaultRepaymentPeriod: 6,
            repaymentPeriods: [],
            interestRate: 0,
            annualPayments: 12
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch('./data/data.json')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    repaymentPeriods: result['repayment-periods'],
                    interestRate: result['interest-rate'],
                    annualPayments: result['annual-payments']
                });
            },
            (error) => {
                // TODO: Add error component
                console.log(error);
            });
    }

    render() {
        console.log('render app');
        return (
            <div className="app">
                <Input name="loan-amount" label="Loan amount" defaultValue={ this.state.defaultLoanAmount }/>
                <RadioGroup name="loan-term" label="Loan term" groupData={ this.state.repaymentPeriods } checked={ this.state.defaultRepaymentPeriod }/>
                <Results repaymentPeriod={ this.state.defaultRepaymentPeriod } loanAmount={ this.state.defaultLoanAmount } interestRate={ this.state.interestRate }
                         annualPayments={ this.state.annualPayments } />
            </div>
        );
    }
}
