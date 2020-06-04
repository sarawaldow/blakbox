import React, { useContext } from "react";
import { useState } from "react";
import { BBxContext } from "./BBxContext";

import "./timetable.scss";
import Classes from "./classes";

// const getWeekDates = () => {
// }

export const TimetableFull = () => {
    const { memberType, todaysDate, todaysDateString } = useContext(BBxContext);

    const now = todaysDate;
    const todaysWeekDay = now.getDay();
    const [selectedDay, setSelectedDay] = useState(todaysWeekDay);
    const [selectedDate, setSelectedDate] = useState(todaysDateString);

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

    const dateSelectionHandler = (weekdayIndex, dateObjIndex) => {
        setSelectedDay(weekdayIndex);
        setSelectedDate(dates[dateObjIndex]);
    };

    const generateWeekdayBtn = (weeekdayString, weekdayIndex, dateObjIndex) => {
        return (
            <div
                className={
                    selectedDay === weekdayIndex
                        ? "weekday selected"
                        : "weekday"
                }
                onClick={(e) =>
                    dateSelectionHandler(weekdayIndex, dateObjIndex)
                }
            >
                {weeekdayString}
                <br />
                {dates[dateObjIndex]}
            </div>
        );
    };

    return (
        <div className="FullTimetableWrapper">
            {memberType !== "Athlet" &&<div className="classMngBtn">Kursverwaltung</div>}
            <div className="timetableWrapper">
                <h2>Kursplan</h2>
                <div className="week">
                    <div className="weekdayWrapper">
                        {generateWeekdayBtn("MO", 1, 0)}
                        {generateWeekdayBtn("DI", 2, 1)}
                        {generateWeekdayBtn("MI", 3, 2)}
                        {generateWeekdayBtn("DO", 4, 3)}
                        {generateWeekdayBtn("FR", 5, 4)}
                        {generateWeekdayBtn("SA", 6, 5)}
                        {generateWeekdayBtn("SO", 0, 6)}
                    </div>
                    {memberType !== "Athlet" && (
                        <div className="addClass">
                            Sonderkurs am {selectedDate} hinzufügen
                        </div>
                    )}
                    <div className="classWrapper">
                        <Classes />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TimetableFull;
