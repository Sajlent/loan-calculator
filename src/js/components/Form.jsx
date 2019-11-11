import React from 'react';
import InputNumber from './InputNumber';
import RadioGroup from './RadioGroup';

const Form = (props) => {
    return <form>
        <InputNumber name="loan-amount" label="Loan amount"
                     defaultValue={ props.defaultLoanAmount }
                     limits={ props.limits } />
        <RadioGroup name="loan-term" groupHeading="Loan term (months)"
                    groupData={ props.repaymentPeriods }
                    checked={ props.defaultRepaymentPeriod }/>
    </form>
};

export default Form;