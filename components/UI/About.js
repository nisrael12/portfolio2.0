import Image from "next/image";

const About = (props) => {
    return (
        <div className="about">
        <div className="about__container">
          <div className="about__img">
            <Image
              src="/images/about_img.jpeg"
              alt="Navi"
              layout="responsive"
              width={500}
              height={800}
              objectFit="cover"
            />
          </div>
          <div className="about__info">
            <div className="about__greeting">
              <div className="about__greeting-text">
                <h2>Hello</h2>
              </div>
            </div>
            <h4>I am Navi, UI/UX designer from Dallas, Texas USA.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              repellendus aut eaque ratione a, non vero vitae neque nam
              cumque ea? Eligendi aspernatur non quod culpa, veritatis
              debitis magnam nostrum.
            </p>
            <div className="about__content">
              <div className="about__content-question">
                <span>Name:</span>
                <span>Email:</span>
                <span>Phone:</span>
                <span>Nationality:</span>
                <span>City:</span>
                <span>State:</span>
              </div>
              <div className="about__content-answers">
                <span>Navi Israel</span>
                <span>
                  <a href="#">dev@naviisrael.com</a>
                </span>
                <span>
                  <a href="#">555-555-5555</a>
                </span>
                <span>American</span>
                <span>Fort Worth</span>
                <span>Texas</span>
              </div>
            </div>
            <div className="about__btn">
              <a href="#" download="NI Resume">
                <button className="about__btn-text">
                  <i className="fa fa-download" />
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;