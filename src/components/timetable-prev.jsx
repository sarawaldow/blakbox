import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";
import { useState } from "react";

import "./timetable.scss";
import Classes from "./classes";

// const getWeekDates = () => {
// }

export const TimetablePrev = () => {
    const { setStatus } = useContext(BBxContext);

    const now = new Date();
    let dates = [];
    const numberOfDates = 3;

    for (let i = 0; i < numberOfDates; i++) {
        const todayMinusI = new Date(now);
        todayMinusI.setDate(todayMinusI.getDate() - i);
        const dateFormatted = todayMinusI
            .toLocaleDateString()
            .substring(0, todayMinusI.toLocaleDateString().length - 4);
        dates.push(dateFormatted);
        console.log(dateFormatted);
    }

    const [selectedDay, setSelectedDay] = useState("Heute");
    return (
        <div className="timetableWrapper">
                <div className="boxResults">Box-Resultate</div>
                <h2>Kursvorschau</h2>

            <div className="week">
                <div className="weekdayWrapper">
                    <div
                        className={
                            selectedDay === "Heute"
                                ? "weekday selected"
                                : "weekday"
                        }
                        onClick={(e) => setSelectedDay("Heute")}
                    >
                        Heute
                        <br />
                        {dates[0]}
                    </div>
                    <div
                        className={
                            selectedDay === "Morgen"
                                ? "weekday selected"
                                : "weekday"
                        }
                        onClick={(e) => setSelectedDay("Morgen")}
                    >
                        Morgen
                        <br />
                        {dates[1]}
                    </div>
                    <div
                        className={
                            selectedDay === "Übermorgen"
                                ? "weekday selected"
                                : "weekday"
                        }
                        onClick={(e) => setSelectedDay("Übermorgen")}
                    >
                        Übermorgen
                        <br />
                        {dates[2]}
                    </div>
                </div>
                <div className="classWrapper prev">
                    <Classes />
                </div>
                <div className="toFullTimetable">
                    <div
                        className="timetableBtn"
                        onClick={(e) => setStatus("TIMETABLE")}
                    >
                        zur Wochenübersicht
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimetablePrev;
