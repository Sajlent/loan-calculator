export default (state = {}, action) => {
    switch (action.type) {
        case 'LOAN_AMOUNT':
            return { ...state, loanAmount: action.amount };
        case 'REPAYMENT_PERIOD':
            return { ...state, repaymentPeriod: action.period };
        default:
            return state
    }
}