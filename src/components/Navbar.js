import React, { useRef } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
    const nevItems1 = useRef();
    const nevItems2 = useRef();

    const toggleNevItem = () => {
        nevItems1.current.classList.toggle("hidden");
        nevItems2.current.classList.toggle("hidden");
    };
    return (
        <nav className="bg-dark">
            <div className="my-container grid-rows-[80px] grid grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto] justify-between items-center text-light">
                <h3 className="heading-text font-semibold">Gym 360</h3>
                <h3 className="lg:hidden heading-text font-semibold" onClick={toggleNevItem}>
                    <CgMenuRight></CgMenuRight>
                </h3>
                <div className="hidden lg:block col-span-full lg:col-auto" ref={nevItems1}>
                    <ul className="flex flex-col lg:flex-row justify-center items-center gap-x-5 gap-y-3 text-light font-semibold">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Company</li>
                        <li className="cursor-pointer">Team</li>
                        <li className="cursor-pointer">Features</li>
                    </ul>
                </div>
                <div className="hidden lg:block col-span-full lg:col-auto" ref={nevItems2}>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-x-5 gap-y-3 my-3 cursor-pointer lg:m-0">
                        <a className="hidden xs:flex items-center gap-1" href="tel:01736817612">
                            <MdPhoneInTalk></MdPhoneInTalk> (880) 1736817612
                        </a>
                        <h5 className="font-semibold flex items-center gap-1 cursor-pointer">
                            <BiLogInCircle></BiLogInCircle> Login
                        </h5>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
