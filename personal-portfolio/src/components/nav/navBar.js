import './navBar.scss';


const NavBar = (props) => {


  const {showMenu,setShowMenu} = props

   
  return (
    <section className="navBar">
      {/** --- Mobile Version --- */}
      <div className="button-bar">
        <button
          onClick={() => {
            setShowMenu((prevState) => !prevState);
          }}
        >
          Menu
        </button>
      </div>

      {showMenu && (
        <div className="drop-menu">
          <ul>
            <li>
              <a
                href="#"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutMe"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      {/** --- Desktop 1280px Version --- */}

      <div className="desktop-menu">
        <p className="greeting">Hello ! Welcome to my webpage !</p>

        <ul>
          <li>
            <a
              href="#"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#aboutMe"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#project"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavBar;
