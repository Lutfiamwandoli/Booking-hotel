
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const passwordToggle = document.querySelector('.toggle-password');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordToggle.style.backgroundImage = "url('gambar/eye-icon.png')"; 
  } else {
    passwordInput.type = 'password';
    passwordToggle.style.backgroundImage = "url('gambar/eye.png')"; 
  }
}
async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginResultElement = document.getElementById("loginResult");

  try {
    const response = await fetch("https://wicked-erin-bandicoot.cyclic.app/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      loginResultElement.innerHTML = "<p class='success-message'>Login successful. Redirecting...</p>";
      window.location.href = "/dashboard";
    } else {
      const data = await response.json();
      loginResultElement.innerHTML = `<p class='error-message'>Error: ${data.message}</p>`;
    }
  } catch (error) {
    console.error("Error:", error);
    loginResultElement.innerHTML = "<p class='error-message'>An error occurred during login.</p>";
  }
}
