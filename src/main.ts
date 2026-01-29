import { Router } from "./router/router";
import { routes } from "./router/routes";

const app = document.getElementById('app')!;

const router = new Router(routes);

document.addEventListener("DOMContentLoaded", () => {
  router.init();
});
