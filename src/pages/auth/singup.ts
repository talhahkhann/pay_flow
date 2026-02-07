import { registerUser } from "../../services/authService";
import { setToken } from "../../utils/storage";

export function initSignup() {
  const form = document.getElementById("signupForm") as HTMLFormElement;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    try {
      const token = await registerUser({ fullName, email, password });

      //  Save token using helper
      setToken(token);

      alert(" Registration successful!");

      // Redirect
      window.history.pushState({}, "", "/feed");
      window.dispatchEvent(new PopStateEvent("popstate"));

    } catch (error: any) {
      alert(error.message);
    }
  });
}
