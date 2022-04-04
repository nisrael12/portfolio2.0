import Image from "next/image";

const Skills = (props) => {
    return (
        <div className="skills">
        <div className="skills__container">
          <div className="skills__title">
            <div className="skills__text">
              <h2>Skills</h2>
            </div>
          </div>
          <h3 className="skills__summary">
            I have good skill in tools, which are helping me to creat
            amazing stuff.
          </h3>
          <div className="skills__gallery">
            <div className="skills__grid">
              <div className="skills__grid-item">
                <div className="skills__grid-item-wrapper">
                  <div className="skills__grid-icon">
                    <i className="fas fa-mail-bulk" />
                  </div>
                  <div className="skills__grid-item-text">
                    <h4>Email Campaign</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Quam, repellendus aut eaque ratione a, non vero
                      vitae neque nam cumque ea? Eligendi aspernatur non
                      quod culpa, veritatis debitis magnam nostrum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="skills__grid-item">
                <div className="skills__grid-item-wrapper">
                  <div className="skills__grid-icon">
                    <i className="fab fa-react" />
                  </div>
                  <div className="skills__grid-item-text">
                    <h4>React Development</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Quam, repellendus aut eaque ratione a, non vero
                      vitae neque nam cumque ea? Eligendi aspernatur non
                      quod culpa, veritatis debitis magnam nostrum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="skills__grid-item">
                <div className="skills__grid-item-wrapper">
                  <div className="skills__grid-icon">
                    <i className="fas fa-drafting-compass" />
                  </div>
                  <div className="skills__grid-item-text">
                    <h4>UI Development</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Quam, repellendus aut eaque ratione a, non vero
                      vitae neque nam cumque ea? Eligendi aspernatur non
                      quod culpa, veritatis debitis magnam nostrum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="skills__grid-item">
                <div className="skills__grid-item-wrapper">
                  <div className="skills__grid-icon">
                    <i className="fas fa-layer-group" />
                  </div>
                  <div className="skills__grid-item-text">
                    <h4>Microservice</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Quam, repellendus aut eaque ratione a, non vero
                      vitae neque nam cumque ea? Eligendi aspernatur non
                      quod culpa, veritatis debitis magnam nostrum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="skills__grid-item">
                <div className="skills__grid-item-wrapper">
                  <div className="skills__grid-icon">
                    <i className="fas fa-shopping-basket" />
                  </div>
                  <div className="skills__grid-item-text">
                    <h4>E-Commerce Development</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Quam, repellendus aut eaque ratione a, non vero
                      vitae neque nam cumque ea? Eligendi aspernatur non
                      quod culpa, veritatis debitis magnam nostrum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;