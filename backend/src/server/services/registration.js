import {checkEmailAvailability, checkNameAvailability, ageValidator passwordValidator} from './validateUser.js';
function createUser(name, age, email, pass, pass2) {
  let id = uuid();
  // TODO: WRITE THESE VALIDATOR FUNCTIONS 
  const validEmail = checkEmailAvailability(email);
  const validName =  checkNameAvailability(name);
  const validAge = ageValidator(age);
  const validPass = passwordValidator(pass, pass2);
  if (validEmail === 1) {
    if (validName === 1) {
      if (validAge === 1) {
        if (validPass === 1) {
      
        } else {
				  let message = ""
          console.error(message);
				  return message;
      } 
      } else {
        let message = ""
        console.error(message);
        return message;
      } 
    } else {
      let message = "Name is already associated with this account";
      console.error(message);
      return message;
    }
  } else {
    let message = "Email is already associated with this account"
  }
}



