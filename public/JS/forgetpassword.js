document.getElementById('send-code-btn').addEventListener('click', async function () {
  const email = document.getElementById('user').value.trim();
  if (!email) return alert("कृपया ईमेल दर्ज करें");

  try {
    const res = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const data = await res.json();
    if (res.ok) {
      alert(data.message);
      localStorage.setItem('resetUserId', data.userId);

      // ✅ Show OTP + password fields properly
      document.getElementById('code').style.display = 'block';
      document.querySelectorAll('.password-box').forEach(el => el.style.display = 'block');
      document.getElementById('reset-btn').style.display = 'block';
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert("सर्वर से कनेक्ट नहीं हो पाया");
  }
});
