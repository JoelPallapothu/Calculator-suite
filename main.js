// This file serves as the main script that imports all calculator modules and handles user interactions, including event listeners for form submissions and displaying results.

import { calculateAge } from './ageCalculator.js';
import { calculateBMI } from './bmiCalculator.js';
import { calculateDateDifference } from './dateDifferenceCalculator.js';
import { calculateLoanInterest } from './loanInterestCalculator.js';

document.addEventListener('DOMContentLoaded', () => {
    // Age Calculator
    const ageForm = document.getElementById('age-form');
    ageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const birthDate = new Date(ageForm.elements['birthdate'].value);
        const age = calculateAge(birthDate);
        document.getElementById('age-result').textContent = `Your age is: ${age} years`;
    });

    // BMI Calculator
    const bmiForm = document.getElementById('bmi-form');
    bmiForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const weight = parseFloat(bmiForm.elements['weight'].value);
        const height = parseFloat(bmiForm.elements['height'].value);
        const bmi = calculateBMI(weight, height);
        document.getElementById('bmi-result').textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    });

    // Date Difference Calculator
    const dateDiffForm = document.getElementById('date-diff-form');
    dateDiffForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const startDate = new Date(dateDiffForm.elements['start-date'].value);
        const endDate = new Date(dateDiffForm.elements['end-date'].value);
        const difference = calculateDateDifference(startDate, endDate);
        document.getElementById('date-diff-result').textContent = `Difference: ${difference}`;
    });

    // Loan Interest Calculator
    const loanForm = document.getElementById('loan-form');
    loanForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const principal = parseFloat(loanForm.elements['principal'].value);
        const rate = parseFloat(loanForm.elements['rate'].value);
        const time = parseFloat(loanForm.elements['time'].value);
        const interest = calculateLoanInterest(principal, rate, time);
        document.getElementById('loan-result').textContent = `Interest: ${interest.toFixed(2)}`;
    });
});