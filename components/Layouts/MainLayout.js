import Footer from "../UI/Footer";
import Header from "../UI/Header";

const MainLayout = (props) => {
  return (
    <>
      <section className="wrapper" id="wrapper">
        <Header />
        {props.children}
        <Footer />
      </section>
    </>
  );
};

export default MainLayout;
