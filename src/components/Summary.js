import React, { useState } from "react";
import Pahlovi from "../images/Pahlovi.png";

const Summary = ({ card }) => {
    const breaks = [10, 20, 30, 40, 50];

    const [perBreak, setPerBreak] = useState("00");

    let time = 0;
    for (const activity of card) {
        time += activity.time;
    }

    const handelToster = () => {
        console.log("CLicked");
    };

    return (
        <div className="w-full sm:w-[220px] xl:w-[290px] xxl:w-[360px] h-auto fixed sm:sticky sm:top-0 bottom-0 left-0 bg-accent px-5 pt-8 pb-10 rounded-lg flex flex-col gap-5">
            <div className="flex items-center gap-3">
                <img className="w-[20%] border rounded-2xl" src={Pahlovi} alt="" />
                <div>
                    <h3 className="font-semibold">MD Pahlovi</h3>
                    <h3>Barisal, Bangladesh</h3>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <h3 className="text-2xl font-semibold">
                        75 <span className="text-sm">kg</span>
                    </h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold">6.5</h3>
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
                <p className="mb-2">Add a Break</p>
                <div className="flex justify-evenly flex-wrap gap-2">
                    {breaks.map((perBreak, index) => (
                        <h4
                            key={index}
                            onClick={() => setPerBreak(perBreak)}
                            className="bg-light p-2 rounded-full cursor-pointer"
                        >
                            {perBreak}s
                        </h4>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-lg text-center font-semibold">Exercise Details</h3>
                <h3 className="flex justify-between">
                    Exercise Time : <span>{time}</span>
                </h3>
                <h3 className="flex justify-between">
                    Break Time : <span>{perBreak}</span>
                </h3>
            </div>
            <button className="btn bg-light" onClick={handelToster}>
                Activities Completed
            </button>
        </div>
    );
};

export default Summary;
