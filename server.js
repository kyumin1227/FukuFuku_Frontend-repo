// server.js
// express server
// express 모듈 불러오기
const express = require("express");
const path = require("path");
const cors = require("cors");

// express 사용
const app = express();

const PORT = 3000;

// app.use(cors()); // 모든 도메인 허용

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("frontend", "index.html"));
});

// port 생성 서버 실행
app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running http://localhost:${PORT}`)
);
