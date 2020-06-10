import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";

import "./week-base.scss";

export const WeekBase = () => {
    const { setClassMode, weekBaseObjects, currentWeekBase } = useContext(BBxContext);

    const generateWeekBase = () => {
        let weekbase = {};
        // eslint-disable-next-line array-callback-return
        weekBaseObjects.map((obj) => {
            obj.Key === currentWeekBase ? (weekbase = obj) : console.log("");
        });
        console.log("weekbase", weekbase);

        return (
            <div className="weekBaseBox">
                <h3>{weekbase.Name}</h3>
                {weekbase.WeekDays.map((weekday) => (
                    <div className="weekDayRow">
                        <div className="oneWeekDay"><h3>{weekday.Day}</h3></div>
                        {weekday.Classes.map((oneClass) => (
                            <div className="oneClass">{`${oneClass.Class}${oneClass.StartTime}-${oneClass.EndTime}`}</div>
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="weekBaseWrapper">
            <h3>Wochenplanbasis</h3>
            <button onClick={(e)=>setClassMode("editweekbase")}>aktuelle Basis bearbeiten</button>
            <button onClick={(e)=>setClassMode("editweekbase")}>Basis wechseln/neu erstellen</button>
            {generateWeekBase()}
        </div>
    );
};
export default WeekBase;
