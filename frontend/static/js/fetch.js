module.exports = (token, nickname,isAdmin,userId) => (method, body) => {
  headers.nickname = "asdasd"
  headers.isAdmin = true
  const _headers = hearders
  fetch(path, {
    method: method,
    headers: headers,
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