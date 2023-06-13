export default class {
  constructor() {
    document.title = "SignIn";
  }
  async getHtml() {
    return `
    <main class="text-center mt-5 w-100, h-100">
      <h1 class="h1 mb-5 fw-normal text-primary">SignUp</h1>

      <div class="w-50 m-auto">

        <div class="form-floating mb-4">
          <input type="text" class="form-control" id="InputId" placeholder="ID">
          <label for="floatingInput">ID</label>
        </div>
        <div class="form-floating mb-4">
          <input type="password" class="form-control" id="InputPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>

        <button class="w-100 btn btn-lg btn-primary" id="LoginBtn">Sign Up</button>
        <a herf="/" style="display: none;" data-link id="mainLink"></a>

      </div>
  
    </main>
        `;
  }
}
