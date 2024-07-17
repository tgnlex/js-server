function checkEmailAvailability() {  
  // TODO
  return 1;
}

function checkNameAvailability() {
  // TODO
  return 1;
}

function ageValidator() {
  if (age >= 18) {
    return 1;
  }
    return 0;
}

function passwordValidator() {
  if (pass === pass2) {
    return 1;
  } else {
    return 0;
  }
}

export {checkEmailAvailability, checkNameAvailability, ageValidator, passwordValidator}
