function isNice(arr){
  if (arr.length === 0 || arr === null){
  return false;
   }
  for (var i=0; i < arr.length; i++ ){
    var found = false;
    
   for(var j=0; j < arr.length; j++ ){
    const diff= arr[i] - arr[j];
    if (diff === 1 || diff === -1){
     found= true;
     break;
     }
    }
   
   if (!found) {
     return false;
   }
   }
   return true;
  }