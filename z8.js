function expandedForm(num) {
  const digits = String(num);
  const result = [];

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== '0') {
      result.push(digits[i] + '0'.repeat(digits.length - 1 - i));
    }
  }

  return result.join(' + ');
}

console.log(expandedForm(12));  
console.log(expandedForm(45));   
console.log(expandedForm(70304)); 