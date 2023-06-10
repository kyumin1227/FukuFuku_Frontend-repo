// 게시판 페이지 설명
// 게시판 id = board(index)
// 모달 id = modal(index)
// 코멘트 블록 id = (index)block_comment

export default class {
  constructor() {
    document.title = "Bulletin";
  }
  async getHtml() {
    return `
            <!-- Bulletin.js 파일 내부에 들어갈 html 코드 편집 파일입니다. -->
<!-- Bulletin.js의 html 코드와 항상 동일하게 유지할 것 -->

<div id="block_content">
    <!-- 회원이 아닐 경우 New 버튼 삭제 -->
    <!-- 해당 글의 작성자일 경우에는 Edit 버튼 표시 -->
    <!-- 캐러셀이 정상적으로 작동하기 위해서는 해당 캐러셀의 id와 밑의 버튼들 data-bs-target의 id들 변경 -->
    <section class="py-5 text-center container">
        <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-bold">현지 おすすめ 장소</h1>
            </div>
        </div>
    </section>

    <div class="album pb-5 bg-light">
        <div class="container d-flex flex-row-reverse py-3">
            <div id="newBoard"><a class="btn btn-warning col-0.5 px-4" href="#" data-bs-toggle="modal"
                    data-bs-target="#Write_Modal">New</a></div>
        </div>
        <div id="board-list" class="container">

            <!-- 게시글 블록입니다. -->

            <div class="row g-5 block_post">
                <!-- 게시글 코드를 Bulletin.js 파일로부터 받아옴 (index.js에서 생성하는 걸로 변경) -->
            </div>
        </div>
    </div>
</div>




<!-- modal -->

<div id="block_modal">
    <!-- modal을 위한 코드를 BulletinModal.js 파일로부터 받아옴 (index.js에서 생성하는 걸로 변경) -->
</div>


<!-- Modal _ 게시글 작성-->
<div class="modal fade" id="Write_Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5 border-bottom" id="exampleModalLabel"><input type="text"
                        class="form-control" style="border:0" id="" placeholder="title"></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12 position-relative">
                        <!-- 이미지 창 -->

                        <div class="d-flex align-items-center">
                            <form action="" method="post" enctype="multipart/form-data">
                                <div class="mb-3">
                                    <label for="formFile" class="form-label ms-2">이미지 선택</label>
                                    <input class="form-control" name="filename[]" type="file" id="formFile"
                                        multiple="multiple" accept="image/*">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- 등록 파일 출력 -->
                <div class="border border-gray w-50 overflow-scroll" style="height: 100px;">
                    <ul id="imageList">
                        
                    </ul>
                </div>
                <!-- 작성 내용 -->
                <div>
                    <div class="border-bottom border-secondary ms-1 mt-5">작성자 : Dorimu</div>
                </div>
                <div class="form-floating">
                    <textarea class="form-control mt-3" placeholder="Leave a comment here" id="floatingTextarea2"
                        style="height: 100px" resize="none"></textarea>

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">upload</button>
            </div>
        </div>
    </div>
</div>
        `;
  }
}
