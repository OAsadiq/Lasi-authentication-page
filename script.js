let inputVisible = false;

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('passwordInput');
  const toggleButton = document.getElementById('toggleButton');

  inputVisible = !inputVisible;

  if (inputVisible) {
    passwordInput.classList.remove('hidden');
    passwordInput.classList.add('shown');
    toggleButton.innerText = 'Hide';
  } else {
    passwordInput.classList.remove('shown');
    passwordInput.classList.add('hidden');
    toggleButton.innerText = 'Show';
  }
}

