export function setInterestRate(rate) {
    return { type: 'INTEREST_RATE', rate };
}

export function changeRepaymentPeriod(period) {
    return { type: 'REPAYMENT_PERIOD', period };
}

export function changeLoanAmount(amount) {
    return { type: 'LOAN_AMOUNT', amount };
}