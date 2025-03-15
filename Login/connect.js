const btnLogin = document.querySelector('.login');
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent form submission

  const user = 'Naman';
  const pass = '1234';
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username=== user && password===pass) {
    window.location.href = '../Home/home.html';
  } else {
    alert('Please enter correct username and password.');
    console.log('Login failed: Missing username or password');
  }
});
