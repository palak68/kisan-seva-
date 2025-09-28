console.log("Signup JS loaded");

document.getElementById('signup-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  console.log("Form submit event fired");

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const role = document.getElementById('role').value;
  const location = document.getElementById('location').value.trim();

  if (!name || !email || !password || !role || !location ) {
    alert("कृपया सभी फ़ील्ड भरें");
    return;
  }

  try {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, userType: role, location})
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Signup failed");
      return;
    }

    alert(data.message || "Signup successful ✅");
    window.location.href = "/login"; 
  } catch (err) {
    console.error(err);
    alert("Server से connect नहीं हो पाया ⚠️");
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const signupHeading = document.querySelector("h2.devanagari");
  if (signupHeading) signupHeading.textContent = "साइन अप करें";

  const signupBtn = document.getElementById("signup-btn");
  if (signupBtn) signupBtn.textContent = "साइन अप";
});
