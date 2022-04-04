import Image from "next/image";

const Portfolio = (props) => {
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__title">
          <div className="portfolio__text">
            <h2>Portfolio</h2>
          </div>
        </div>
        <h3 className="portfolio__summary">
          Some of my best selected work here, surely it will impress you.
        </h3>
        <div className="portfolio__gallery">
          <div className="portfolio__gallery-filter">
            <div
              className="portfolio__gallery-filter-item"
              id="portfolio__gallery-filter"
            >
              <button className="btn active">All</button>
            </div>
            <div
              className="portfolio__gallery-filter-item"
              id="portfolio__gallery-filter"
            >
              <button className="btn">Web</button>
            </div>
            <div
              className="portfolio__gallery-filter-item"
              id="portfolio__gallery-filter"
            >
              <button className="btn">Email</button>
            </div>
            <div
              className="portfolio__gallery-filter-item"
              id="portfolio__gallery-filter"
            >
              <button className="btn">UI/UX</button>
            </div>
          </div>
          <div className="portfolio__grid">
            <div className="portfolio__grid-item email" id="item1">
              <div className="portfolio__grid-item-img">
                <Image
                  priority
                  src="/images/item1.jpeg"
                  alt="Austin\'s Deli"
                  layout="responsive"
                  width={384}
                  height={384}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="portfolio__grid-item email" id="item2">
              <div className="portfolio__grid-item-img">
                <Image
                  priority
                  src="https://images.pexels.com/photos/5632365/pexels-photo-5632365.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Face Love"
                  layout="responsive"
                  width={384}
                  height={384}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="portfolio__grid-item ux">
              <div className="portfolio__grid-item-img">
                <Image
                  priority
                  src="https://images.pexels.com/photos/3766180/pexels-photo-3766180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Bottle Goals"
                  layout="responsive"
                  width={384}
                  height={384}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="portfolio__grid-item web">
              <div className="portfolio__grid-item-img">
                <Image
                  priority
                  src="https://images.pexels.com/photos/10967988/pexels-photo-10967988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Dry Dry"
                  layout="responsive"
                  width={384}
                  height={384}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="portfolio__grid-item web">
              <div className="portfolio__grid-item-img">
                <Image
                  priority
                  src="https://images.pexels.com/photos/10863293/pexels-photo-10863293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Winez"
                  layout="responsive"
                  width={384}
                  height={384}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="portfolio__grid-item ux">
              <div className="portfolio__grid-item-img">
                <Image
                  priority
                  src="https://images.pexels.com/photos/10895939/pexels-photo-10895939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Sandy\'s Pie"
                  layout="responsive"
                  width={384}
                  height={384}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
