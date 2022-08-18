const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#4">
          Start bootstrap
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#3">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#2">
                About
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#1"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#3">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#4">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#5">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <button class="btn btn-outline-dark" type="submit">
          <i class="fa-solid fa-cart-shopping"></i>
            Cart
            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
