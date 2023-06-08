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
    console.log("페이지 변경");
    document.querySelector("#root").innerHTML = await page.getHtml();
    if (location.pathname === "/bulletin") {
      // 게시글 화면 들어왔을 때 실행 (해당 게시글의 댓글 불러오기)
      console.log("bullet");
      const clickBtn = document.querySelector("#board0");

      const handleClick = (event) => {
        let path = event.target;
        let id = path.id;
        while (!id) {
          // 게시글의 id 찾기
          console.log("count");
          path = path.parentElement;
          id = path.id;
        }

        // fetch를 이용해 값 가져오기 (임시 값)
        fetch("https://jsonplaceholder.typicode.com/users", {
          method: "get",
        })
          .then((response) => response.json())
          .then((data) => {
            // 받아온 값을 이용하여 해당 게시물에 코멘트 추가 (임시값)
            const block_comment = document.querySelector(`#${id}block_comment`);
            // console.log(data);
            for (var value of data) {
              block_comment.innerHTML += `<div class="row border mt-3 p-1">
                <div class="col-12">
                  <div class="row">
                    <div class="col-5">${value.name}</div>
                    <div class="col-6">${value.address.city}</div>
                    <div class="btn btn-warning col-1 text-center m-0 p-0">
                      ❌
                    </div>
                  </div>
                </div>
                <div class="row mt-1">
                  <div class="col-12">${value.company.catchPhrase}</div>
                </div>
              </div>`;
            }
          })
          .catch((error) => console.log("fetch 에러!", error));
      };

      clickBtn.addEventListener("click", handleClick);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("주소가 변경되었습니다. index dom");
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
  console.log("주소가 변경되었습니다. index");
  router();
});
