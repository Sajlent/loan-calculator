import React, { Component } from 'react';
import Input from './js/components/Input';
import RadioGroup from './js/components/RadioGroup';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            repaymentPeriods: []
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
                    repaymentPeriods: result["repayment-periods"]
                });
            },
            (error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="app">
                <Input name="loan-amount" label="Loan amount"/>
                <RadioGroup name="loan-term" label="Loan term" groupData={ this.state.repaymentPeriods }/>

            </div>
        );
    }
}
