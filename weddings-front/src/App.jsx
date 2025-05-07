import Connect from "./components/Connect";
import Footer from "./components/Footer";
import "./App.css";
import NavBar from "./components/NavBar";
// import HeroPage from "./components/HeroPage";
import InfoSection from "./components/InfoSection";
import Slider from "./components/Slider";
// import WeddingPlanner from "./components/WeddingPlanner";
import WeddingServices from "./components/WeddingServices";
// import CakeCard from "./components/cakeCard";
import Accordion from "./components/Accordion";
import Youtube from "./components/Youtube";
import VendorSection from "./components/VendorSection";
import HeroPage from "./components/secondComponent/HeroPage";
import DashboardCard from "./components/secondComponent/DashBoardCard";
import VenueVendorCards from "./components/secondComponent/VenueVendorCards";
function App() {
  return (
    <div className="app">
      {/* <NavBar />
      <HeroPage />
      <InfoSection />
      <Slider />
      <VendorSection />
      <WeddingServices />

      <Accordion />
      <Youtube />
      <Connect />
      <Footer /> */}
      <VenueVendorCards />
    </div>
  );
}

export default App;
