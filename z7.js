function wave(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;

    result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }

  return result;
}

console.log(wave("hello"));         
console.log(wave(" s p a c e s ")); 
console.log(wave(""));              function wave(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;

    result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }

  return result;
}

console.log(wave("hello"));         
console.log(wave(" s p a c e s ")); 
console.log(wave("")); 