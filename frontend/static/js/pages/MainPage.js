export default class {
  constructor() {
    document.title = "MainPage";
  }
  async getHtml() {
    return `
<div class="container-fluid p-0 position-relative">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="./static/image/japan1.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="./static/image/japan2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="./static/image/japan3.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
    </div>

    <div id="opacity-bg" class="flex h-75 bg-dark bg-opacity-75 top-0"style="margin-top: 10vh; position: absolute; bottom: 100px; left: 10%; width: 80%; display: flex;">
    
        <div class="w-100 justify-content-center flex">
            <div class="row mt-5 pb-5">
                <div class="col-4"></div>
                <div class="text-white justify-content-center col-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicingelit. Sed aperiam
                    neque non fugiat voluptatibus doloremque nam nemo ut veniam. Odit doloremque id totam molestiae nisi
                    optio. Dolore
                    tempora voluptate aperiam?
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-5"></div>
                <a id="mainBtn" href="/bulletin" class="col-2 btn btn-primary justify-content-center" data-link>현지 추천 장소</a>
            </div>
        </div>
    </div>
</div>
<button class="btn btn-warning float-end" id="memberCBtn" data-bs-toggle="modal" data-bs-target="#Modal">NEW</button>
<!----------------------- 조원소개 ----------------------->
<div class="d-flex justify-content-center ">
    <div class="bg-warning float-end " style="width:80px"></div>

    <div class="container-fluid row mx-5 px-5" id="member_post">
        <div class="flip-outer">
            <div class="flip-inner">
                <img src="./static/image/미야케 우동2.jpg" class="front" />
                <div class="back">
                    <h4>조장 강주원</h4>
                </div>
            </div>
        </div>
        <div class="flip-outer">
            <div class="flip-inner">
                <img src="./static/image/미야케 우동2.jpg" class="front" />
                <div class="back">
                    <h4>조원 석진석</h4>
                </div>
            </div>
        </div>
        <div class="flip-outer">
            <div class="flip-inner">
                <img src="./static/image/미야케 우동2.jpg" class="front" />
                <div class="back">
                    <h4>조원 박정민</h4>
                </div>
            </div>
        </div>
        <div class="flip-outer">
            <div class="flip-inner">
                <img src="./static/image/미야케 우동2.jpg" class="front" />
                <div class="back">
                    <h4>조원 김규민</h4>
                </div>
            </div>
        </div>
        <div class="flip-outer">
            <div class="flip-inner">
                <img src="./static/image/미야케 우동2.jpg" class="front" />
                <div class="back">
                    <h4>조원 김동준</h4>
                </div>
            </div>
        </div>
    </div>
</div>

<!--------------------------------------조원 생성 모달창-------------------------------------->
<div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-l">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- 모달 내용물 -->
        <div class="modal-body">
          <div class="row">
            <div class="col-12 position-relative">

              <!-- 이미지 창 -->
              <div class="d-flex align-items-center">
                <div class="mb-3">
                  <label for="formFile" class="form-label ms-2">이미지</label>
                  <input class="form-control" type="file" id="uploadImg" accept="image/*">
                </div>
              </div>
              <!--------------->

            </div>
          </div>
          <!-- 작성 내용 -->
          <div>
              <textarea class="form-control mt-3" placeholder="조원명" id="uploadMemberName" style="height: 100px" resize="none"></textarea>
          </div>
          <div class="form-floating">
              <textarea class="form-control mt-3" placeholder="Leave a comment here" id="uploadMemberContent" style="height: 100px" resize="none"></textarea>
          </div>
        </div>
        <!---------------->
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" id="uploadBtn" class="btn btn-primary">upload</button>
        </div>
      </div>
    </div>
</div>

<div id="block_modal">
    
</div>

<!-- Modal _ 게시글 Read 기능 -->
<div id="memberRead_block">

</div>
<!-- Modal _ 게시글 Modify 기능 -->
<div id="memberEdit_block">

</div>
`;
  }
}
