import { Header } from "@/app/components/Header";
import { Menu } from "@/app/components/Menu";
import { MenuDesktop } from "@/app/components/MenuDesktop";
import { Footer } from "@/app/components/Footer";
import { CoffeeBtn } from "@/app/components/CoffeeBtn";
import { CaseSection } from "@/app/components/sections/CaseSection";
import { ServicesSection } from "@/app/components/sections/ServicesSection";
import { DesignersSection } from "@/app/components/sections/DesignersSection";
import { PacksSection } from "@/app/components/sections/PacksSection";
import { ContactSection } from "@/app/components/sections/ContactSection";
import { Main } from "@/app/components/Main";

const Home = () => {
    return (
        <>
            <Header />
            <Menu />
            <MenuDesktop />
            <Main>
                <h1 className="text-[64px] font-medium pb-4">
                    Interior <br className="md:hidden" /> Design
                </h1>
                <CaseSection />
                <ServicesSection />
                <DesignersSection />
                <PacksSection />
                <ContactSection />
                <CoffeeBtn />
            </Main>
            <Footer />
        </>
    );
};

export default Home;
