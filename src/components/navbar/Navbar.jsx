import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="col-6">
            <h1>Champions Guess</h1>
            <img src="assets/cup.png" alt="" />
        </div>
        <div className="col-6 right">
            <span>Option</span>
            <span>Option</span>
            <span>Option</span>
        </div>
      </nav>
    </div>
  );
}
