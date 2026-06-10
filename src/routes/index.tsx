import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Simulator } from "@/components/landing/Simulator";
import { Features } from "@/components/landing/Features";
import { Security } from "@/components/landing/Security";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dolap Asistan — Dolap'ta Satışlarınızı Otomatize Edin" },
      { name: "description", content: "Yapay zeka destekli Dolap otomasyonu. Akıllı gecikme algoritmalarıyla ban riski olmadan dükkanınızı 7/24 yönetin." },
      { property: "og:title", content: "Dolap Asistan — Dolap Otomasyon Uygulaması" },
      { property: "og:description", content: "Saatlerce el ile yüklemeye son. 1,200+ aktif satıcının tercihi." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip" style={{ background: "#090A0F" }}>
      <Header />
      <main>
        <Hero />
        <Simulator />
        <Features />
        <Security />
        <HowItWorks />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
