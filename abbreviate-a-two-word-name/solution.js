function abbrevName(name){
  
  let names = name.split(" ");
  let name1 = names[0].substring(0,1).toUpperCase();
  let name2 = names[1].substring(0,1).toUpperCase();
  let initials = name1 + "." + name2;
  return initials

}