import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInterestRate } from './js/actions/actions';
import Form from './js/components/Form';
import Results from './js/components/Results';
import Loading from './js/components/Loading';

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
            loading: true,
            error: false
        };

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
                    limits: result['limits'],
                    loading: false
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
                    { this.state.loading && <Loading/> }
                    { !this.state.loading &&
                        <Form defaultLoanAmount={ this.state.defaultLoanAmount } limits={ this.state.limits }
                              repaymentPeriods={ this.state.repaymentPeriods }
                              defaultRepaymentPeriod={ this.state.defaultRepaymentPeriod }
                        />
                    }
                </main>
                <aside className="aside">
                    { !this.state.loading &&
                        <Results defaultRepaymentPeriod={this.state.defaultRepaymentPeriod}
                             defaultLoanAmount={this.state.defaultLoanAmount}
                             annualPayments={this.state.annualPayments}/>
                    }
                </aside>
            </div>
        );
    }
}

export default connect()(App);
