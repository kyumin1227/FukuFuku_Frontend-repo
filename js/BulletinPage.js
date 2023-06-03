// 모달 내부 댓글 작성
const modalCommentSubmit = document.querySelector("#modal_submitBtn");
const modalCommentText = document.querySelector("#modal_commentText");

const handleModalComment = () => {
  // 댓글 작성을 눌렀을 경우
  console.log(modalCommentText.value);
  const date = new Date();
  let formData = new FormData();
  // 던질 데이터 생성
  formData.append("boardNo", `${null}`);
  formData.append("nickname", `${null}`);
  formData.append("comment", `${modalCommentText.value}`);
  formData.append("commentDate", `${date}`);

  fetch("", {
    method: "POST",
    cache: "no-cache",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

modalCommentSubmit.addEventListener("click", handleModalComment);
