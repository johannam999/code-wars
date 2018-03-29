function mutateMyStrings(stringOne, stringTwo){
  let one = stringOne.split('');
  let two = stringTwo.split('');
  let output = [];
  for (let row =0; row< one.length; row++){
    let next = '';
    for (let char=0; char< two.length; char++){
      let char1 = one[char];
      let char2 = two[char];
      if (row > char) {
          next += char2;
        } 
        else {
          next += char1;  
        }
      }
      output.push(next);
    } 
    output.push(stringTwo);
    const final = output.reduce(function(a,b){
      if (a.indexOf(b) < 0 ) a.push(b);
      return a;
    },[]);
    return final.join('\n') + '\n';
  }