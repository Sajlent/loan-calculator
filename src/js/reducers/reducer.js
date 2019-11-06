export default (state = {}, action) => {
    switch (action.type) {
        case 'INTEREST_RATE':
            return { ...state, interestRate: action.rate };
        case 'LOAN_AMOUNT':
            return { ...state, loanAmount: action.amount };
        case 'REPAYMENT_PERIOD':
            return { ...state, repaymentPeriod: action.period };
        default:
            return state
    }
}