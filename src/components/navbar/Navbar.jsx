import "./navbar.scss";

export default function Navbar() {
  return (
    <div classNameName="container-fluid p-0 navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="https://static.thenounproject.com/png/3424882-200.png" alt="" />
        <a className="navbar-brand d-inline" href="#">
          Champions Guess
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item p-2">
              <img src="https://www.freeiconspng.com/thumbs/leaderboard-icon/leaderboard-icon-5.png" alt="" />
              <a className="nav-link d-inline" href="#">
                Leader Board
              </a>
            </li>
            <li className="nav-item p-2">
              <img src="https://cdn0.iconfinder.com/data/icons/soccer-outline/64/group_stage-match-winner-competition-round-512.png" alt="" />
              <a className="nav-link d-inline" href="#">
                Predictions
              </a>
            </li>
            <li className="nav-item p-2">
              <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/rules-2851967-2375553.png" alt="" />
              <a className="nav-link d-inline" href="#">
                Rules
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
}
