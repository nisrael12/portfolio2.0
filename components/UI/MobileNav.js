const MobileNav = (props) => {
  return (
    <div id="mobile-nav">
      <div className="mobile-nav__nav">
        <ul>
          <li id="mobile-nav__nav-about">
          <a>
            <div className="mobile-nav__icon-border">
            <i className="fa-solid fa-user-tie"/>
            </div>
           About Me</a>
          </li>
          <li id="mobile-nav__nav-portfolio">
          <a>
            <div className="mobile-nav__icon-border">
              <i className="fa-solid fa-book-open"></i>
            </div>
            Portfolio</a>
          </li>
          <li id="mobile-nav__nav-skills">
          <a>
            <div className="mobile-nav__icon-border">
              <i className="fa-solid fa-screwdriver-wrench"></i>
            </div>
            Skills</a>
          </li>
          <li id="mobile-nav__nav-jobs">
          <a>
            <div className="mobile-nav__icon-border">
            <i className="fa-solid fa-laptop-code" />
              
            </div>

            Jobs</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
