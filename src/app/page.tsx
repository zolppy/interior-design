"use client";

import Header from "@/app/components/Header";
import Section from "@/app/components/section/Section";
import SectionTitle from "@/app/components/section/SectionTitle";
import Case from "@/app/components/Case";
import Designer from "@/app/components/Designer";
import Package from "@/app/components/pack/Pack";
import PackageHeader from "@/app/components/pack/PackTitle";
import PackageList from "@/app/components/pack/PackList";
import PackageListItem from "@/app/components/pack/PackItem";
import PackagePrice from "@/app/components/pack/PackPrice";
import PackageButton from "@/app/components/pack/PackBtn";
import FormInputWrapper from "@/app/components/form/FormInputWrapper";
import FormInput from "@/app/components/form/FormInput";
import FormButton from "@/app/components/form/FormBtn";
import Menu from "@/app/components/menu/Menu";
import MenuDesktop from "./components/menu/MenuDesktop";
import Footer from "@/app/components/Footer";
import { useNav } from "@/context/NavCtx";
import { showcases } from "@/utils/mocks/showcases";
import { designers } from "@/utils/mocks/designers";

const Home = () => {
    const { showcaseRef, servicesRef, designersRef, packsRef, contactRef } =
        useNav();

    return (
        <>
            <Header />
            <Menu />
            <MenuDesktop />
            <main className="mt-[69px] pt-6 px-3.5 lg:ml-[320px] lg:px-14">
                <h1 className="text-[64px] font-medium pb-4">
                    Interior <br className="md:hidden" /> Design
                </h1>
                <Section ref={showcaseRef}>
                    <SectionTitle>Showcase.</SectionTitle>
                    <ul className="grid grid-cols-1 gap-y-2.5 gap-x-4 md:grid-cols-2">
                        {showcases.map(({ id, title, alt, path }) => (
                            <Case
                                key={id}
                                title={title}
                                alt={alt}
                                path={path}
                            />
                        ))}
                    </ul>
                </Section>
                <Section ref={servicesRef}>
                    <SectionTitle>Services.</SectionTitle>
                    <div className="flex flex-col gap-y-4">
                        <p>
                            We are a interior design service that focus on
                            what's best for your home and what's best for you!
                        </p>
                        <p>
                            Some text about our services - what we do and what
                            we offer. We are lorem ipsum consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </Section>
                <Section ref={designersRef}>
                    <SectionTitle>Designers.</SectionTitle>
                    <div className="flex flex-col gap-y-4">
                        <p>The best team in the world.</p>
                        <p>
                            We are lorem ipsum consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <h3 className="font-bold">
                            Our designers are thoughtfully chosen:
                        </h3>
                        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            {designers.map(
                                ({ id, photo, name, role, description }) => (
                                    <Designer
                                        key={id}
                                        photo={photo}
                                        name={name}
                                        role={role}
                                        description={description}
                                    />
                                )
                            )}
                        </ul>
                    </div>
                </Section>
                <Section ref={packsRef}>
                    <SectionTitle>Packages.</SectionTitle>
                    <div className="flex flex-col gap-y-4">
                        <p>
                            Some text our prices. Lorem ipsum consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure
                        </p>
                        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <Package>
                                <PackageHeader bgColor="#616161">
                                    Basic
                                </PackageHeader>
                                <PackageList>
                                    <PackageListItem>
                                        Floorplanning
                                    </PackageListItem>
                                    <PackageListItem>
                                        10 hours support
                                    </PackageListItem>
                                    <PackageListItem>
                                        Photography
                                    </PackageListItem>
                                    <PackageListItem>
                                        20% furniture discount
                                    </PackageListItem>
                                    <PackageListItem>
                                        Good deals
                                    </PackageListItem>
                                    <PackageListItem>
                                        <PackagePrice
                                            price={199}
                                            description="per room"
                                        />
                                    </PackageListItem>
                                    <PackageListItem>
                                        <PackageButton
                                            bgColor="#fff"
                                            textColor="#000"
                                        />
                                    </PackageListItem>
                                </PackageList>
                            </Package>
                            <Package>
                                <PackageHeader bgColor="#f44336">
                                    Pro
                                </PackageHeader>
                                <PackageList>
                                    <PackageListItem>
                                        Floorplanning
                                    </PackageListItem>
                                    <PackageListItem>
                                        50 hours support
                                    </PackageListItem>
                                    <PackageListItem>
                                        Photography
                                    </PackageListItem>
                                    <PackageListItem>
                                        50% furniture discount
                                    </PackageListItem>
                                    <PackageListItem>
                                        GREAT deals
                                    </PackageListItem>
                                    <PackageListItem>
                                        <PackagePrice
                                            price={249}
                                            description="per room"
                                        />
                                    </PackageListItem>
                                    <PackageListItem>
                                        <PackageButton
                                            bgColor="#f44336"
                                            textColor="#fff"
                                        />
                                    </PackageListItem>
                                </PackageList>
                            </Package>
                        </ul>
                    </div>
                </Section>
                <Section ref={contactRef}>
                    <SectionTitle>Contact.</SectionTitle>
                    <div className="flex flex-col gap-y-4">
                        <p>
                            Do you want us to style your home? Fill out the form
                            and fill me in with the details :) We love meeting
                            new people!
                        </p>
                        <form className="flex flex-col gap-y-4">
                            <FormInputWrapper>
                                <label htmlFor="name">Name</label>
                                <FormInput id="name" />
                            </FormInputWrapper>
                            <FormInputWrapper>
                                <label htmlFor="email">E-mail</label>
                                <FormInput id="email" />
                            </FormInputWrapper>
                            <FormInputWrapper>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    required
                                    id="message"
                                    className="border border-neutral-300 p-2"
                                ></textarea>
                            </FormInputWrapper>
                            <FormButton />
                        </form>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
