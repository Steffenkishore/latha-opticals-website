import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Collections from "./sections/Collections";
import Contact from "./sections/Contact";
import CustomerReviews from "./sections/CustomerReviews";
import Hero from "./sections/Hero";
import OurServices from "./sections/OurServices";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />

        <Collections id="collection" />

        <OurServices id="services" />

        <About id="about" />

        <CustomerReviews />

        <Contact id="contact" />

        <Footer />
      </main>
    </>
  );
}

export default App;
