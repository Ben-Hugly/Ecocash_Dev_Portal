import { useEffect } from "react";
import React from "react";
import "./App.css";
import { SocialMediaLinks, Footer } from "./components";
import {
  Navbar,
  Hero,
  GettingStarted,
  UseCases,
  Benefits,
  Testimonials,
  ReadyToGrow,
} from "./components/Homepage";
import { ThemeProvider } from "./context/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="dark:bg-componentsBackgroundDark bg-componentsBackgroundLight space-y-20 p-12">
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
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
