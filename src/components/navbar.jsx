const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#2">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#1">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#1">
                Enterprise
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#1">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#1">
                Pricing
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-primary" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
