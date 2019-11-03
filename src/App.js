import React, { Component } from 'react';
import InputNumber from './js/components/InputNumber';
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
        return (
            <div className="app row">
                <main className="main">
                    <form>
                        <InputNumber name="loan-amount" label="Loan amount" defaultValue={ this.state.defaultLoanAmount }/>
                        <RadioGroup name="loan-term" groupHeading="Loan term" groupData={ this.state.repaymentPeriods }
                                    checked={ this.state.defaultRepaymentPeriod }/>
                    </form>
                    </main>
                <aside className="aside">
                    <Results defaultRepaymentPeriod={ this.state.defaultRepaymentPeriod }
                             defaultLoanAmount={ this.state.defaultLoanAmount } interestRate={ this.state.interestRate }
                             annualPayments={ this.state.annualPayments } />
                </aside>
            </div>
        );
    }
}
