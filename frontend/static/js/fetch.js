module.exports = (token, nickname,isAdmin,userId) => (method, body) => {
  hearders.nickname = "asdasd"
  hearders.isAdmin = true
  const _headers = hearders
  fetch(path, {
    method: method,
    headers: hearders,
    body:body
  })
}

const response = fetch(`${PATH}/board/myPosts`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    token: token,
    nickname: username,
  },
});