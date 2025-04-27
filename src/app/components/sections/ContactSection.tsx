"use client";

import { Section } from "@/app/components/Section";
import { SectionTitle } from "@/app/components/SectionTitle";
import { FormInputWrapper } from "@/app/components/FormInputWrapper";
import { FormInput } from "@/app/components/FormInput";
import { Button } from "@/app/components/Button";
import { useNav } from "@/context/NavCtx";

export function ContactSection() {
    const { contactRef } = useNav();

    return (
        <Section ref={contactRef}>
            <SectionTitle>Contact.</SectionTitle>
            <div className="flex flex-col gap-y-4">
                <p>
                    Do you want us to style your home? Fill out the form and
                    fill me in with the details :) We love meeting new people!
                </p>
                <form className="flex flex-col gap-y-4">
                    <FormInputWrapper>
                        <label htmlFor="name">Name</label>
                        <FormInput
                            id="name"
                            required={true}
                            placeholder="Enter your name"
                        />
                    </FormInputWrapper>
                    <FormInputWrapper>
                        <label htmlFor="email">E-mail</label>
                        <FormInput
                            id="email"
                            type="email"
                            required={true}
                            placeholder="Enter your email"
                        />
                    </FormInputWrapper>
                    <FormInputWrapper>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            required={true}
                            placeholder="Enter a message"
                            className="border border-neutral-300 p-2"
                        ></textarea>
                    </FormInputWrapper>
                    <Button
                        type="submit"
                        className="bg-[#f44336] active:bg-[#ccc] lg:hover:bg-[#ccc] active:text-black lg:hover:text-black"
                    >
                        Send Message
                    </Button>
                </form>
            </div>
        </Section>
    );
}

ContactSection.displayName = "ContactSection";
