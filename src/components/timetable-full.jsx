import React from "react";
import { useState } from "react";

import "./timetable.scss";
import Classes from "./classes";

// const getWeekDates = () => {
// }

export const TimetableFull = () => {
    const now = new Date();
    let dates = [];
    const numberOfDates = 7;

    for (let i = 0; i < numberOfDates; i++) {
        const todayMinusI = new Date(now);
        todayMinusI.setDate(todayMinusI.getDate() + i);
        const dateFormatted = todayMinusI.toLocaleDateString().substring(0, todayMinusI.toLocaleDateString().length-4);
        dates.push(dateFormatted);
        console.log(dateFormatted);
    }

    const [selectedDay, setSelectedDay] = useState("MO");

    return (
        <div className="FullTimetableWrapper">
        <div className="timetableWrapper">
            <h2>Wochenansicht</h2>
            <div className="week">
                <div className="weekdayWrapper">
                    <div
                        className={
                            selectedDay === "MO"
                                ? "weekday selected"
                                : "weekday"
                        }
                        onClick={(e) => setSelectedDay("MO")}
                    >
                        MO {dates[0]}
                    </div>
                    <div
                        className={
                            selectedDay === "DI"
                                ? "weekday selected"
                                : "weekday"
                        }
                        onClick={(e) => setSelectedDay("DI")}
                    >
                        DI {dates[1]}
                    </div>
                    <div
                        className={
                            selectedDay === "MI"
                                ? "weekday selected"
                                : "weekday"
                        }
                        onClick={(e) => setSelectedDay("MI")}
                    >
                        MI {dates[2]}
                    </div>
                    <div
                        className={
                            selectedDay === "DO"
                                ? "weekday selected"
                                : "weekday"
                        }
                        onClick={(e) => setSelectedDay("DO")}
                    >
                        DO {dates[3]}
                    </div>
                    <div
                        className={
                            selectedDay === "FR"
                                ? "weekday selected"
                                : "weekday"
                        }
                        onClick={(e) => setSelectedDay("FR")}
                    >
                        FR {dates[4]}
                    </div>
                    <div
                        className={
                            selectedDay === "SA"
                                ? "weekday selected"
                                : "weekday"
                        }
                        onClick={(e) => setSelectedDay("SA")}
                    >
                        SA {dates[5]}
                    </div>
                    <div
                        className={
                            selectedDay === "SO"
                                ? "weekday selected"
                                : "weekday"
                        }
                        onClick={(e) => setSelectedDay("SO")}
                    >
                        SO {dates[6]}
                    </div>
                </div>
                <div className="classWrapper"><Classes/></div>
            </div>
        </div>
        </div>
    );
};
export default TimetableFull;