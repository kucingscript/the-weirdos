import {
  Navbar,
  Home,
  About,
  Team,
  Faq,
  Footer,
  ScrollToTop,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Team />
      <Faq />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
