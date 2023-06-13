import Bulletin from "./pages/BulletinPage.js";
import MyUserData from "./pages/MyUserData.js";
import UserWithdrawal from "./pages/UserWithdrawal.js";
import MyWriteList from "./pages/MyWriteList.js";
import SignUp from "./pages/SignUp.js";
import Main from "./pages/MainPage.js";
import SignIn from "./pages/SignIn.js";

const router = async () => {
  const routes = [
    { path: "/", view: Main },
    { path: "/bulletin", view: Bulletin },
    { path: "/myUserData", view: MyUserData },
    { path: "/userWithdrawal", view: UserWithdrawal },
    { path: "/myWriteList", view: MyWriteList },
    { path: "/signup", view: SignUp },
    { path: "/signin", view: SignIn },
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

    // ------------------------------------------------------------------ 조원 소개 기능 ------------------------------------------------------------------

    if (location.pathname === "/"){

      const memberCBtn = document.querySelector("#uploadBtn");
      const newBtn = document.querySelector("#memberCBtn");
      const memberUpload = async () => {
        const memberName = uploadMemberName.value;
        const introduceContent = uploadMemberContent.value;
        const fileName = uploadImg.files;
        const formData = new FormData();
        console.log(memberName);

        formData.append("memberName", memberName);
        formData.append("introduceContent", introduceContent);
        formData.append("fileName", fileName);
        console.log(formData.memberName);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            body: formData,
          }
        );
        console.log(response.body);
        if (response.status == 201) {
          alert("조원 등록 성공!");
          // 값이 잘 전달 되었을 때 생성
          const boardNo = response.boardNo;
          const memberName = response.memberName;
          const introduceContent = response.introduceContent;
          const fileName = response.fileName;
  
          // 작성 페이지의 제목과 글 비우기
          uploadMemberName.value = "";
          uploadMemberContent.value = "";
          uploadImg.files = null;
          createBoard(boardNo, memberName, boardNo, introduceContent, fileName);
        }else if(response.status == 422){
          alert("올바르지 않은 데이터 양식입니다");
        }else{
          alert("Server Error");
        }
      }
      memberCBtn.addEventListener("click", memberUpload);
      
      let isAdmin = false; // 임시값 입니다.

      if (
        // 관리자 여부 체크 (임시값)
        sessionStorage.getItem("isAdmin") ==
        "jehwfuilaegmkdfzvjioaewj9r8rl34t934u"
      ) {
        isAdmin = true;
      }
      
      if(!isAdmin){
        newBtn.style.display = "none";
      }

      // 조원 데이터를 get으로 불러와서 해당 데이터에 맞게끔 조원소개란이 생성됩니다
      // 조원소개판 함수 정의

      /**
       * 새로운 더미 게시글을 만든 후 하단에 추가하는 함수입니다
       *
       * @param {Number} boardNo - 소개란 번호
       * @param {String} memberName - 조원 명
       * @param {String} introduceContent - 소개 내용
       * @param {Url} fileName - 이미지 url
       */
      const createBoard = (boardNo, memberName, introduceContent, fileName) => {
        const div = document.createElement("div");
        div.classList = "col-4 mt-5";
        div.id = boardNo;
        div.innerHTML = `
                          <div class="flip-outer m-auto">
                              <div class="flip-inner">
                                  <img src="${fileName}" class="front shadow-lg" />
                                  <div class="back shadow-lg">
                                      <h4 class="p-5">${memberName}</h4>
                                      <h4>${introduceContent}</h4>
                                  </div>
                              </div>
                          </div>
                        `;
        post.prepend(div);
      };

      // ------------------------------------------------------------------ < 조원 소개 생성 ------------------------------------------------------------------

      const post = document.querySelector("#member_post");
      post.innerHTML = "";
      // fetch를 이용해 값 가져오기 (임시 값)
      await fetch(
        "https://jsonplaceholder.typicode.com/photos?albumId=1&albumId=2",
        {
          method: "get",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          let count = 0; // 예제 블럭 제한 걸기
          console.log(data);
          for (let value of data) {
            createBoard(
              value.title,
              value.phone,
              value.id,
              value.url
            );

            // // 예제 블럭 6개만 뽑아쓰기
            // count++;
            // if (count === 6) {
            //   break;
            // }
          }
        })
        .catch((error) => console.log("fetch 에러!", error));

      // ------------------------------------------------------------------ 조원 소개 생성 > ----------------------------------------------------------------
    }


    // ------------------------------------------------------------------ 회원정보 수정 ------------------------------------------------------------------

    if (location.pathname === "/myUserData") {
      // confirm 버튼으로 닉네임 중복 여부 확인을 post로 보내고, 변경작업도 post로 보내는 과정 실행
      let nicknameChkVal = false;
      const nameInput = document.querySelector("#inputName");
      const nicknameChkBtn = document.querySelector("#idChkBtn");
      const modifyBtn = document.querySelector("#modifyBtn");

      nicknameChkBtn.addEventListener("click", () => {
        if (nameInput.value === "") {
          alert("변경할 닉네임을 입력해주세요!");
        } else {
          fetch("https://my-json-server.typicode.com/typicode/demo/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nickname: nameInput.value,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              // found 값에 따라 True 또는 False 전달
              if (data.status == 200) {
                alert("사용할 수 있는 닉네임입니다!");
                nicknameChkVal = true;
              } else {
                alert("이미 사용중인 닉네임입니다!");
              }
            });
        }
      });

      // modify 버튼으로 닉네임 중복여부를 확인하고
      // 확인되면 비밀번호 값과 nickname 값을 post 로 보내서
      // 비밀번호가 일치하면 post로 보낸 nickname 값으로 닉네임을 변경한다
      // 만약, 비밀번호가 일치하지 않으면 alert 창 떠서 꺼지게 만든다!
      modifyBtn.addEventListener("click", () => {
        if (nicknameChkVal) {
          fetch("https://my-json-server.typicode.com/typicode/demo/posts", {
            // fetch에는 웹서버/updateNickname 으로 보내기
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: sessionStorage.getItem("userId"),
              password: inputPassword.value,
              nickname: nameInput.value,
            }),
            // 변경할 닉네임 + (입력했던 pw와 로컬 스토리지에 있는 nickname 값 보내기)
          })
            // 해당 처리 결과반환
            .then((response) => response.json())
            .then((data) => {
              if (data.status == 200) {
                // 일치 여부에 따른 결과값
                // TRUE / FALSE
                alert("닉네임이 성공적으로 변경되었습니다!");
              } else {
                alert("비밀번호가 일치하지 않습니다!");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          alert("닉네임 중복 체크를 해주세요!");
        }
      });
    }

    // -------------------------------------------------------------- < 게시판 페이지 ------------------------------------------------------------

    // ------------------------------------------------------------------ 게시글 생성 ------------------------------------------------------------------
    // 게시판 들어왔을 때 실행
    if (location.pathname === "/bulletin") {
      let isAdmin = false; // 임시값 입니다.
      let isUser = true;
      const userName = sessionStorage.getItem('nickname'); // 임시값 입니다.
      if (
        // 관리자 여부 체크 (임시값)
        sessionStorage.getItem("isAdmin") ==
        "jehwfuilaegmkdfzvjioaewj9r8rl34t934u"
      ) {
        isAdmin = true;
      } else if (!userName) {
        isUser = false;
        const newBoard = document.querySelector("#newBoard");
        newBoard.style.display = "none";
      }
      let nowId = null;
      console.log("isAdmin = " + isAdmin);
      console.log("isUser = " + isUser);

      // 게시판 함수 정의

      /**
       * 새로운 더미 게시글을 만든 후 가장 상단에 추가하는 함수입니다..
       *
       * @param {String} title - 제목
       * @param {String} content - 글 내용
       * @param {Number} boardNo - 게시물 아이디
       * @param {Date} writeDate - 글 작성 일자 (DB로 부터 받아옵니다.)
       * @param {Url []} fileNames - 이미지 url 배열
       */
      const createBoard = (title, content, boardNo, writeDate, fileNames) => {
        const nickname = sessionStorage.getItem("name");
        const div = document.createElement("div");
        div.classList = "col-md-4 board";
        div.id = boardNo;
        div.innerHTML = `<a href="/" class="text-decoration-none text-dark" data-bs-toggle="modal"
                        data-bs-target="#modal${boardNo}">   <!-- modal 아이디로 타켓 지정 -->
                        <div class="card card${boardNo}" style="height: 460px">
                            <div style="height: 300px; max-height: 300px;" class="text-center">
                                <img src="${
                                  fileNames || fileNames[0]
                                }" style="height: 300px; max-height: 300px;" class="img-fluid Center">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-truncate">${title}</h5>
                                <p class="card-text text-truncate mt-4">${content}</p>
                                <div class="container-fluid row mt-3 px-0 box-wrap ms-0">
                                ${
                                  isAdmin
                                    ? `<div id="edit${boardNo}" class="col-3 px-0"><a class="btn btn-primary container-fluid" data-bs-toggle="modal" data-bs-target="#Edit_Modal">Edit</a>
                                    </div>`
                                    : title ==
                                      "officia delectus consequatur vero aut veniam explicabo molestias" // 로그인 한 사람 이름 (임시값)
                                    ? `<div id="edit${boardNo}" class="col-3 px-0"><a class="btn btn-primary container-fluid" data-bs-toggle="modal" data-bs-target="#Edit_Modal">Edit</a>
                                    </div>`
                                    : `<div class="col-3 px-0">
                                    </div>`
                                }
                                    
                                    <span class="col-9 text-end px-0 align-text-top">${nickname}</span>
                                </div>
                            </div>
                        </div>
                    </a>`;
        post.prepend(div);
      };

      /**
       * 새로운 게시글의 더미 모달 페이지를 만든 후 가장 상단에 추가하는 함수입니다.
       *
       * @param {String} title - 제목
       * @param {String} content - 글 내용
       * @param {Number} boardNo - 게시물 아이디
       * @param {Date} writeDate - 글 작성 일자 (DB로 부터 받아옵니다.)
       * @param {Url []} fileNames - 이미지 url 배열
       */
      const createModal = (title, content, boardNo, writeDate, fileNames) => {
        const div = document.createElement("div");
        div.className = "modal";
        div.id = `modal${boardNo}`;
        div.innerHTML = `<div class="modal-dialog modal-xl">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h1 class="modal-title fs-5">#${boardNo} ${title}</h1>
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
                                      <div id="block_comment${boardNo}" class="col-11"> <!-- 모달의 코멘트 블록 아이디 지정 -->

                                          

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
                                              <textarea id="modal_commentText${boardNo}" class="form-control"></textarea>
                                              <button id="modal_submitBtn${boardNo}" class="btn btn-primary">작성</button>
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
              </div>`;

        modal.prepend(div);
      };

      /**
       * 댓글 생성 함수 - 댓글을 생성 할 블록을 받은 후 해당 블록에 댓글을 생성합니다.
       *
       * @param {String} name - 작성자
       * @param {String} comment - 댓글 내용
       * @param {Date} commentDate - 댓글 등록일
       * @param {Number} block_comment - 댓글을 생성 할 블록
       */
      const createComment = async (
        name,
        comment,
        commentDate,
        block_comment
      ) => {
        // 받아온 값을 이용하여 해당 게시물에 코멘트 추가 (임시값)
        const div = document.createElement("div");
        div.classList = "row border mt-3 p-1";
        div.innerHTML = `<div class="col-12">
                  <div class="row">
                    <div class="col-5 commentWriter">${name}</div>
                    <div class="col-6 commentDate">${commentDate}</div>
                    ${
                      isAdmin
                        ? `<div class="btn btn-warning col-1 text-center m-0 p-0 commentDel">
                      ❌
                    </div>`
                        : name == sessionStorage.getItem("name")
                        ? `<div class="btn btn-warning col-1 text-center m-0 p-0 commentDel">
                      ❌
                    </div>`
                        : ""
                    }
                    
                  </div>
                </div>
                <div class="row mt-1">
                  <div class="col-12 commentValue">${comment}</div>
                </div>`;
        block_comment.prepend(div);
      };

      /**
       * 모달 초기화 함수 - 게시글 생성 모달, 게시글 수정 모달을 초기화 합니다.
       *
       * @param {input} titleElement - 모달의 제목 (type - text)
       * @param {input} textElement - 모달의 글내용 (type - text)
       * @param {input} imgInputElement - 모달의 이미지 (type - img)
       * @param {div} imageList - 이미지 리스트 Div 태그
       * @param {button} modalCloseBtn - 모달 닫기 버튼
       */
      const emptyModal = (
        titleElement,
        textElement,
        imgInputElement,
        imageList,
        modalCloseBtn
      ) => {
        titleElement.value = "";
        textElement.value = "";
        imgInputElement.type = "radio";
        imgInputElement.type = "file";
        imageList.innerHTML = ""; // 이미지 리스트 초기화
        modalCloseBtn.click(); // 모달 창 닫기
      };

      // 게시판 함수 정의

      // ------------------------------------------------------------------ < 게시글, 모달 생성 ------------------------------------------------------------------

      const post = document.querySelector("#block_post");
      post.innerHTML = "";

      // 모달
      const modal = document.querySelector("#block_modal");
      console.log(modal);
      modal.innerHTML = "";
      const fileName = "미야케 우동1";
      const imgUrl = `./static/image/${fileName}.jpg`;
      const writer = "규민";
      let writeDate = "2023.06.02 00:09";
      const hit = 48;

      // fetch를 이용해 값 가져오기 (임시 값)
      await fetch(
        "https://jsonplaceholder.typicode.com/photos?albumId=1&albumId=2",
        {
          method: "get",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          for (let value of data) {
            createBoard(value.title, value.url, value.id, writeDate, value.url);

            createModal(
              value.title,
              value.phone,
              value.id,
              writeDate,
              value.url
            );
          }
        })
        .catch((error) => console.log("fetch 에러!", error));

      // ------------------------------------------------------------------ 게시글, 모달 생성 > ----------------------------------------------------------------

      // ------------------------------------------------------------------ < 댓글 생성 ------------------------------------------------------------------
      console.log("bullet");

      const boardList = document.querySelector("#board-list");
      // 게시물 중 아무 게시물을 선택해도 어떤 게시물인지 알아서 확인(게시물 마다 이벤트 리스너와 태그 선택자 만들 필요 X)

      boardList.addEventListener("click", async (event) => {
        let path = event.target;
        let id = path.id;
        while (!id) {
          // 게시글의 id 찾기
          console.log("count");
          path = path.parentElement;
          id = path.id;
          console.log(id);
        }

        // 게시글 수정
        if (id.indexOf("edit") != -1) {
          let count = 0;
          const editId = id.replace("edit", "");
          const editModal = document.querySelector("#Edit_Modal"); // 게시글 수정용 모달창
          const editModalTitle = editModal.querySelector("#uploadTitle");
          const editModalContent = editModal.querySelector("#uploadText");
          const nowImgCheck = editModal.querySelector("#nowImg");
          const defaultImgCheck = editModal.querySelector("#defaultImg");
          const editImgInput = editModal.querySelector("#editImg");
          const editImgList = editModal.querySelector("#editImageListDiv"); // 파일 이름 표시창
          const modalCloseBtn = editModal.querySelector("#btn-close");
          const editBtn = editModal.querySelector("#editBtn");

          const editBoard = document.querySelector(`.card${editId}`); // 수정할 게시글
          const editBoardTitle = editBoard.querySelector(".card-title"); // 수정할 게시글 제목
          const editBoardContent = editBoard.querySelector(".card-text"); // 수정할 게시글 글내용

          // 수정할 게시글의 제목, 글내용 가져오기
          editModalTitle.value = editBoardTitle.innerText;
          editModalContent.value = editBoardContent.innerText;

          // 현재 이미지 사용 선택시
          nowImgCheck.addEventListener("change", (event) => {
            if (event.target.checked) {
              defaultImgCheck.checked = false;
              editImgInput.disabled = true;
              editImgList.style.backgroundColor = "#E9ECEF";
            } else {
              editImgInput.disabled = false;
              editImgList.style.backgroundColor = "#ffffff";
            }
          });

          // 기본 이미지 사용 선택시
          defaultImgCheck.addEventListener("change", (event) => {
            if (event.target.checked) {
              nowImgCheck.checked = false;
              editImgInput.disabled = true;
              editImgList.style.backgroundColor = "#E9ECEF";
            } else {
              editImgInput.disabled = false;
              editImgList.style.backgroundColor = "#ffffff";
            }
          });

          // 이미지 선택 시
          editImgInput.addEventListener("change", () => {
            nowImgCheck.checked = false;
            defaultImgCheck.checked = false;
          });

          // 수정 버튼 눌렀을 경우
          editBtn.addEventListener("click", () => {
            if (count != 0) {
              return;
            }
            // 제목, 내용이 모두 변경되었을 경우
            if (
              editModalTitle.value != editBoardTitle.innerText &&
              editModalContent.value != editBoardContent.innerText
            ) {
              console.log("모두 변경");
              fetch("https://jsonplaceholder.typicode.com/posts/1", {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  boardNo: id,
                  title: editModalTitle.value,
                  content: editModalContent.value,
                }),
              });
            } // 제목만 변경되었을 경우
            else if (editModalTitle.value != editBoardTitle.innerText) {
              console.log("제목 변경");
              fetch("https://jsonplaceholder.typicode.com/posts/1", {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  boardNo: editId,
                  title: editModalTitle.value,
                }),
              });
            } // 내용만 변경되었을 경우
            else if (editModalContent.value != editBoardContent.innerText) {
              console.log("내용 변경");
              fetch("https://jsonplaceholder.typicode.com/posts/1", {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  boardNo: editId,
                  content: editModalContent.value,
                }),
              });
            }
            // 현재 이미지 사용을 체크했을 경우
            if (nowImgCheck.checked == true) {
              console.log("현재 이미지 사용");
            } else if (defaultImgCheck.checked == true) {
              console.log("기본 이미지 사용");
              const formData = new FormData();
              formData.append("boardNo", editId);
            } else {
              console.log("이미지 변경");
              const formData = new FormData();
              formData.append("boardNo", editId);
              for (let file in editInputImage.files) {
                formData.append("image", file);
              }
              fetch("https://jsonplaceholder.typicode.com/posts/1", {
                method: "PUT",
                body: formData,
              });
            }

            // 수정 모달 초기화
            nowImgCheck.checked = false;
            defaultImgCheck.checked = false;
            editImgInput.disabled = false;
            editImgList.style.backgroundColor = "#ffffff";

            emptyModal(
              editModalTitle,
              editModalContent,
              editImgInput,
              editImgList,
              modalCloseBtn
            );
            count++;
          });
        } // 댓글생성
        else {
          const block_comment = document.querySelector(`#block_comment${id}`);
          block_comment.innerHTML = ""; // 클릭 이전에 코멘트가 있다면 삭제
          // createComment(id);
          nowId = id;

          // fetch를 이용해 값 가져오기 (임시 값)
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
              method: "get",
            }
          );

          // 값이 잘 전달 되었을 때 생성 (테스트 끝나면 201로 바꿔야 함)
          if (response.status == 200) {
            const data = await response.json();
            for (let value of data) {
              console.log(value);
              createComment(value.name, value.email, id, block_comment);
            }
          }
        }
      });

      // ------------------------------------------------------------------ 댓글 생성 > ------------------------------------------------------------------

      // -------------------------------------------------------------- < 댓글 작성 (POST), 댓글 삭제 ------------------------------------------------------------

      const block_modal = document.querySelector("#block_modal");

      block_modal.addEventListener(
        "click",
        async (event) => {
          console.log(event.target.id);
          if (event.target.id.indexOf("modal_submitBtn") != -1) {
            const commentBtnId = event.target.id;
            // 댓글 작성 버튼을 눌렀을 경우 동작
            const submitId = commentBtnId.replace("modal_submitBtn", "");
            console.log("submitId = " + submitId); // 보드 넘버 ex) 0
            const commentText = document.querySelector(
              `#modal_commentText${submitId}`
            );
            if (commentText.value.trim() === "") {
              // 댓글을 공백으로 작성 후 작성 버튼을 눌렀을 경우 동작
              return;
            }

            const block_comment = document.querySelector(
              `#block_comment${submitId}`
            );

            // 테스트
            console.log(block_comment);
            createComment(
              sessionStorage.getItem("name"),
              commentText.value,
              submitId,
              block_comment
            );

            const response = await fetch(
              "https://jsonplaceholder.typicode.com/posts",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                cache: "no-cache",
                body: JSON.stringify({
                  boardNo: submitId,
                  nickname: "규민",
                  comment: commentText.value,
                }),
              }
            );

            // 성공적으로 생성하였을 경우
            if (response.status == 201) {
              commentText.value = "";
              createComment(
                sessionStorage.getItem("name"),
                commentText.value,
                id,
                block_comment
              );
            }
          }
          if (event.target.classList.contains("commentDel")) {
            // 댓글 삭제 버튼을 눌렀을 경우 동작
            console.log("삭제버튼");
            console.log(nowId);
            console.dir(event.target);
            const boardNo = nowId;
            let comment = event.target;
            console.log(comment.parentNode.children[0].innerText);
            console.log(comment.parentNode.children[1].innerText);
            const nickname = comment.parentNode.children[0].innerText;
            const commentDate = comment.parentNode.children[1].innerText;

            fetch("https://jsonplaceholder.typicode.com/posts/1", {
              method: "DELETE",
              headers: {
                Authorization: sessionStorage.getItem("access_token"),
              },
              body: JSON.stringify({
                boardNo,
                // nickname,
                commentDate,
              }),
            });
          }
        }
        // -------------------------------------------------------------- 댓글 작성 (POST), 댓글 삭제 > ------------------------------------------------------------
      );

      // -------------------------------------------------------------- < 이미지 리스트 출력 ------------------------------------------------------------

      // 게시물 생성 모달
      const inputImage = document.getElementById("uploadImg");
      const imageList = document.getElementById("imageList");

      inputImage.addEventListener("change", (event) => {
        const files = event.target.files; // 선택된 이미지 파일들
        imageList.innerHTML = ""; // 이미지 리스트 초기화

        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const listItem = document.createElement("li");
          listItem.textContent = file.name; // 파일 이름을 리스트 아이템에 텍스트로 설정
          imageList.appendChild(listItem); // 리스트 아이템을 이미지 리스트에 추가
        }
      });

      // 게시물 수정 모달
      const editInputImage = document.getElementById("editImg");
      const editImageList = document.getElementById("editImageList");

      editInputImage.addEventListener("change", (event) => {
        const files = event.target.files; // 선택된 이미지 파일들
        editImageList.innerHTML = ""; // 이미지 리스트 초기화

        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const listItem = document.createElement("li");
          listItem.textContent = file.name; // 파일 이름을 리스트 아이템에 텍스트로 설정
          editImageList.appendChild(listItem); // 리스트 아이템을 이미지 리스트에 추가
        }
      });

      // -------------------------------------------------------------- 이미지 리스트 출력 > ------------------------------------------------------------

      // -------------------------------------------------------------- < 게시판 신규 작성 ------------------------------------------------------------

      const uploadBtn = document.querySelector("#uploadBtn");
      const uploadText = document.querySelector("#uploadText");
      const uploadTitle = document.querySelector("#uploadTitle");
      const uploadImg = document.querySelector("#uploadImg");
      const modalCloseBtn = document.querySelector("#btn-close");

      // Upload 버튼을 눌렀을 경우
      const handleUpload = async () => {
        const title = uploadTitle.value;
        const content = uploadText.value;
        const images = uploadImg.files;
        const formData = new FormData();

        createBoard(title, content, "124", "fsdafasdfasdfsad", images[0]); // 테스트용
        createModal(title, content, "124", "fsdafasdfasdfsad", images[0]); // 테스트용

        emptyModal(
          uploadText,
          uploadTitle,
          uploadImg,
          imageList,
          modalCloseBtn
        );

        formData.append("title", title);
        formData.append("content", content);
        for (let i = 0; i < images.length; i++) {
          const image = images[i];
          formData.append("image", image);
        }

        const response = await fetch(
          // "https://juhyeon-cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts",
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            body: formData,
          }
        );

        console.log(response);

        // status 코드가 201일 경우 (정상적으로 생성)
        if (response.status == 201) {
          const boardNo = response.boardNo;
          const writeDate = response.writeDate;
          const fileNames = response.fileName;

          createBoard(title, content, boardNo, writeDate, fileNames);
          createModal(title, content, boardNo, writeDate, fileNames);

          // 모달 창 비우기
        }
      };

      uploadBtn.addEventListener("click", handleUpload);

      // -------------------------------------------------------------- 게시판 신규 작성 > ------------------------------------------------------------

      // -------------------------------------------------------------- 게시판 페이지 > ------------------------------------------------------------
    }
    if (location.pathname === "/userWithdrawal") {
      // 버튼 태그 불러오기
      const destroyBtn = document.querySelector("#destroyBtn");

      // 버튼 이벤트 추가
      destroyBtn.addEventListener("click", async () => {
        let myPassword = inputPassword.value;

        // 입력값이 존재할 떄
        if (myPassword != "") {
          fetch("http://localhost:4000/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-cache",
            body: JSON.stringify({
              nickname: sessionStorage.getItem("nikname"),
              userPassword: myPassword,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              // 회원 탈퇴 성공
              if (data.status == 204) {
                sessionStorage.clear();
                alert("회원탈퇴 성공");
                guestFunc();
                mainLink.click();
              }
              // 올바르지 않은 데이터
              else if (data.status == 422) {
                console.log(data.message);
                alert("유효하지 않은 값입니다.");
              }
              // 서버 문제
              else if (data.status == 500) {
                console.log(data.message);
                alert("서버에 문제가 생겼습니다.");
              }
            });
        }
        // 입력값이 존재하지 않을 경우
        else {
          alert("비밀번호를 입력해주세요.");
        }
      });

    }
    if (location.pathname === "/signup") {
      // 태그 불러오기
      const idCheck = document.querySelector("#idConfirm");
      const addUser = document.querySelector("#addUser");
      let userId = document.getElementById("InputId").value;
      let Check = false;

      // 이벤트 추가
      idCheck.addEventListener("click", async () => {
        userId = document.getElementById("InputId").value;
        console.log(userId);
        if (userId != "") {
          fetch("http://43.200.196.118:3000/account/idCheck/?userId=dori", {
            method: "GET",
            query: {
              userId: userId,
            },
            cache: "no-cache",
          })
            .then((response) => response.json())
            .then((data) => {
              // 사용가능
              console.log(data);
              if (data.status == 200) {
                console.log(data.message);
                alert("사용가능한 아이디 입니다.");
                Check = true;
              }
              // 중복
              if (data.status == 409) {
                console.log(data.messgae);
                alert("아이디가 이미 존재합니다.");
              }
            });
        }
      });
      // 버튼에 이벤트 추가
      addUser.addEventListener("click", async () => {
        const username = document.getElementById("InputNikname").value;
        const userPassword = document.getElementById("InputPassword").value;
        const userConfirmPassword = document.getElementById(
          "InputConfirmPassword"
        ).value;

        // 입력값이 없을 시 경고
        if (username != "" && userPassword != "" && userConfirmPassword) {
          // 중복확인 확인
          if (Check) {
            if (userPassword == userConfirmPassword) {
              // 값 POST
              fetch("http://43.200.196.118:3000/account/signUp", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                cache: "no-cache",
                body: JSON.stringify({
                  userId: userId,
                  userPassword: userPassword,
                  nickname: username,
                }),
              })
                .then((response) => response.json())
                .then((data) => {
                  // 회원 가입 성공
                  if (data.status == 201) {
                    console.log(data.message);
                    alert("회원 가입 성공");
                  }
                  // 서버 오류
                  if (data.status == 500) {
                    console.log(data.message);
                    alert("서버 측 오류");
                  }
                })

                .catch((error) => {
                  console.log(error);
                });
            }
            // 입력한 값이 서로 다를 경우
            else {
              console.log("password error");
              alert("비밀번호가 일치하지않습니다.");
            }
          } else {
            alert("아이디 중복확인 해주세요.");
          }
        } else {
          alert("값을 모두 입력해주세요.");
        }
      });
    }
    if (location.pathname === "/signin") {
      const login = document.getElementById("LoginBtn");

      // 버튼에 이벤트 달기
      login.addEventListener("click", () => {
        const inputId = InputId.value;
        const inputPassword = InputPassword.value;

        // 값 POST 전달
        fetch("http://localhost:4000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: inputId,
            userPassword: inputPassword,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            // 사용자 로그인 성공
            if (data.status == 200) {
              alert("로그인 성공");
              sessionStorage.setItem("token", data.data.token);
              sessionStorage.setItem("nickname", data.data.nickname);
              loginFunc();
              // 관리자 여부 확인
              if (data.data.isAdmin == true) {
                sessionStorage.setItem(
                  "isAdmin",
                  "jehwfuilaegmkdfzvjioaewj9r8rl34t934u"
                );
              }
              mainLink.click();
            }
            // 로그인 실패
            if (data.status == 400) {
              console.log(data.message);
              alert("로그인 실패");
            }
          })

          .catch((error) => console.log(error));
      });
    }
    if (location.pathname === "/MyWriteList"){

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

