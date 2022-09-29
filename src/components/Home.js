import React, { useEffect, useState } from "react";
import Activity from "./Activity";
import Summary from "./Summary";
import { BiDumbbell } from "react-icons/bi";

const Home = () => {
    // Load Data
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        const url = "activities.json";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setActivities(data.activities));
    }, []);

    // Set Selected Card to send to summary
    const [card, setCard] = useState([]);
    const addActivityToSummary = (id) => {
        const newCard = [...card, id];
        setCard(newCard);
    };

    return (
        <div className="my-container section-gap flex flex-col gap-2">
            <h1 className="heading-text flex items-center gap-">
                <BiDumbbell></BiDumbbell>Gym 360 | No Pain No Gains
            </h1>
            <h1>
                This is our weight loss program. Complete those task every dad. Hope you will get result base on your
                afford
            </h1>
            <h3 className="text-2xl font-semibold">Select today’s task</h3>
            <div className="mt-3 flex flex-col-reverse sm:flex-row gap-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {activities.map((activity) => (
                        <Activity
                            key={activity.id}
                            activity={activity}
                            addActivityToSummary={addActivityToSummary}
                        ></Activity>
                    ))}
                </div>
                <div>
                    <Summary card={card}></Summary>
                </div>
            </div>
        </div>
    );
};

export default Home;
