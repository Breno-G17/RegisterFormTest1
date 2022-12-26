// fetching the HTML elements via DOM
let btn = document.querySelector('#submit-btn')
let form = document.querySelector('form')

form.addEventListener('submit', validateForm())

function varifyFname() {
  let firstName = document.querySelector('#first_name')

  if (firstName.value === '' || firstName.value === null) {
    alert('Please enter your first name')
    return false
  }
  if (!firstName.value.match(/^[a-zA-Z\-]+$/)) {
    alert('please enter a valid name')
    return false
  }
  return true
}

function varifyLname() {
  let lastName = document.querySelector('#last_name')

  if (lastName.value === '' || lastName.value === null) {
    alert('Please enter your last name')
    return false
  }
  if (!lastName.value.match(/^[a-zA-Z\-]+$/)) {
    alert('please enter a valid name')
    return false
  }
  return true
}

function varifyEmail() {
  let email = document.querySelector('#email-input')

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value === '' || email.value === null) {
    alert('Please enter your email address')
    return false
  }
  if (!email.value.match(validRegex)) {
    alert('Please enter a valid email address')
    return false
  }
  return true
}

function varifyPasswords() {
  let password = document.querySelector('#password')
  let confirmPassword = document.querySelector('#confirm-password')
  var passwordRegex = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{6,18}$/;

  if (password.value === '' && confirmPassword.value === '') {
    alert('you must enter a password and confirm')
    return false
  }
  if (!password.value.match(passwordRegex)) {
    alert('your password must be minimum 6 digit long and maximum 18 digit, contain at least one letter, one number and special characters')
    return false;
  }
  if (password.value !== confirmPassword.value) {
    alert('your password or password confimation must be the same');
    return false
  }
  return true;
};

function varifyCheckbox() {
  var checkBox = document.querySelector('#terms-conditions');
  if(!checkBox.checked){
    alert('Please agree with the terms and conditions');
    return false;
  } 
  return true;
}

function validateForm() {
  let inputs = document.querySelectorAll('input');
  
  // Check that all required fields are filled out
  for (var i = 0; i < inputs.length; i++) {
    if ( inputs[i].value == "") {
      // Display an error message if the field is empty
      alert("all fields are necessary");
      return false;
    }
    varifyFname()
    varifyLname()
    varifyEmail()
    varifyPasswords()
    varifyCheckbox()
  }
  return true;
}