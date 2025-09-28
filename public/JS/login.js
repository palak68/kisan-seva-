
const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const email = document.getElementById('email').value; 
            const password = document.getElementById('password').value;

            try {
                const res = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const data = await res.json();

                if (res.ok) {
                    alert(data.message);
                    // Token save karna (future API calls ke liye)
                    localStorage.setItem('token', data.token);
                    // Redirect to dashboard
                    window.location.href = "/index";
                } else {
                    alert(data.message || "लॉगिन असफल रहा");
                }
            } catch (err) {
                alert("सर्वर से कनेक्ट नहीं हो पाया");
                console.error(err);
            }
        });
    }
    document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.toggle-password').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var input = btn.parentElement.querySelector('.password-input');
            var icon = btn.querySelector('img');
            if (input.type === 'password') {
                input.type = 'text';
                icon.src = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/eye-slash.svg';
            } else {
                input.type = 'password';
                icon.src = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/eye.svg';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const siteTitle = document.getElementById("site-title");
    if (siteTitle) siteTitle.textContent = "किसान सेवा";

    const loginHeading = document.getElementById("login-heading");
    if (loginHeading) loginHeading.textContent = "लॉगिन करें";
});