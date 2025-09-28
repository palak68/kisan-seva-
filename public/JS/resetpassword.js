document.getElementById('reset-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const otp = document.getElementById('code').value.trim();
  const password = document.getElementById('new-password').value.trim();
  const retype = document.getElementById('retype-password').value.trim();
  const userId = localStorage.getItem('resetUserId');

  if (!otp || !password || !retype) return alert("सभी फ़ील्ड भरें");
  if (password !== retype) return alert("पासवर्ड मेल नहीं खाते");

  try {
    const res = await fetch('/api/auth/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: userId, otp, password })
    });
    const data = await res.json();
    if (res.ok && data.message === 'पासवर्ड सफलतापूर्वक रीसेट हो गया') {
  alert(data.message);
  window.location.href = 'login.html';
} else {
  alert(data.error || data.message || 'OTP सत्यापन विफल');
}
  } catch (err) {
    alert("सर्वर से कनेक्ट नहीं हो पाया");
  }
});
