// 게시물 생성
// 게시물 수 만큼 생성하기 위해서는 수정 필요

let posts = "";

const boardNo = 0;
const boardId = `board${boardNo}`;
const modalId = `modal${boardNo}`;
const title = "미야케 우동";
const content = "미야케 우동 가격도 저렴하고 맛있어요";
const fileName = "미야케 우동1";
const imgUrl = `./static/image/${fileName}.jpg`;
const writer = "규민";

for (let i = 0; i < 1; i++) {
  posts += `<div class="col-md-4" id = "${boardId}">    <!-- 게시판 아이디 지정 -->
                    <a href="/" class="text-decoration-none text-dark" data-bs-toggle="modal"
                        data-bs-target="#${modalId}">   <!-- modal 아이디로 타켓 지정 -->
                        <div class="card" style="height: 470px">
                            <div style="height: 300px;">
                                <img src="${imgUrl}" height="300px" class="img-fluid">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${title}</h5>
                                <p class="card-text">${content}</p>
                                <div class="container-fluid row mt-3 px-0 box-wrap ms-0">
                                    <div class="col-3 px-0"><a href="#" class="btn btn-primary container-fluid">Edit</a>
                                    </div>
                                    <span class="col-9 text-end px-0 align-text-top">${writer}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>`;
}

export default posts;
