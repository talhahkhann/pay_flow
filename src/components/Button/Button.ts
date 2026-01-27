export class Post {
    title: string;
    body: string;
    element: HTMLElement;
    isSignedIn: boolean = false; // track fake login state

    constructor(title: string, body: string) {
        this.title = title;
        this.body = body;
        this.element = document.createElement('div');
        this.render();
    }

    render() {
        this.element.innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text">${this.body}</p>
                    <button class="btn btn-primary btn-sm signin-btn">Sign In</button>
                </div>
            </div>
        `;

        const btn = this.element.querySelector<HTMLButtonElement>('.signin-btn')!;
        btn.addEventListener('click', () => this.toggleSignIn(btn));
    }

    toggleSignIn(button: HTMLButtonElement) {
        this.isSignedIn = !this.isSignedIn;

        if (this.isSignedIn) {
            button.textContent = "Signed In ✓";
            button.classList.remove("btn-primary");
            button.classList.add("btn-success");
            console.log(`User signed in to post: ${this.title}`);
        } else {
            button.textContent = "Sign In";
            button.classList.remove("btn-success");
            button.classList.add("btn-primary");
            console.log(`User signed out from post: ${this.title}`);
        }
    }

    attach(parent: HTMLElement) {
        parent.appendChild(this.element);
    }
}
