
// Seleciona os campos de senha e o checkbox
const passwordInput1 = document.getElementById('password');
const passwordInput2 = document.getElementById('password2');
const togglePasswordCheckbox = document.getElementById('togglePasswordCheckbox');

// Adiciona o evento ao checkbox
togglePasswordCheckbox.addEventListener('change', () => {
  // Verifica o estado do checkbox e alterna o tipo dos campos de senha
  const type = togglePasswordCheckbox.checked ? 'text' : 'password';
  passwordInput1.type = type;
  passwordInput2.type = type;
});
