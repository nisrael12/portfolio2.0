import Image from "next/image";

const Jobs = (props) => {
    return (
        <div className="jobs">
            <div className="jobs__container">
              <div className="jobs__title">
                <div className="jobs__text">
                  <h2>Employment</h2>
                </div>
              </div>
              <h3 className="jobs__summary">
                Great experience with leading companies around the world.
              </h3>
              <div className="jobs__gallery">
                <div className="jobs__grid">
                  <div className="jobs__grid-item">
                    <div className="jobs__grid-item-wrapper">
                      <div className="jobs__grid-logo">
                        <Image
                        priority
                          src="https://www.diedrichrpm.com/wp-content/uploads/2018/10/AE-Logo.svg"
                          alt="ae"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <div className="jobs__grid-item-text">
                        <div className="jobs__grid-item-info">
                          <span>2021-Now</span>
                          <h4>UI Engineer</h4>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quam, repellendus aut eaque ratione a, non vero
                          vitae neque nam cumque ea? Eligendi aspernatur non
                          quod culpa, veritatis debitis magnam nostrum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jobs__grid-item">
                    <div className="jobs__grid-item-wrapper">
                      <div className="jobs__grid-logo">
                        <Image
                        priority
                          src="https://www.brillient.net/wp-content/uploads/cropped-Brillient_Logo_Rev2016_300dpi.jpg"
                          className="brillient"
                          alt="brillient"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <div className="jobs__grid-item-text">
                        <div className="jobs__grid-item-info">
                          <span>2020-2021</span>
                          <h4>Email Marketing Intern</h4>
                        </div>
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
  
  export default Jobs;