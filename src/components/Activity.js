import React from "react";

const Activity = ({ activity, addActivityToSummary }) => {
    const { img, name, details, doIt, time } = activity;
    return (
        <div className="border rounded-lg flex flex-col justify-between">
            <div className="flex flex-col gap-1 p-3">
                <img className="rounded-lg mb-3 w-auto" src={img} alt="" />
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p>{details}</p>
                <p className="font-medium">➦ {doIt}</p>
                <h3 className="text-lg font-bold">Time Required: {time} min</h3>
            </div>
            <button
                className="flex justify-center btn bg-accent rounded-t-none"
                onClick={() => addActivityToSummary(activity)}
            >
                Add To Card
            </button>
        </div>
    );
};

export default Activity;
