

export default class {
    constructor() {
      document.title = "MyUserData";
    }
    async getHtml() {
      const userId = sessionStorage.getItem('userId');
      const userName = sessionStorage.getItem('nickname');

      return `
              <!-- TITLE -->
      <div class="container">
        <div class="row ">
          <div class="col-2 mt-5 mb-1 fs-5 fw-bolder text-center">
            회원정보 수정
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
          
          <!-- USER_DATA -->
          <div class="col border-top border-bottom border-primary">
          <div class="mb-4 row mt-4">
          <label for="inputPassword" class="col-sm-2 col-form-label">ID</label>
          <div class="col-sm-10">
            <div class="row">
              <div class="col">
                <input type="name" class="form-control" id="inputId" placeholder=${userId}>
              </div>
              <!-- 필요 여부에 따라 변동 -->
              <div class="col-sm-4">
                <button type="button" id="idChkBtn" class="btn btn-primary">Confirm</button>
              </div>
            </div>
          </div>
          </div>


  
            <!-- DATA 전달 -->
              <div class="mb-4 row">
                <div class="mb-4 pt-3 row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">Nickname</label>
                  <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value=${userName}>
                  </div>
                </div>
              </div>
              <div class="mb-4 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword">
                </div>
              </div>
              
              <!-- MODIFY_BTN -->
              <div>
                <button type="button" id="modifyBtn" class="btn btn-outline-primary float-end me-4">Modify</button>
              </div>
  
          </div>
  
        </div>
      </div>
          `;
    }

  }