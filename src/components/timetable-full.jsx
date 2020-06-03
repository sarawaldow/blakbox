import React, { useContext } from "react";
import { useState } from "react";
import { BBxContext } from "./BBxContext";

import "./timetable.scss";
import Classes from "./classes";

// const getWeekDates = () => {
// }

export const TimetableFull = () => {
    const {memberType, todaysDate } = useContext(BBxContext);

    const now = todaysDate;
    const todaysWeekDay = now.getDay();
    const [selectedDay, setSelectedDay] = useState(todaysWeekDay);

    const monday = new Date();

    const weekDaysDifferenceToMonday = {
        0: -7,
        1: 0,
        2: -1,
        3: -2,
        4: -3,
        5: -4,
        6: -5
    };

    const getMondaysDate = () => {
        let numberOfDaysToMonday = 0;
        Object.entries(weekDaysDifferenceToMonday).forEach(([key, value]) => {
            // eslint-disable-next-line eqeqeq
            if (todaysWeekDay == key) numberOfDaysToMonday = value;
        });
        console.log("selectedDay:", selectedDay);
        monday.setDate(monday.getDate() + numberOfDaysToMonday);
    };
    getMondaysDate();

    let dates = [];
    const numberOfDates = 7;

    for (let i = 0; i < numberOfDates; i++) {
        const MondayPlusI = new Date(monday);

        MondayPlusI.setDate(MondayPlusI.getDate() + i);
        const dateFormatted = MondayPlusI.toLocaleDateString().substring(
            0,
            MondayPlusI.toLocaleDateString().length - 4
        );
        dates.push(dateFormatted);
    }

    return (
        <div className="FullTimetableWrapper">
            <div className="timetableWrapper">
                <h2>Kursplan</h2>
                <div className="week">
                    <div className="weekdayWrapper">
                        <div
                            className={
                                selectedDay === 1
                                    ? "weekday selected"
                                    : "weekday"
                            }
                            onClick={(e) => setSelectedDay(1)}
                        >
                            MO<br/>{dates[0]}
                        </div>
                        <div
                            className={
                                selectedDay === 2
                                    ? "weekday selected"
                                    : "weekday"
                            }
                            onClick={(e) => setSelectedDay(2)}
                        >
                            DI<br/>{dates[1]}
                        </div>
                        <div
                            className={
                                selectedDay === 3
                                    ? "weekday selected"
                                    : "weekday"
                            }
                            onClick={(e) => setSelectedDay(3)}
                        >
                            MI<br/>{dates[2]}
                        </div>
                        <div
                            className={
                                selectedDay === 4
                                    ? "weekday selected"
                                    : "weekday"
                            }
                            onClick={(e) => setSelectedDay(4)}
                        >
                            DO<br/>{dates[3]}
                        </div>
                        <div
                            className={
                                selectedDay === 5
                                    ? "weekday selected"
                                    : "weekday"
                            }
                            onClick={(e) => setSelectedDay(5)}
                        >
                            FR<br/>{dates[4]}
                        </div>
                        <div
                            className={
                                selectedDay === 6
                                    ? "weekday selected"
                                    : "weekday"
                            }
                            onClick={(e) => setSelectedDay(6)}
                        >
                            SA<br/>{dates[5]}
                        </div>
                        <div
                            className={
                                selectedDay === 0
                                    ? "weekday selected"
                                    : "weekday"
                            }
                            onClick={(e) => setSelectedDay(0)}
                        >
                            SO<br/>{dates[6]}
                        </div>
                    </div>
                    <div className="classWrapper">
                        <Classes />
                    </div>
                    {memberType !== 'Athlet' && <div className="addClass">Sonderkurs hinzufügen</div>}
                </div>
            </div>
        </div>
    );
};
export default TimetableFull;
