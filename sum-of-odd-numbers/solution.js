function cubeOdd(arr) {
  if (arr.length === 0){return undefined}
  for (let i=0; i<arr.length; i++){
    if (typeof arr[i]==="string"){return undefined;}
  }
  return arr.filter(x => x%2).map(x => x*x*x).reduce((acc, curr)=> acc + curr);
  }