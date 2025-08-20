import { Header } from "@/app/components/Header";
import { Menu } from "@/app/components/Menu";
import { MenuDesktop } from "@/app/components/MenuDesktop";
import { Main } from "@/app/components/Main";
import { Title } from "@/app/components/Title";
import { CaseSection } from "@/app/components/sections/CaseSection";
import { ServicesSection } from "@/app/components/sections/ServicesSection";
import { DesignersSection } from "@/app/components/sections/DesignersSection";
import { PacksSection } from "@/app/components/sections/PacksSection";
import { ContactSection } from "@/app/components/sections/ContactSection";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Menu />
      <MenuDesktop />
      <Main>
        <Title />
        <CaseSection />
        <ServicesSection />
        <DesignersSection />
        <PacksSection />
        <ContactSection />
      </Main>
      <Footer />
    </>
  );
}
