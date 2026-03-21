// REGISTER
async function register() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let msg = document.getElementById("msg");

  if (!name || !email || !password) {
    msg.innerText = "All fields are required";
    return;
  }

  try {
    await apiRequest("/auth/register", "POST", {
      username: name,
      email,
      password
    });

    msg.style.color = "green";
    msg.innerText = "Registration successful!";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);

  } catch (err) {
    msg.innerText = err.message;
  }
}

// LOGIN
async function login() {
  let email = document.getElementById("loginEmail").value.trim();
  let password = document.getElementById("loginPassword").value.trim();
  let msg = document.getElementById("loginMsg");

  if (!email || !password) {
    msg.innerText = "Email and password are required";
    return;
  }

  try {
    await apiRequest("/auth/login", "POST", {
      email,
      password
    });

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 500);

  } catch (err) {
    msg.innerText = err.message;
  }
}

// LOGOUT
async function logout() {
  await apiRequest("/auth/logout", "POST");
  window.location.href = "index.html";
}

async function checkAuth() {
  try {
    const res = await apiRequest("/auth/me");
    console.log("User authenticated:", res);

    const el = document.getElementById("userName");
    if (el) el.innerText = res.user.username;

  } catch (err) {
    console.error("Auth failed:", err.message);
    window.location.href = "index.html";
  }
}