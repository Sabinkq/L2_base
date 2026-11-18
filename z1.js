function hasTwoCubeSums(n) {
  let count = 0;
  const limit = Math.cbrt(n);

  for (let a = 1; a <= limit; a++) {
    const a3 = a  3;
    for (let b = a + 1; b <= limit; b++) {
      if (a3 + b**3 === n) {
        count++;
        if (count === 2) return true;
      }
    }
  }

  return false;
}

console.log(hasTwoCubeSums(1729)); 
console.log(hasTwoCubeSums(42));
