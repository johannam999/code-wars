function validateUsr(username) {
  res =  /^[a-z0-9_]{4,17}$/.test(username);
  return res
}