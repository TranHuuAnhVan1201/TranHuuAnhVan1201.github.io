const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phone = document.getElementById('phone');


function showError(input, message) {
  const formControls = input.parentElement;
  formControls.className = 'form-control error';
  const small = formControls.querySelector('small');
  small.innerText = message;
}

//B4: showSuccess
function showSuccess(input) {
  const formControls = input.parentElement;
  formControls.className = 'form-control success';
}
//B4: checkRequired
function checkRequired(inputArray) {
  inputArray.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${getTextField(input)} sai roi`);
    }
    else {
      showSuccess(input);
    } 
  });
}
//B4: getText
function getTextField(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1); 
}

//B6: checkLength
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getTextField(input)} must be at min ${min} character`);
  }
  else if (input.value.length > max) {
    showError(input, `${getTextField(input)} must be less than ${max} charactor`);
  }
  else {
    return showSuccess(input);
  }
}
// B6: check Email
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  }
  else {
    showError(input, `Email is not valid`);
  }
}

// B6: checkPassword
function checkPassword(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, `Password do not match.`);
  }
}



// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkLength(password2, 6, 25);
  checkEmail(email);
  checkPassword(password, password2);
  console.log([username.value, email.value, password.value, password2.value]);

  function checkLogin() {
    
  }
  checkLogin(username, password);
}) 