export default class {
  constructor() {
    document.title = "MainPage";
  }
  async getHtml() {
    return `<div class="container-fluid p-0 position-relative">
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

    <div id="opacity-bg" class="flex h-75 bg-dark bg-opacity-75 top-0"
        style="margin-top: 10vh; position: absolute; bottom: 100px; left: 10%; width: 80%; display: flex;">
        <div class="w-100 justify-content-center flex">
            <div class="row mt-5 pb-5">
                <div class="col-4"></div>
                <div class="text-white justify-content-center col-4">Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Sed aperiam
                    neque non fugiat voluptatibus doloremque nam nemo ut veniam. Odit doloremque id totam molestiae nisi
                    optio. Dolore
                    tempora voluptate aperiam?</div>
            </div>
            <div class="row mt-5">
                <div class="col-5"></div>
                <a id="mainBtn" href="/bulletin" class="col-2 btn btn-primary justify-content-center" data-link>현지 추천 장소</a>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="wrap-token">
            <div class="flip-outer">
                <div class="flip-inner">
                    <img src="./static/image/미야케 우동2.jpg" class="front" />
                    <div class="back">
                        <h4>조장 강주원</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap-token">
            <div class="flip-outer">
                <div class="flip-inner">
                    <img src="./static/image/미야케 우동2.jpg" class="front" />
                    <div class="back">
                        <h4>조원 석진석</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap-token">
            <div class="flip-outer">
                <div class="flip-inner">
                    <img src="./static/image/미야케 우동2.jpg" class="front" />
                    <div class="back">
                        <h4>조원 박정민</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap-token">
            <div class="flip-outer">
                <div class="flip-inner">
                    <img src="./static/image/미야케 우동2.jpg" class="front" />
                    <div class="back">
                        <h4>조원 김규민</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap-token">
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
</div>`;
  }
}
