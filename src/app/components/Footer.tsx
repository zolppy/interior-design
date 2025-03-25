const Footer = () => {
    return (
        <footer className="text-right bg-[#f1f1f1] py-12 px-14">
            Powered by{" "}
            <a
                href="https://github.com/zolppy"
                target="_blank"
                className="underline active:opacity-60 lg:hover:opacity-60"
            >
                Zolppy
            </a>
        </footer>
    );
};

Footer.displayName = "Footer";

export default Footer;
