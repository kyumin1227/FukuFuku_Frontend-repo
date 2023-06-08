import Home from "./pages/Home.js";
import Posts from "./pages/Posts.js";
import Settings from "./pages/Settings.js";
import Bulletin from "./pages/BulletinPage.js";
import MyUserData from "./pages/MyUserData.js";
import UserWithdrawal from "./pages/UserWithdrawal.js";
import MyWriteList from "./pages/MyWriteList.js";

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/posts", view: Posts },
    { path: "/settings", view: Settings },
    { path: "/bulletin", view: Bulletin },
    { path: "/myUserData", view: MyUserData },
    { path: "/userWithdrawal", view: UserWithdrawal },
    { path: "/myWriteList", view: MyWriteList },
  ];

  // ------------------------------------------------------------------ < 클래스 감지 ------------------------------------------------------------------
  // observer.disconnect();
  // const $body = document.querySelector("body");

  // // MutationObserver 생성자를 통해 observer 인스턴스 생성
  // const observer = new MutationObserver((mutationsList) => {
  //   for (let mutation of mutationsList) {
  //     if (
  //       mutation.type === "attributes" &&
  //       mutation.attributeName === "class"
  //     ) {
  //       // 클래스 변경이 감지되었을 때 실행될 로직
  //       console.log("클래스가 변경되었습니다.");
  //     }
  //   }
  // });

  // // observer에 감지할 대상 요소와 옵션 등록
  // observer.observe($body, { attributes: true });

  // ------------------------------------------------------------------ 클래스 감지 > ------------------------------------------------------------------

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
      // 게시판 들어왔을 때 실행
      // 1. 게시물 불러오기 (완료)
      // 2. 게시물 클릭 시 해당 게시물의 (모달 생성하기) 댓글 불러오기 (진행중)
      // 3. 댓글 작성

      // 조만간 게시판 코드 리팩토링 한 번 할게요

      let nowId = null;

      // ------------------------------------------------------------------ < 게시글 생성 ------------------------------------------------------------------

      const post = document.querySelector(".block_post");
      post.innerHTML = "";

      const boardNo = 0;
      const boardId = `board${boardNo}`;
      const modalId = `modal${boardNo}`;
      let count = 0;
      // const title = "미야케 우동";
      // const content = "미야케 우동 가격도 저렴하고 맛있어요";
      // const fileName = "미야케 우동1";
      // const imgUrl = `./static/image/${fileName}.jpg`;
      // const writer = "규민";

      // 모달
      const modal = document.querySelector("#block_modal");
      console.log(modal);
      modal.innerHTML = "";
      // const nickname = "닉네임";
      // const comment = "우와! 정말 맛집이네요!!";
      // const commentDate = "2023-06-01 16:28";

      // const boardNo = 0;
      // const boardId = `board${boardNo}`;
      // const modalId = `modal${boardNo}`;
      const title = "미야케 우동";
      const content = "미야케 우동 가격도 저렴하고 맛있어요";
      const fileName = "미야케 우동1";
      const imgUrl = `./static/image/${fileName}.jpg`;
      const writer = "규민";
      const writeDate = "2023.06.02 00:09";
      const hit = 48;

      let comments = "";

      let modals = "";

      // fetch를 이용해 값 가져오기 (임시 값)
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "get",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          for (var value of data) {
            post.innerHTML += `<div class="col-md-4 board" id = "${count}">    <!-- 게시판 아이디 지정 -->
                    <a href="/" class="text-decoration-none text-dark" data-bs-toggle="modal"
                        data-bs-target="#modal${count}">   <!-- modal 아이디로 타켓 지정 -->
                        <div class="card" style="height: 460px">
                            <div style="height: 300px;">
                                <img src="${
                                  value.name || imgUrl
                                }" height="300px" class="img-fluid">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${
                                  value.email + count || title
                                }</h5>
                                <p class="card-text text-truncate mt-4">${
                                  value.phone +
                                    value.phone +
                                    value.phone +
                                    value.phone +
                                    value.phone +
                                    value.phone +
                                    value.phone || content
                                }</p>
                                <div class="container-fluid row mt-3 px-0 box-wrap ms-0">
                                    <div class="col-3 px-0"><a href="#" class="btn btn-primary container-fluid">Edit</a>
                                    </div>
                                    <span class="col-9 text-end px-0 align-text-top">${
                                      value.name || writer
                                    }</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>`;

            // ------------------------------------------------------------------ 게시글 생성 > ------------------------------------------------------------------

            // ---------------------------------------------------------------- < 모달(게시글) 생성 ------------------------------------------------------------------

            modal.innerHTML += `<div class="modal" id="modal${count}"> <!-- modal 아이디 지정 -->
              <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h1 class="modal-title fs-5">#${count} ${title}</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          <div class="container-fluid">
                              <div class="row">
                                  <div class="col-8 p-0">
                                      <!-- 이미지 창 -->

                                      <div class="d-flex align-items-center">

                                          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                                              <div class="carousel-indicators">
                                                  <button type="button" data-bs-target="#carouselExampleIndicators"
                                                      data-bs-slide-to="0" class="active" aria-current="true"
                                                      aria-label="Slide 1"></button>
                                                  <button type="button" data-bs-target="#carouselExampleIndicators"
                                                      data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                  <button type="button" data-bs-target="#carouselExampleIndicators"
                                                      data-bs-slide-to="2" aria-label="Slide 3"></button>
                                              </div>
                                              <div class="carousel-inner">
                                                  <div class="carousel-item active">
                                                      <img src="${imgUrl}" class="d-block w-100" alt="...">
                                                  </div>
                                                  <div class="carousel-item">
                                                      <img src="./static/image/미야케 우동2.jpg" class="d-block w-100" alt="...">
                                                  </div>
                                                  <div class="carousel-item">
                                                      <img src="./static/image/미야케 우동3.jpg" class="d-block w-100" alt="...">
                                                  </div>
                                              </div>
                                              <button class="carousel-control-prev" type="button"
                                                  data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                  <span class="visually-hidden">Previous</span>
                                              </button>
                                              <button class="carousel-control-next" type="button"
                                                  data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                  <span class="visually-hidden">Next</span>
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-4 d-flex justify-content-center" style="overflow-y: auto; height: 65vh;">
                                      <!-- 댓글 창 -->
                                      <div id="block_comment${count}" class="col-11"> <!-- 모달의 코멘트 블록 아이디 지정 -->

                                          

                                      </div>
                                  </div>
                              </div>

                              <!-- 본문, 댓글작성 창 -->
                              <div class="row">

                                  <!-- 본문 창 -->

                                  <div class="col-8 bg-secondary bg-opacity-50 rounded-1 d-flex justify-content-between flex-column p-3"
                                      style="height: 15vh;">
                                      <span>${content}</span>
                                      <div class="row d-flex justify-content-end">
                                          <div class="col-6">작성 일자: <span>${writeDate}</span></div>
                                          <div class="col-3">작성자: <span>${writer}</span></div>
                                          <div class="col-3">조회수: <span>${hit}</span></div>
                                      </div>
                                  </div>

                                  <!-- 댓글작성 창 -->

                                  <div class="col-4">
                                      <div class="row mt-3 h-75">
                                          <div class="col-12 d-flex justify-content-end">
                                              <textarea id="modal_commentText${count}" class="form-control"></textarea>
                                              <button id="modal_submitBtn${count}" class="btn btn-primary">작성</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                  </div>
              </div>
          </div>`;
            count++;
          }
          console.log("ok");
          // nowId = 0;
          console.log(nowId);
        })
        .catch((error) => console.log("fetch 에러!", error));

      // ------------------------------------------------------------------ 모달(게시글) 생성 > ----------------------------------------------------------------

      // ------------------------------------------------------------------ < 댓글 생성 ------------------------------------------------------------------
      console.log("bullet");
      /**댓글 생성 함수 - 받아온 id와 data를 통해 해당 게시물에 받아온 댓글을 생성합니다.
       *
       * id = 게시물 아이디
       *
       * data = Get을 통해 받아온 데이터
       */
      const appendComment = (id, data) => {
        const block_comment = document.querySelector(`#block_comment${id}`);
        block_comment.innerHTML = '<span class="mt-5 fs-4">Comment</span>'; // 클릭 이전에 코멘트가 있다면 삭제
        // console.log(data);
        for (var value of data) {
          block_comment.innerHTML += `<div class="row border mt-3 p-1">
                <div class="col-12">
                  <div class="row">
                    <div class="col-5">${value.name}</div>
                    <div class="col-6">${id}</div>
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
      };

      const boardList = document.querySelector("#board-list");
      // 게시물 중 아무 게시물을 선택해도 어떤 게시물인지 알아서 확인(게시물 마다 이벤트 리스너와 태그 선택자 만들 필요 X)

      boardList.addEventListener("click", (event) => {
        let path = event.target;
        let id = path.id;
        while (!id) {
          // 게시글의 id 찾기
          console.log("count");
          path = path.parentElement;
          id = path.id;
          console.log(id);
        }
        // nowId = id;

        // fetch를 이용해 값 가져오기 (임시 값)
        fetch("https://jsonplaceholder.typicode.com/users", {
          method: "get",
        })
          .then((response) => response.json())
          .then((data) => {
            // 받아온 값을 이용하여 해당 게시물에 코멘트 추가 (임시값)
            appendComment(id, data);
          })
          .catch((error) => console.log("fetch 에러!", error));
      });

      // ------------------------------------------------------------------ 댓글 생성 > ------------------------------------------------------------------

      // -------------------------------------------------------------- < 댓글 작성 (POST) 테스트 코드 ------------------------------------------------------------

      // 댓글 작성에서 해야할 것
      // 댓글 보낸 후 textarea 내부 비우기
      // 입력값이 없으면 fetch 보내지 않기
      // post 보낸 이후 get으로 다시 댓글 생성하기

      const block_modal = document.querySelector("#block_modal");

      block_modal.addEventListener(
        "click",
        (event) => {
          console.log(event.target.id);
          const commentBtnId = event.target.id;
          if (commentBtnId.indexOf("modal_submitBtn") != -1) {
            // 댓글 작성 버튼을 눌렀을 경우
            const submitId = commentBtnId.replace("modal_submitBtn", "");
            console.log("submitId = " + submitId); // 보드 넘버 ex) 0
            const commentText = document.querySelector(
              `#modal_commentText${submitId}`
            );
            console.log(commentText);
            console.log(commentText.value);

            const date = new Date();
            let formData = new FormData();
            // formData 생성
            formData.append("boardNo", `${submitId}`);
            formData.append("nickname", `규민`);
            formData.append("comment", `${commentText.value}`);
            formData.append("commentDate", `${date.toISOString()}`);

            // const serializedData = new URLSearchParams(formData).toString();

            // console.log(serializedData);

            fetch("http://localhost:4000/test", {
              method: "POST",
              cache: "no-cache",
              // body: serializedData,
              body: formData,
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
              });
          }
        }
        // -------------------------------------------------------------- 댓글 작성 (POST) 테스트 코드 > ------------------------------------------------------------
      );
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
  console.log("주소가 변경되었습니다. popstate");
  router();
});
