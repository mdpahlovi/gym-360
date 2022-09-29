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
        <div className="my-container section-gap">
            <h1 className="heading-text flex items-center gap-2 mb-2">
                <BiDumbbell></BiDumbbell>Gym 360 | No Pain No Gains
            </h1>
            <h3>Select today’s exercise</h3>
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
