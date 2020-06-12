import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";

import "./week-base.scss";

export const WeekBase = () => {
    const { setClassMode, weekBaseObjects, currentWeekBase } = useContext(
        BBxContext
    );

    const generateWeekBase = () => {
        let weekbase = {};
        // eslint-disable-next-line array-callback-return
        weekBaseObjects.map((obj) => {
            obj.Name === currentWeekBase ? (weekbase = obj) : console.log("");
        });
        console.log("weekbase", weekbase);

        return (
            <div className="weekBaseBox">
                <div className="headlineWrap">
                    <h3>{weekbase.Name}</h3>
                    <button onClick={(e) => setClassMode("editweekbase")}>
                        aktuelle Basis bearbeiten
                    </button>
                </div>

                {weekbase.WeekDays.map((weekday) => (
                    <div className="weekDayRow">
                        <div className="oneWeekDay">
                            <h3>{weekday.Day}</h3>
                        </div>
                        {weekday.Classes.map((oneClass) => (
                            <div className="oneClass">
                                {oneClass.StartTime}-{oneClass.EndTime}
                                <h3>{oneClass.Class}</h3>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="weekBaseWrapper">
            <div className="headlineWrap">
                <h3>Wochenplanbasis</h3>
                <button
                    className="newWeekBaseBtn"
                    onClick={(e) => setClassMode("editweekbase")}
                >
                    Basis wechseln/neu erstellen
                </button>
            </div>
            {generateWeekBase()}
        </div>
    );
};
export default WeekBase;
