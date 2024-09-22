import React from "react";
import "./App.css";
import {
  Navbar,
  Hero,
  GettingStarted,
  UseCases,
  Benefits,
  Testimonials,
  ReadyToGrow,
  SocialMediaLinks,
  Footer,
} from "./components";
import { ThemeToggle } from "./components/Dashboard";
function App() {
  return (
    <div className="dark:bg-primary bg-white space-y-20 p-12">
      <Navbar />
      <Hero />
      <GettingStarted />
      <UseCases />
      <Benefits />
      <Testimonials />
      <ReadyToGrow />
      <SocialMediaLinks />
      <Footer />
    </div>
  );
}

export default App;
