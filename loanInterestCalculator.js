function calculateLoanInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    if (!principal || !rate || !time) {
        document.getElementById('loan-result').textContent = "Please enter valid values.";
        return;
    }
    const interest = (principal * rate * time) / 100;
    document.getElementById('loan-result').textContent = `The interest is ${interest.toFixed(2)}.`;
}

export { calculateLoanInterest };