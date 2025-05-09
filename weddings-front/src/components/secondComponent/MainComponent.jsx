import React from "react";
import NavBar from "./NavBar";
import HeroPage from "./HeroPage";
import DashboardCard from "./DashBoardCard";
import VenueVendorCards from "./VenueVendorCards";
import BudgetSection from "./BudgetSection";
import UpcomingTasks from "./UpcomingTasks";
import PromoCards from "./PromoCards";
import Connect from "../Connect";
import Footer from "../Footer";
const MainComponent = () => {
  return (
    <>
      <NavBar />
      <HeroPage />
      <DashboardCard />
      <VenueVendorCards />
      <BudgetSection />
      <UpcomingTasks />
      <PromoCards />
      <Connect />
      <Footer />
    </>
  );
};

export default MainComponent;
