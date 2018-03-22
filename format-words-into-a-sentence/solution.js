function formatWords(words){
  if (words == null || words.length ===0){ return ""};
  let filtered = words.filter(x=>x);
  return (filtered.length >=2) ? filtered.join(', ').replace(/,(?=[^,]*$)/, ' and'): filtered.join(''); 
}