import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <div className="bg-blackstone">
      <NavBar />
      <HeroSection />
      <VideoSection />
      <Pricing />
    </div>
  );
}

export default App;
