import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/HomePage/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Loading from "../components/Loading/Loading";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (isFirstLoad && location.pathname === "/") {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsFirstLoad(false);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [location, isFirstLoad]);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      {isLoading && <Loading />}
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
