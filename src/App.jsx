import { lazy, Suspense } from "react";
import { Navbar, Home, ScrollToTop } from "./components";

const Team = lazy(() => import("./components/Team/Team"));
const About = lazy(() => import("./components/About/About"));
const Showcase = lazy(() => import("./components/Showcase/Showcase"));
const Faq = lazy(() => import("./components/Faq/Faq"));
const Footer = lazy(() => import("./components/Footer/Footer"));

const fallback = () => <p>Loading....</p>;

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <ScrollToTop />
      <Suspense fallback={fallback()}>
        <About />
        <Team />
        <Showcase />
        <Faq />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
