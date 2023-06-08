// comments를 먼저 생성하여 modals안에 집어넣은 후 export 합니다.

const nickname = "닉네임";
const comment = "우와! 정말 맛집이네요!!";
const commentDate = "2023-06-01 16:28";

const boardNo = 0;
const boardId = `board${boardNo}`;
const modalId = `modal${boardNo}`;
const title = "미야케 우동";
const content = "미야케 우동 가격도 저렴하고 맛있어요";
const fileName = "미야케 우동1";
const imgUrl = `./static/image/${fileName}.jpg`;
const writer = "규민";
const writeDate = "2023.06.02 00:09";
const hit = 48;

let comments = "";

let modals = "";

modals += `<div class="modal" id="${modalId}">  <!-- modal 아이디 지정 -->
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">${title}</h1>
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
                                <div id="${boardId}block_comment" class="col-11">   <!-- 모달의 코멘트 블록 아이디 지정 -->
                                    <span class="mt-5 fs-4">Comment</span>
                                    
                                    ${comments}
                                    
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
                                        <textarea id="modal_commentText" class="form-control"></textarea>
                                        <button id="modal_submitBtn" class="btn btn-primary">작성</button>
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

export default modals;
