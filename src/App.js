import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInterestRate } from './js/actions/actions';
import InputNumber from './js/components/InputNumber';
import RadioGroup from './js/components/RadioGroup';
import Results from './js/components/Results';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultLoanAmount: 50000,
            defaultRepaymentPeriod: 6,
            repaymentPeriods: [],
            interestRate: 0,
            annualPayments: 12,
            limits: {},
            error: false
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch('./data/data.json')
            .then(res => res.json())
            .then((result) => {
                this.props.dispatch(setInterestRate(result['interest-rate']));

                this.setState({
                    repaymentPeriods: result['repayment-periods'],
                    annualPayments: result['annual-payments'],
                    limits: result['limits']
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
                        <InputNumber name="loan-amount" label="Loan amount"
                                     defaultValue={ this.state.defaultLoanAmount }
                                     limits={ this.state.limits } />
                        <RadioGroup name="loan-term" groupHeading="Loan term (months)"
                                    groupData={ this.state.repaymentPeriods }
                                    checked={ this.state.defaultRepaymentPeriod }/>
                    </form>
                </main>
                <aside className="aside">
                    <Results defaultRepaymentPeriod={ this.state.defaultRepaymentPeriod }
                             defaultLoanAmount={ this.state.defaultLoanAmount }
                             annualPayments={ this.state.annualPayments } />
                </aside>
            </div>
        );
    }
}

export default connect()(App);
