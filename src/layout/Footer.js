
const Footer = () => {
  return (
    <footer className="navbar navbar-expand-xl navbar-light bg-danger mt-5">
      <div className="container-fluid px-5 text-white">
        <p className="pt-3">
        © {new Date().getFullYear()} Copyright Text
        </p>

        <a className="nav-link" aria-current="page" href="#">
          Movie App
        </a>
      </div>
    </footer>
  );
};

export default Footer;
