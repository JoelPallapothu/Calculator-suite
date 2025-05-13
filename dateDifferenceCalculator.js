function calculateDateDifference() {
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);
    if (!startDate || !endDate || startDate > endDate) {
        document.getElementById('date-difference-result').textContent = "Please enter valid dates.";
        return;
    }
    const differenceInTime = endDate - startDate;
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    document.getElementById('date-difference-result').textContent = `The difference is ${differenceInDays} days.`;
}

export { calculateDateDifference };