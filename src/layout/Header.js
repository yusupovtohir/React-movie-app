const Header = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-light bg-danger">
      <div className="container-fluid px-5 ">
        <a className="navbar-brand text-white fw-bold fs-4" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarBasic"
          aria-controls="navbarBasic"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse hide flex-grow-0" id="navbarBasic">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <a className="nav-link text-white text-center text-md-end fw-bolder fs-6" aria-current="page" href="#">
                Movie
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
