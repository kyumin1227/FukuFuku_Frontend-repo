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
    // 토큰 값 여부로 바꾸기
    const page = new match.route.view();
    console.log("페이지 변경");
    document.querySelector("#root").innerHTML = await page.getHtml();

    // ------------------------------------------------------------------ 회원정보 수정 ------------------------------------------------------------------  

    if (location.pathname === "/myUserData"){
      localStorage.setItem("nickname", "nicknameSomethings");      // 로컬스토리지 테스트
      // confirm 버튼으로 닉네임 중복 여부 확인을 post로 보내고, 중복여부를 get으로 받아 야햄
      let nicknameChkVal = false;
      const nameInput = document.querySelector("#inputName");
      const nicknameChkBtn = document.querySelector("#idChkBtn");
      const modifyBtn = document.querySelector("#modifyBtn");
      
      nicknameChkBtn.addEventListener("click", () => {
        let formData = new FormData();
        // formData 생성
        formData.append("nickname", nameInput.value)
      
        fetch("https://my-json-server.typicode.com/typicode/demo/posts", {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            const found = data.some((post) => String(post.id) === nameInput.value);
            // found 값에 따라 True 또는 False 전달
            const result = { exists: found };
            if(nameInput.value === ""){
              alert('변경할 닉네임을 입력해주세요!');
            }else if(!found){
              alert('사용할 수 있는 닉네임입니다!');
              nicknameChkVal = !found;
            }else{
              alert('이미 사용중인 닉네임입니다!');
            }
          });
      });

      // modify 버튼으로 닉네임 중복여부를 확인하고
      // 확인되면 비밀번호 값과 nickname 값을 post 로 보내서
      // 비밀번호가 일치하면 post로 보낸 nickname 값으로 닉네임을 변경한다
      // 만약, 비밀번호가 일치하지 않으면 alert 창 떠서 꺼지게 만든다!
      modifyBtn.addEventListener("click", () => {
        if(nicknameChkVal){
          fetch("https://my-json-server.typicode.com/typicode/demo/posts", {
            // fetch에는 웹서버/updateNickname 으로 보내기
            method: "POST",
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "userId": localStorage.getItem("userId"),
              "password": inputPassword.value,
              "nickname": nameInput.value,
            }),
            // 변경할 닉네임 + (입력했던 pw와 로컬 스토리지에 있는 nickname 값 보내기)
          })
          // 해당 처리 결과반환
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              if (data.passwordMatch) {
                // 일치 여부에 따른 결과값
                // TRUE / FALSE
                alert("닉네임이 성공적으로 변경되었습니다!");
              } else {
                alert("비밀번호가 일치하지 않습니다!");
              }
            })
            .catch((error) => {
              console.log(error);
            })
        }else{
          alert("닉네임 중복 체크를 해주세요!");
        }
      })


    }

      // ------------------------------------------------------------------ 게시글 생성 ------------------------------------------------------------------

    if (location.pathname === "/bulletin") {
      // 게시판 들어왔을 때 실행
      // 1. 게시글 불러오기 (완료)
      // 2. 게시글 클릭 시 해당 게시글의 댓글 불러오기 (진행중)
      // 3. 댓글 작성j;

      const post = document.querySelector(".block_post");
      post.innerHTML = "";

      const boardNo = 0;
      const boardId = `board${boardNo}`;
      const modalId = `modal${boardNo}`;
      // const title = "미야케 우동";
      // const content = "미야케 우동 가격도 저렴하고 맛있어요";
      // const fileName = "미야케 우동1";
      // const imgUrl = `./static/image/${fileName}.jpg`;
      // const writer = "규민";

      // fetch를 이용해 값 가져오기 (임시 값)
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "get",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          for (var value of data) {
            post.innerHTML += `<div class="col-md-4 board" id = "${boardId}">    <!-- 게시판 아이디 지정 -->
                    <a href="/" class="text-decoration-none text-dark" data-bs-toggle="modal"
                        data-bs-target="#${modalId}">   <!-- modal 아이디로 타켓 지정 -->
                        <div class="card" style="height: 470px">
                            <div style="height: 300px;">
                                <img src="${
                                  value.name || imgUrl
                                }" height="300px" class="img-fluid">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${
                                  value.email || title
                                }</h5>
                                <p class="card-text">${
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
          }
          console.log("ok");
        })
        .catch((error) => console.log("fetch 에러!", error));

      // ------------------------------------------------------------------ 댓글 생성 ------------------------------------------------------------------
      console.log("bullet");
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

        // fetch를 이용해 값 가져오기 (임시 값)
        fetch("https://jsonplaceholder.typicode.com/users", {
          method: "get",
        })
          .then((response) => response.json())
          .then((data) => {
            // 받아온 값을 이용하여 해당 게시물에 코멘트 추가 (임시값)
            const block_comment = document.querySelector(`#${id}block_comment`);
            block_comment.innerHTML = ""; // 클릭 이전에 코멘트가 있다면 삭제
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
      });

      // -------------------------------------------------------------- 댓글 작성 (POST) 테스트 코드 ------------------------------------------------------------
      // const clickCommentSubmit = document.querySelector(
      //   `#modal_submitBtn${id}`
      // );
      // const commentText = document.querySelector(`#modal_commentText${id}`);

      const handleModalComment = () => {
        // console.log(modalCommentText.value);
        const date = new Date();
        let formData = new FormData();
        // formData 생성
        formData.append("boardNo", `${null}`);
        formData.append("nickname", `${null}`);
        formData.append("comment", `${modalCommentText.value}`);
        formData.append("commentDate", `${date.toISOString()}`);

        const serializedData = new URLSearchParams(formData).toString();

        console.log(serializedData);

        fetch("http://localhost:3000/test", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
          cache: "no-cache",
          body: serializedData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      };

      // clickCommentSubmit.addEventListener("click", handleModalComment);
      // clickBoard.addEventListener("click", handleClickBoard);
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
