"use client";

import { useRef } from "react";
import Header from "@/app/components/Header";
import Section from "@/app/components/Section";
import SectionTitle from "@/app/components/SectionTitle";
import Case from "@/app/components/Case";
import Designer from "@/app/components/Designer";
import Package from "@/app/components/Package";
import PackageHeader from "@/app/components/PackageHeader";
import PackageList from "@/app/components/PackageList";
import PackageListItem from "@/app/components/PackageListItem";
import PackagePrice from "@/app/components/PackagePrice";
import PackageButton from "@/app/components/PackageButton";
import FormInputWrapper from "@/app/components/FormInputWrapper";
import FormInput from "@/app/components/FormInput";
import FormButton from "@/app/components/FormButton";
import Menu from "@/app/components/menu/Menu";
import Footer from "@/app/components/Footer";
import { showcases } from "@/utils/mocks/showcase";
import { designers } from "@/utils/mocks/designers";
import { SectionEnum } from "@/utils/enums/section";
import { sectionType } from "@/utils/types/section";

const Home = () => {
    // Gera prop drilling, transformar isso em contexto
    const homeRef = useRef<any>(undefined);
    const showcaseRef = useRef<any>(undefined);
    const servicesRef = useRef<any>(undefined);
    const designersRef = useRef<any>(undefined);
    const packagesRef = useRef<any>(undefined);
    const contactRef = useRef<any>(undefined);

    const scrollTo = (to: sectionType) => {
        switch (to) {
            case SectionEnum.Home:
                homeRef?.current.scrollIntoView();
                break;
            case SectionEnum.Showcase:
                showcaseRef?.current.scrollIntoView();
                break;
            case SectionEnum.Services:
                servicesRef?.current.scrollIntoView();
                break;
            case SectionEnum.Designers:
                designersRef?.current.scrollIntoView();
                break;
            case SectionEnum.Packages:
                packagesRef?.current.scrollIntoView();
                break;
            case SectionEnum.Contact:
                contactRef?.current.scrollIntoView();
        }
    };

    return (
        <>
            <div ref={homeRef}></div>
            <Header />
            <div className="hidden lg:block">
                <Menu scrollTo={scrollTo} />
            </div>
            <Menu scrollTo={scrollTo} />
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
                <Section ref={packagesRef}>
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
