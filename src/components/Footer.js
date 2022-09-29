import React from "react";

const Footer = () => {
    return (
        <footer className="section-gap bg-dark text-light p-4 md:px-6 md:py-8">
            <div className="my-container flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <h3 className="heading-text">Gym 360</h3>
                    <ul className="flex flex-wrap items-center gap-5">
                        <li>About</li>
                        <li>Privacy Policy</li>
                        <li>Licensing</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <hr className="border-gray-200" />
                <div className="text-sm sm:text-center md:mt-2">© 2022 Gym 360™. All Rights Reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;
