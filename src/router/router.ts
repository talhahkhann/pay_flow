type Route = {
  path: string;
  view: () => Promise<string>;
  script?: () => Promise<void>;
};

export class Router {
  private routes: Route[] = [];

  constructor(routes: Route[]) {
    this.routes = routes;
    window.addEventListener("popstate", () => this.handleRoute());
    document.addEventListener("click", (e) => this.handleLinkClick(e));
  }

  public init() {
    this.handleRoute();
  }

  private async handleRoute() {
    const path = window.location.pathname;

    const match = this.routes.find(r => r.path === path);
    const app = document.getElementById("app");

    if (!app) return;

    if (match) {
      app.innerHTML = await match.view();
      if (match.script) await match.script();
    } else {
      app.innerHTML = "<h2 class='p-4'>404 - Page Not Found</h2>";
    }
  }

  public navigate(path: string) {
    window.history.pushState({}, "", path);
    this.handleRoute();
  }

  private handleLinkClick(e: Event) {
    const target = e.target as HTMLElement;
    if (target.matches("[data-link]")) {
      e.preventDefault();
      const path = target.getAttribute("href");
      if (path) this.navigate(path);
    }
  }
}
