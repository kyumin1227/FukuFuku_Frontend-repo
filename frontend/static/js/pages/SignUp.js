export default class {
  constructor() {
    document.title = "SignUp";
  }
  async getHtml() {
    return `
    <main class="text-center mt-5 w-100, h-100">
    <h1 class="h1 mb-5 fw-normal text-primary">SignUp</h1>

    <div class="w-50 m-auto">

      <div class="row">
        <div class="col-10">
          <div class="form-floating mb-4">
            <input type="text" class="form-control" id="InputId" placeholder="ID">
            <label for="floatingInput">ID</label>
          </div>
        </div>
        <div class="col">
          <button class="btn btn-outline-primary" id="idConfirm" style="height: 55px;">중복확인</button>
        </div>
      </div>
      <div class="form-floating mb-4">
        <input type="text" class="form-control" id="InputNickname" placeholder="nickname" maxlength="10" required>
        <label for="floatingPassword">nickname</label>
        <div id="alert" class="float-start ms-1 mb-2" >
      </div>
      
      </div>
      <div class="form-floating mb-4">
        <input type="password" class="form-control" id="InputPassword" placeholder="Password" required>
        <label for="floatingPassword">Password</label>
      </div>
      <div class="form-floating mb-4">
        <input type="password" class="form-control" id="InputConfirmPassword" placeholder="Password" required>
        <label for="floatingPassword">Password confirm</label>
      </div>
  
      <button class="w-100 btn btn-lg btn-primary" id="addUser" type="submit">Sign Up</button>
      <a href="/signin" style="display: none;" data-link id="LoginLink"></a>
    </div>
    

  </main>
        `;
  }
}
