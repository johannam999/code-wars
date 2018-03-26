function find_average(array) {
  let avrgArray = array.reduce((acc, current) => acc + current);
  return  avrgArray/array.length;
}