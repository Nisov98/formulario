function emailValidation() {
    const form = document.getElementById('form');
    const email = form.querySelector('#email');
    const emailConfirm = form.querySelector('#email_confirm');
    const emailError = document.getElementById('email_error');
  
    emailConfirm.addEventListener('input', () => {
      if (email.value !== emailConfirm.value) {
        emailError.textContent = "El correo electrónico no coincide";
        emailError.classList.remove("hidden");
        emailConfirm.classList.add("different-emails"); // Agrega la clase al campo de confirmación de correo
      } else {
        emailError.textContent = "";
        emailError.classList.add("hidden");
        emailConfirm.classList.remove("different-emails"); // Quita la clase del campo de confirmación de correo
      }
    });
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (email.value !== emailConfirm.value) {
        // No haces nada aquí o puedes mostrar otro mensaje si lo deseas.
      } else {
        form.submit();
      }
    });
  }
  
  window.onload = emailValidation;
  