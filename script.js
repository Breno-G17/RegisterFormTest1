// fetching the HTML elements via DOM
let lastName = document.querySelector('#last_name')
let email = document.querySelector('#email-input')
let password = document.querySelector('#password')
let confirmPassword = document.querySelector('#confirm-password')
let checkBox = document.querySelector('#terms-conditions')
let btn = document.querySelector('#submit-btn')
let nameAlert = document.querySelector('.name-alert')
let form = document.querySelector('form')
let inputs = document.querySelectorAll('input')

function varifyFname() {
  let firstName = document.querySelector('#first_name');

  if(firstName.value === '' || firstName.value === null) {
    alert('Please enter your first name');
    return false;
  }
  if(!firstName.value.match(/^[a-zA-Z\-]+$/)) {
    alert('please enter a valid name');
    return false;
  }
  return true;
}