function isCircleSorted(arr) {
  let drops = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[(i + 1) % arr.length]) {
      drops++;
      if (drops > 1) return false;
    }
  }

  return true;
}

console.log(isCircleSorted([2, 3, 4, 5, 0, 1]));   
console.log(isCircleSorted([4, 5, 6, 9, 1]));       
console.log(isCircleSorted([1, 2, 3, 4, 5]));        
console.log(isCircleSorted([1, 2, 3, 4, 1]));       
console.log(isCircleSorted([4, 1, 2, 5]));           
console.log(isCircleSorted([8, 7, 6, 5, 4, 3]));  