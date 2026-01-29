export default function Signup() {
    const container = document.createElement("div");

    container.innerHTML = `
    <div class="container mt-5" style="max-width: 500px;">
        <h2 class="text-center mb-4">Sign Up</h2>
        <form id="signupForm">
            <div class="mb-3">
                <label for="fullName" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="fullName" placeholder="Enter your full name" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" class="form-control" id="phone" placeholder="Enter your phone number" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password" required>
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm password" required>
            </div>
            <button type="submit" class="btn btn-primary w-100">Sign Up</button>
        </form>
        <p class="text-center mt-3">
            Already have an account? 
            <a href="/login" id="toLogin">Login</a>
        </p>
    </div>
    `;

    const form = container.querySelector<HTMLFormElement>("#signupForm")!;
    const toLogin = container.querySelector<HTMLAnchorElement>("#toLogin")!;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const fullName = (form.querySelector<HTMLInputElement>("#fullName")!).value;
        const email = (form.querySelector<HTMLInputElement>("#email")!).value;
        const phone = (form.querySelector<HTMLInputElement>("#phone")!).value;
        const password = (form.querySelector<HTMLInputElement>("#password")!).value;
        const confirmPassword = (form.querySelector<HTMLInputElement>("#confirmPassword")!).value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("Signup data:", { fullName, email, phone, password });
        alert("Signup successful! You can now login.");

        // Redirect
        window.history.pushState({}, "", "/login");
        window.dispatchEvent(new Event("popstate"));
    });

    toLogin.addEventListener("click", (e) => {
        e.preventDefault();
        window.history.pushState({}, "", "/login");
        window.dispatchEvent(new Event("popstate"));
    });

    return container;
}
