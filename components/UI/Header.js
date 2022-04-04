

const Header = (props) => {
    return (
      <header>
         <div className="header__logo">Navi</div>
          <div className="header__nav">
            <nav>
              <ul>
                <li id="header__nav-about"><a>About Me/Contact</a></li>
                <li id="header__nav-portfolio"><a>Portfolio</a></li>
                <li id="header__nav-skills"><a>Skills</a></li>
                <li id="header__nav-jobs"><a>Employment</a></li>
              </ul>
            </nav>
          </div>
      </header>
    );
  };
  
  export default Header;