import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const Root = () => {
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven</title>
        <meta
          name="description"
          content="Explore the latest gadgets and accessories."
        />
      </Helmet>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Root;
