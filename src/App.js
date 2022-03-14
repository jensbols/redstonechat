import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import VideoSection from "./components/VideoSection";


function App() {
  return (
    <div className="static bg-blackstone">
      <NavBar />
      <HeroSection />
      <VideoSection />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
