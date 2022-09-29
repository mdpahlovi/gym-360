import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="bg-dark">
                <div className="my-container h-12 flex justify-between items-center text-light">
                    <h3 className="text-2xl font-semibold">Gym 360</h3>
                    <div className="flex items-center gap-5">
                        <a className="hidden xs:block" href="tel:01736817612">
                            (880) 1736817612
                        </a>
                        <h5 className="font-semibold">Login</h5>
                    </div>
                </div>
            </nav>
            <nav className="bg-dark opacity-95">
                <ul className="my-container h-12 flex justify-center items-center gap-5 text-light font-semibold">
                    <li>Home</li>
                    <li>Company</li>
                    <li>Team</li>
                    <li>Features</li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
