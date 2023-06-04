// 모달 내부 댓글 작성
const modalCommentSubmit = document.querySelector("#modal_submitBtn");
const modalCommentText = document.querySelector("#modal_commentText");

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

  fetch("http://localhost:4000/test", {
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

modalCommentSubmit.addEventListener("click", handleModalComment);
