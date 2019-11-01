import React, { Component } from 'react';
import Input from './js/components/Input';
import RadioGroup from './js/components/RadioGroup';
import Results from './js/components/Results';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
                console.log('get json');
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
                <Input name="loan-amount" label="Loan amount"/>
                <RadioGroup name="loan-term" label="Loan term" groupData={ this.state.repaymentPeriods }/>
                <Results repaymentPeriod="6" loanAmount='50000' interestRate={ this.state.interestRate }
                         annualPayments={ this.state.annualPayments } />
            </div>
        );
    }
}
