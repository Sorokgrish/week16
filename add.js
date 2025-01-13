document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("registrationForm");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
    const professionInput = document.getElementById("profession");
    const passwordInput = document.getElementById("password");
    const agreementInput = document.getElementById("agreement");
    const genderInput = document.querySelector('input[name="gender"]:checked');

    let isValid = true;

    if (!nameInput.checkValidity()) {
      nameInput.setCustomValidity("Имя должно содержать только буквы и пробелы, длиной от 2 до 20 символов");
      isValid = false;
    } else {
      nameInput.setCustomValidity("");
    }

    if (!emailInput.checkValidity()) {
      emailInput.setCustomValidity("Введите корректный адрес электронной почты");
      isValid = false;
    } else {
      emailInput.setCustomValidity("");
    }

    if (!ageInput.checkValidity()) {
      ageInput.setCustomValidity("Введите корректный возраст");
      isValid = false;
    } else {
      ageInput.setCustomValidity("");
    }

    if (!professionInput.checkValidity()) {
      professionInput.setCustomValidity("Выберите профессию");
      isValid = false;
    } else {
      professionInput.setCustomValidity("");
    }

    if (!passwordInput.checkValidity()) {
      passwordInput.setCustomValidity("Пароль должен содержать не менее 8 символов, включая одну заглавную букву, одну строчную букву и одну цифру");
      isValid = false;
    } else {
      passwordInput.setCustomValidity("");
    }

    if (!agreementInput.checkValidity()) {
      agreementInput.setCustomValidity("Согласитесь с обработкой данных");
      isValid = false;
    } else {
      agreementInput.setCustomValidity("");
    }

    if (isValid) {
      console.log("Имя: " + nameInput.value);
      console.log("Электронная почта: " + emailInput.value);
      console.log("Возраст: " + ageInput.value);

      console.log("Профессия: " + professionInput.value);
      console.log("Пароль: " + passwordInput.value);
      console.log("Согласие с обработкой данных: " + agreementInput.checked);
      console.log("Пол: " + (genderInput.value));//(document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : ""));
      form.reset();
    }
  });

  form.addEventListener("input", function() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
    const professionInput = document.getElementById("profession");
    const passwordInput = document.getElementById("password");
    const agreementInput = document.getElementById("agreement");

    if (nameInput.checkValidity() && emailInput.checkValidity() && ageInput.checkValidity() && professionInput.checkValidity() && passwordInput.checkValidity() && agreementInput.checkValidity()) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  });
});





