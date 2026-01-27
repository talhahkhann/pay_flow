export class Post {
    title: string;
    body: string;
    element: HTMLElement;

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
                    <button class="btn btn-primary btn-sm like-btn">Like</button>
                </div>
            </div>
        `;

        // Add event listener
        const btn = this.element.querySelector<HTMLButtonElement>('.like-btn')!;
        btn.addEventListener('click', () => alert(`Liked: ${this.title}`));
    }

    attach(parent: HTMLElement) {
        parent.appendChild(this.element);
    }
}
