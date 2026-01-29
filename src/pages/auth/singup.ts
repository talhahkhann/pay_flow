export function initSignup() {
  const form = document.getElementById("signupForm") as HTMLFormElement;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = (document.getElementById("username") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    // Simple validation
    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }

    // Normally here you would call your API
    console.log("Signing up user:", { username, email, password });

    alert(`Welcome, ${username}! Your account is created.`);

    // Clear form
    form.reset();
  });
}
