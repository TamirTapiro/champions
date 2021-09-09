import "./login.scss";

export default function Login() {
  return (
    <div className="container">
      <h1>Login</h1>
      <br />
      <div className="row">
        <div className="col-md-6 col-sm-10 login-wrapper ">
          <form action="POST">
            <div class="form-group">
              <br />
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <br />
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <br />
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            
          </form>
          <br />
        </div>
      </div>
    </div>
  );
}
