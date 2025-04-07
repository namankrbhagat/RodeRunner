// Login functionality
const btnLogin = document.querySelector('.login');
if (btnLogin) {
  btnLogin.addEventListener('click', function(e) {
    e.preventDefault();
    
    const user = 'Naman';
    const pass = '1234';
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === user && password === pass) {
      window.location.href = '../Home/home.html';
    } else {
      alert('Please enter correct username and password.');
      console.log('Login failed: Missing username or password');
    }
  });
}

// Debugging version with extensive logging
document.addEventListener('DOMContentLoaded', function() {
  const trackingBtn = document.getElementById('trackingBtn');
  
  trackingBtn.addEventListener('click', function(e) {
    console.log('Clicked');
    e.preventDefault();
    
    // Show the map container
    const mapContainer = document.getElementById('mapContainer');
    mapContainer.classList.remove('hidden');
    
    // Initialize map
    if (!window.map) { // Only initialize once
      window.map = L.map('trackingMap').setView([20.5937, 78.9629], 5);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:  'OpenStreetMap'
      }).addTo(window.map);
      
      // Add test marker
      L.marker([20.5937, 78.9629])
        .addTo(window.map)
        .bindPopup("Hello! Map is working!");
    }
  });
});