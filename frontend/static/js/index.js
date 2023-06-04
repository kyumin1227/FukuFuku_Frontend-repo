import Home from "./pages/Home.js";
import Posts from "./pages/Posts.js";
import Settings from "./pages/Settings.js";
import Bulletin from "./pages/BulletinPage.js";
import MyUserData from "./pages/MyUserData.js";

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/posts", view: Posts },
    { path: "/settings", view: Settings },
    { path: "/bulletin", view: Bulletin },
    { path: "/MyUserData", view: MyUserData },
  ];

  const pageMatches = routes.map((route) => {
    return {
      route, // route: route
      isMatch: route.path === location.pathname,
    };
  });

  let match = pageMatches.find((pageMatch) => pageMatch.isMatch);

  if (!match) {
    match = {
      route: location.pathname,
      isMatch: true,
    };
    const page = new NotFound();
    document.querySelector("#root").innerHTML = await page.getHtml();
  } else {
    const page = new match.route.view();
    document.querySelector("#root").innerHTML = await page.getHtml();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      history.pushState(null, null, e.target.href);
      router();
    }
  });
  router();
});

window.addEventListener("popstate", () => {
  router();
});
