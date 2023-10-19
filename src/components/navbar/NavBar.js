import './NavBar.css';

const NavBar = (props) => {
  return (
    <div>
      <nav className="nav">
        <div className="logo">Logo</div>
        <div className="buttons">
          <button
            type="button"
            className="button login"
            onClick={props.openLoginModal}
          >
            Login
          </button>
          <button type="button" className="button signup">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
