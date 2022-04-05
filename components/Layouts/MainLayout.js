import Footer from "../UI/Footer";
import Header from "../UI/Header";
import MobileNav from "../UI/MobileNav";

const MainLayout = (props) => {
  return (
    <>
      <section className="wrapper" id="wrapper">
        <Header />
        <MobileNav />
        {props.children}
        <Footer />
      </section>
    </>
  );
};

export default MainLayout;
