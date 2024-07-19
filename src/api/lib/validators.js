
function checkAge() {
  if (age >= 18) {
    return 1;
  }
    return 0;
}

function checkPass(pass, pass2) {
  if (pass === pass2) {
    return 1;
  } else {
    return 0;
  }
}
export {checkAge, checkPass}
