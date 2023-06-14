export default class {
  constructor() {
    document.title = "Drawal";
  }

  async getHtml() {
    const username = sessionStorage.getItem('nickname');
    
    return `<div class="container">
      <div class="row ">
        <div class="col-2 mt-5 mb-1 fs-5 fw-bolder text-center">
          회원 탈퇴
        </div>
      </div>

      <!-- CONTENT  -->
      <div class="row" style="height: 500px;">
        <!-- SIDE_BAR -->
        <div class="col-2 bd-sidebar border-top border-bottom border-primary me-5 fw-semibold text-center" >
          <ul class="nav pt-3 flex-column">
            <li class="nav-item"><a class="nav-link active link-dark" href="/myUserData" data-link>회원정보 수정</a></li>
            <li class="nav-item"><a class="nav-link active link-dark" href="/myWriteList" data-link>쓴 글 목록</a></li>
            <li class="nav-item"><a class="nav-link active link-dark" href="/userWithdrawal" data-link>회원 탈퇴</a></li>
          </ul>
        </div>
        
        <!-- MY_WRITE_LISST -->
        <div class="col border-top border-bottom border-primary">
            <div class="mb-4 pt-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">ID</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value='${username}'>
              </div>
            </div>
            <!-- <div class="mb-4 border-top border-gray">
            </div> -->
            <div class="mb-4 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword">
              </div>
            </div>
            <!-- 탈퇴_btn -->
            <button id="destroyBtn" class="btn btn-outline-primary float-end mb-3">탈퇴하기</button>
        </div>
      </div>
    </div>`;
  }
}
