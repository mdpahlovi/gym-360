import React, { useEffect, useState } from "react";
import Pahlovi from "../images/Pahlovi.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImLocation2 } from "react-icons/im";
import { MdCloudDone } from "react-icons/md";

const Summary = ({ card }) => {
    const breaks = [10, 20, 30, 40, 50];

    // Set & Update Time
    let time = 0;
    for (const activity of card) {
        time += activity.time;
    }

    // Handel localStorage
    const [perBreak, setPerBreak] = useState();
    useEffect(() => {
        const getBreak = localStorage.getItem("break");
        if (getBreak) {
            setPerBreak(getBreak);
        } else setPerBreak(0);
    }, []);
    const handelbreak = (data) => {
        setPerBreak(data);
        localStorage.setItem("break", data);
    };

    // Show Toster
    const handelToast = () => {
        toast.success("Wow ! You completed your todays task", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="w-full sm:w-[280px] md:w-[300px] 2xl:w-[360px] h-auto sticky sm:top-0 bottom-0 left-0 bg-accent px-5 py-8 rounded-lg flex flex-col gap-5">
            <div className="flex items-center gap-3">
                <img className="w-[20%] border rounded-2xl" src={Pahlovi} alt="" />
                <div>
                    <h3 className="font-semibold">MD Pahlovi</h3>
                    <h3 className="flex items-center gap-1">
                        <ImLocation2></ImLocation2> Bhola, Bangladesh
                    </h3>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <h3 className="text-2xl font-semibold">
                        85 <span className="text-sm">kg</span>
                    </h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold">5.85</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold">
                        22 <span className="text-sm">yds</span>
                    </h3>
                    <p>Age</p>
                </div>
            </div>
            <div>
                <p className="mb-2 text-lg text-center font-semibold">Add a Break</p>
                <div className="flex flex-wrap justify-between">
                    {breaks.map((perBreak, index) => (
                        <h4
                            key={index}
                            onClick={() => handelbreak(perBreak)}
                            className="bg-light hover:bg-lightGray duration-300 p-2 rounded-lg cursor-pointer"
                        >
                            {perBreak}s
                        </h4>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-lg text-center font-semibold">Exercise Details</h3>
                <h3 className="flex justify-between">
                    Exercise Time : <span>{time} min</span>
                </h3>
                <h3 className="flex justify-between">
                    Break Time : <span>{perBreak} s</span>
                </h3>
            </div>
            <button
                className="flex justify-center items-center gap-2 btn bg-light hover:bg-lightGray duration-300"
                onClick={handelToast}
            >
                Activities Completed <MdCloudDone></MdCloudDone>
            </button>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Summary;
