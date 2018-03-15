function insertDash(num) {
  var singlenum = num.toString().split("");
  var lastNumberWasOdd = false;
  var output = [];
  for (var i=0; i<singlenum.length; i++){
    var currentNumberIsOdd = parseInt(singlenum[i])%2 === 1;
    
    if (currentNumberIsOdd){
      if (lastNumberWasOdd) {
          output.push("-");
      }
    }
    
    output.push(singlenum[i]);
    
    lastNumberWasOdd = currentNumberIsOdd;
  }
  
  return output.join("");
  
}