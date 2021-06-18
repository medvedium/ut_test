document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form'),
    registerForm = document.querySelector('.register-form'),
    registerBtn = registerForm.querySelector('.register-button'),
    loginBtn = loginForm.querySelector('.login-button'),
    createAccount = loginForm.querySelector('#create-account'),
    sucsess = document.querySelector('.sucsess'),
    logout = document.querySelector('.logout'),
    username = document.querySelector('.username-register'),
    email = document.querySelector('.email'),
    password = document.querySelector('#password'),
    repeatPassword = document.querySelector('.repeat_password'),
    prompts = document.querySelector('.prompt__wrap'),
    promptLength = document.querySelector('.prompt-length'),
    promptSpecial = document.querySelector('.prompt-special'),
    promptUppercase = document.querySelector('.prompt-uppercase'),
    promptDigits = document.querySelector('.prompt-digits');

  let valid = false;
  const isValid = function () {
    if (repeatPassword.value == password.value && valid && username.value && email.value) {
      registerBtn.disabled = false;
    } else {
      registerBtn.disabled = true;
    }
  };

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    sucsess.style.display = 'flex';
  });

  createAccount.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
  });

  registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'flex';
  });

  logout.addEventListener('click', (e) => {
    e.preventDefault();
    sucsess.style.display = 'none';
    loginForm.style.display = 'flex';
  });

  password.addEventListener('focus', () => {
    prompts.style.display = 'block';
  });

  password.addEventListener('blur', () => {
    prompts.style.display = 'none';
  });

  username.addEventListener('keyup', isValid);
  email.addEventListener('keyup', isValid);

  password.addEventListener('keyup', () => {
    if (password.value.length > 7 && password.value.length < 25) {
      promptLength.classList.add('active');
    } else {
      promptLength.classList.remove('active');
    }

    if (password.value.match(/[!@#$&*%]/)) {
      promptSpecial.classList.add('active');
    } else {
      promptSpecial.classList.remove('active');
    }

    if (password.value.match(/.*[A-Z].*[A-Z]/)) {

      promptUppercase.classList.add('active');
    } else {
      promptUppercase.classList.remove('active');
    }

    if (password.value.match(/.*[0-9].*[0-9].*[0-9].*[0-9]/)) {
      promptDigits.classList.add('active');
      registerBtn.style.disabled = 'true';
    } else {
      promptDigits.classList.remove('active');
    }

    if (password.value.length > 7 && password.value.length < 25 && password.value.match(/[!@#$&*%]/) && password.value.match(/.*[A-Z].*[A-Z]/) && password.value.match(/.*[0-9].*[0-9].*[0-9].*[0-9]/)) {
      valid = true;
    } else {
      valid = false;
    }

    isValid();
  });

  repeatPassword.addEventListener('keyup', isValid);
});