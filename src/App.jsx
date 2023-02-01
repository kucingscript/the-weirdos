import {
  Navbar,
  Home,
  Team,
  About,
  Showcase,
  Faq,
  Footer,
  ScrollToTop,
} from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Team />
        <Showcase />
        <Faq />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
};

export default App;
