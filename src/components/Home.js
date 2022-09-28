import React, { useEffect, useState } from "react";
import Activity from "./Activity";
import Summary from "./Summary";

const Home = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        const url = "activities.json";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setActivities(data.activities));
    }, []);
    const addActivityToSummary = (id) => {
        console.log(id);
    };
    return (
        <div className="my-container section-gap">
            <h1 className="heading-text">Gym 360 | No Pain No Gains</h1>
            <div className="mt-3 flex flex-col-reverse sm:flex-row gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activities.map((activity) => (
                        <Activity
                            key={activity.id}
                            activity={activity}
                            addActivityToSummary={addActivityToSummary}
                        ></Activity>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
