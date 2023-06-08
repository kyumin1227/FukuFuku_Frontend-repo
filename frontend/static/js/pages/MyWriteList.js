export default class {
  constructor() {
    document.title = "Bulletin";
  }
  async getHtml() {
    return `<!-- TITLE -->
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
          <div class="album py-3 overflow-auto" style="height: 500px;">
            <div class="container " >
            <div class="row g-5 justify-content-center">

              <!-- Data 1 -->
              <div class="col-md-5">
                <a href="/" class="text-decoration-none text-dark">
                  <div class="card">
                    <div id="carousel-1" class="carousel slide card-img-top" data-bs-ride="true" style="height: 300px;">
                      <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" class="active"
                          aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"
                          aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"
                          aria-label="Slide 3"></button>
                      </div>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="/image/미야케 우동1.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                          <img src="/image/미야케 우동2.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                          <img src="/image/미야케 우동3.jpg" class="d-block w-100" alt="...">
                        </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carousel-1"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carousel-1"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">미야케 우동</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                      <div class="container-fluid row mt-3 px-0 box-wrap ms-0">
                        <div class="col-3 px-0"><a href="#" class="btn btn-primary container-fluid">Edit</a></div>
                        <span class="col-9 text-end px-0 align-text-top ">by 규민</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            <!-- Data 2 -->
            <div class="col-md-5">
              <a href="/" class="text-decoration-none text-dark">
                <div class="card" style="height: 470px">
                  <div id="carousel-1" class="carousel slide card-img-top" data-bs-ride="true" style="height: 300px;">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="/image/미야케 우동1.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                          <img src="/image/미야케 우동2.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="/image/미야케 우동3.jpg" class="d-block w-100" alt="...">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-1" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-1" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">미야케 우동</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                      the card's content.</p>
                    <div class="container-fluid row mt-3 px-0 box-wrap ms-0">
                      <div class="col-3 px-0"></div>
                      <span class="col-9 text-end px-0 align-text-top ">by other</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- Data 3 -->
            <div class="col-md-5">
              <a href="/" class="text-decoration-none text-dark">
                <div class="card" style="height: 470px">
                  <div id="carousel-1" class="carousel slide card-img-top" data-bs-ride="true" style="height: 300px;">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="/image/미야케 우동1.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="/image/미야케 우동2.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="/image/미야케 우동3.jpg" class="d-block w-100" alt="...">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-1" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-1" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">미야케 우동</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <div class="container-fluid row mt-3 px-0 box-wrap ms-0">
                      <div class="col-3 px-0"><a href="#" class="btn btn-primary container-fluid">Edit</a></div>
                      <span class="col-9 text-end px-0 align-text-top ">by 규민</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- Data 4 -->
            <div class="col-md-5">
                <a href="/" class="text-decoration-none text-dark">
              <div class="card" style="height: 470px">
                <div id="carousel-1" class="carousel slide card-img-top" data-bs-ride="true" style="height: 300px;">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" class="active"
                      aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                      <div class="carousel-item active">
                          <img src="/image/미야케 우동1.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="/image/미야케 우동2.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="/image/미야케 우동3.jpg" class="d-block w-100" alt="...">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-1" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-1" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">미야케 우동</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                          the card's content.</p>
                      <div class="container-fluid row mt-3 px-0 box-wrap ms-0">
                          <div class="col-3 px-0"><a href="#" class="btn btn-primary container-fluid">Edit</a></div>
                          <span class="col-9 text-end px-0 align-text-top ">by 규민</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                    
              </div>
            </div>
          </div>

          <!-- 페이지 네이션 -->
          <!-- <div class="justify-content-center">
              <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav> 
          </div>-->
        </div>

      </div>
    </div>`;
  }
}
