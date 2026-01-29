


export const routes = [
  
  {
    path: "/signup",
    view: () => import("../pages/auth/singup.html").then(m => m.default),
    script: () => import("../pages/auth/singup").then(m => m.initSignup())

  },
  
];
