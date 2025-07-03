"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return arr; 
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  } else {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyRate = percent / 100 / 12;
  const loanBody = amount - contribution;

  if (loanBody <= 0) {
    return 0;
  }

  const monthlyPayment = loanBody * (monthlyRate + (monthlyRate / ((1 + monthlyRate) ** countMonths - 1)));
  const totalPayment = monthlyPayment * countMonths;

  return Number(totalPayment.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));