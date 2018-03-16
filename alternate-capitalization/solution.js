function capitalize(s){
  var newString = s.split("");
  var evenArray = [];
  var oddArray =[];
  for (var i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
    evenArray.push(newString[i].toUpperCase());
    oddArray.push(newString[i]);
    } else {
    oddArray.push(newString[i].toUpperCase());
    evenArray.push(newString[i]);
    }
  }  
    return [evenArray.join(""), oddArray.join("")];
  };