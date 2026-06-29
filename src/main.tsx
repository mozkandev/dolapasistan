import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Faq } from "@/components/landing/Faq";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";
import { Security } from "@/components/landing/Security";
import { Simulator } from "@/components/landing/Simulator";
import { VideoDemo } from "@/components/landing/VideoDemo";
import "./styles.css";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip" style={{ background: "#0b1017" }}>
      <Header />
      <main>
        <Hero />
        <Simulator />
        <Features />
        <Security />
        <HowItWorks />
        <VideoDemo />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
