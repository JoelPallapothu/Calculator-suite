function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    if (!weight || !height) {
        document.getElementById('bmi-result').textContent = "Please enter valid weight and height.";
        return;
    }
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmi-result').textContent = `Your BMI is ${bmi}.`;
}

export { calculateBMI };