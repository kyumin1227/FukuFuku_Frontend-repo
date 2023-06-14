export default class {
  constructor() {
    document.title = "Bulletin";
  }
  async getHtml() {
    return `
    <!-- TITLE -->
    <div class="container">
      <div class="row ">
        <div class="col-2 mt-5 mb-1 fs-5 fw-bolder text-center">
          쓴 글 목록
        </div>
      </div>

      <!-- CONTENT  -->
      <div class="row " style="height: 500px;">
        <!-- SIDE_BAR -->
        <div class="col-2 bd-sidebar border-top border-bottom border-primary me-5 fw-semibold text-center" style="height: 500px;">
          <ul class="nav pt-3 flex-column">
            <li class="nav-item"><a class="nav-link active link-dark" href="/myUserData" data-link>회원정보 수정</a></li>
            <li class="nav-item"><a class="nav-link active link-dark" href="/myWriteList" data-link>쓴 글 목록</a></li>
            <li class="nav-item"><a class="nav-link active link-dark" href="/userWithdrawal" data-link>회원 탈퇴</a></li>
          </ul>
        </div>
        
        <!-- MY_WRITE_LIST -->
        <div class="col border-top border-bottom border-primary" >
            <div id="board-list" class="container">

                <!-- 게시글 블록입니다. -->

                <div id="block_post" class="row g-5">
                    <!-- 게시글 코드를 Bulletin.js 파일로부터 받아옴 (index.js에서 생성하는 걸로 변경) -->
                </div>
            </div>

            <div id="block_modal">
                <!-- modal을 위한 코드를 BulletinModal.js 파일로부터 받아옴 (index.js에서 생성하는 걸로 변경) -->
            </div>
        </div>
    </div>
    `;
  }
}
