import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/Layouts/MainLayout";
import About from "../components/UI/About";
import Hero from "../components/UI/Hero";
import Jobs from "../components/UI/Jobs";
import Portfolio from "../components/UI/Portfolio";
import Skills from "../components/UI/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio 2.0</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout>
        <div className="project-modal" id="project-modal" style={{display: 'none'}}>
          <div className="project-modal__close-container">
            <div
              className="project-modal__content-close"
              id="project-modal__content-close"
            >
              <div />
              {/* <i class="fas fa-times"></i> */}
            </div>
          </div>
          <div className="project-modal__container">
            <div className="project-modal__content">
              <h4>Project Name</h4>
              <h2>Type of Project</h2>
              <Image
                src="https://images.pexels.com/photos/892769/pexels-photo-892769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Project Image"
                className="project-modal__img"
                layout="fill"
              />
              <div className="project-modal__info-container">
                <div className="project-modal__overview">
                  <h3>Project overview</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste minima corrupti aspernatur cupiditate minus ducimus,
                    accusamus consequuntur soluta eligendi. Excepturi.
                  </p>
                  <div className="project-modal__btn">
                    <button>View Project</button>
                  </div>
                </div>
                <div className="project-modal__details">
                  <h3>Details</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste minima corrupti aspernatur cupiditate minus ducimus,
                    accusamus consequuntur soluta eligendi. Excepturi.
                  </p>
                  <div className=" project-modal__details-list">
                    <ul className="project-modal__details-list-form">
                      <li>Client:</li>
                      <li>E-mail:</li>
                      <li>Date of Completion:</li>
                      <li>Last update:</li>
                      <li>Website:</li>
                    </ul>
                    <ul className="project-modal__details-list-answers">
                      <li>John Dow</li>
                      <li>
                        <a href="mailto: abc@example.com">mail@example.com</a>
                      </li>
                      <li>3/11/2021</li>
                      <li>2/27/2022</li>
                      <li>
                        <a href="#">https://www.demolink.org</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Jobs />
      </MainLayout>
    </div>
  );
}
