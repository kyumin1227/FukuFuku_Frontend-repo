// console.log("hi");

// // 모달 내부 댓글 작성
// const modalCommentSubmit = document.querySelector("#modal_submitBtn");
// const modalCommentText = document.querySelector("#modal_commentText");

// const handleModalComment = () => {
//   // console.log(modalCommentText.value);
//   const date = new Date();
//   let formData = new FormData();
//   // formData 생성
//   formData.append("boardNo", `${null}`);
//   formData.append("nickname", `${null}`);
//   formData.append("comment", `${modalCommentText.value}`);
//   formData.append("commentDate", `${date.toISOString()}`);

//   const serializedData = new URLSearchParams(formData).toString();

//   console.log(serializedData);

//   fetch("http://localhost:4000/test", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//     },
//     cache: "no-cache",
//     body: serializedData,
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

// modalCommentSubmit.addEventListener("click", handleModalComment);

// 게시물 생성

  const clickBtn = document.querySelector("#btn");
  console.log("hi");

  const block_post = document.querySelector(".block_post");

  let posts = "";

  const handleClick = () => {
    posts += `<div class="col-md-4">
                      <a href="/" class="text-decoration-none text-dark" data-bs-toggle="modal"
                          data-bs-target="">
                          <div class="card" style="height: 470px">
                              <div style="height: 300px;">
                                  <img src="./static/image/" height="300px" class="img-fluid">
                              </div>
                              <div class="card-body">
                                  <h5 class="card-title"></h5>
                                  <p class="card-text"></p>
                                  <div class="container-fluid row mt-3 px-0 box-wrap ms-0">
                                      <div class="col-3 px-0"><a href="#" class="btn btn-primary container-fluid">Edit</a>
                                      </div>
                                      <span class="col-9 text-end px-0 align-text-top"></span>
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>`;
    block_post.innerHTML = posts;
    console.log("hi");
  };

  clickBtn.addEventListener("click", handleClick);
