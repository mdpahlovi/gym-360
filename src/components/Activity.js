import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Activity = ({ activity, addActivityToSummary }) => {
    const { img, name, details, doIt, time } = activity;
    return (
        <div className="border rounded-lg flex flex-col justify-between">
            <img className="rounded-t-lg w-auto" src={img} alt="" />
            <div className="flex flex-col justify-start gap-1 p-3">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p>{details}</p>
                <p className="font-medium">➦ {doIt}</p>
                <h3 className="text-lg font-bold">Time Required: {time} min</h3>
            </div>
            <button
                className="flex justify-center items-center gap-2 btn bg-accent rounded-t-none"
                onClick={() => addActivityToSummary(activity)}
            >
                Add To Summary <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
            </button>
        </div>
    );
};

export default Activity;
