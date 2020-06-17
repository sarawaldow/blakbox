import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { BBxContext } from "./BBxContext";

import "./timetable.scss";
import Classes from "./classes";

export const TimetableFull = () => {
    const {
        memberType,
        todaysDate,
        todaysDateString,
        setClassMode,
        setSelectedClassObject,
        selectedClassObject,
        classObjects,
        selectedDate,
        setSelectedDate,

    } = useContext(BBxContext);

    // console.log(todaysDate);

    const getWeek = () => {
        let date = new Date(todaysDate.getTime());
        date.setHours(0, 0, 0, 0);
        // Thursday in current week decides the year.
        date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
        // January 4 is always in week 1.
        let week1 = new Date(date.getFullYear(), 0, 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1.
        return (
            1 +
            Math.round(
                ((date.getTime() - week1.getTime()) / 86400000 -
                    3 +
                    ((week1.getDay() + 6) % 7)) /
                    7
            )
        );
    };
    const [weekNumber, setWeekNumber] = useState(getWeek());

    let datesThisWeek = [];
    const numberOfDates = 7;
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
            if (todaysDate.getDay() == key) numberOfDaysToMonday = value;
        });
        monday.setDate(monday.getDate() + numberOfDaysToMonday);
        // console.log("monday",monday);
        return monday;
    };
    const thisMondaysDate = getMondaysDate();

    for (let i = 0; i < numberOfDates; i++) {
        const MondayPlusI = new Date(thisMondaysDate);

        MondayPlusI.setDate(MondayPlusI.getDate() + i);
        MondayPlusI.setHours(0);
        MondayPlusI.setMinutes(0);
        MondayPlusI.setSeconds(0);
        datesThisWeek.push(MondayPlusI);
    }

    const [dates, setDates] = useState(datesThisWeek);


    const shortenDateString = (datestring) => {
        const dateFormatted = datestring.substring(0, datestring.length - 4);
        return dateFormatted;
    };

    const formatDate = (dateObj) => {
        const dateString = dateObj.toLocaleDateString();
        return dateString;
    };

    const dateSelectionHandler = ( dateObjIndex) => {
        setSelectedDate(dates[dateObjIndex]);
    };

    const generateWeekdayBtn = (weekdayString, dateObjIndex) => {
        return (
            <div
                className={
                    selectedDate.getDate() === dates[dateObjIndex].getDate()
                        ? "weekday selected"
                        : "weekday"
                }
                onClick={(e) =>
                    dateSelectionHandler(dateObjIndex)
                }
            >
                {weekdayString}
                <br />
                {shortenDateString(formatDate(dates[dateObjIndex]))}
            </div>
        );
    };

    const switchWeekDates = (nextOrLast) => {
        const arr = dates;
        // const dt = selectedDate;
        switch (nextOrLast) {
            case "next":
                arr.map((date) => date.setDate(date.getDate() + 7));
                setDates(arr);
                // dt.setDate(dt.getDate() + 7)
                // setSelectedDate(dt);
                setWeekNumber(weekNumber + 1);
                break;
            case "last":
                arr.map((date) => date.setDate(date.getDate() - 7));
                setDates(arr);
                // dt.setDate(dt.getDate() - 7)
                // setSelectedDate(dt);
                setWeekNumber(weekNumber - 1);
                break;
            default:
                return;
        }
    };

    // useEffect(() => {
    //     console.log("dates:", dates);
    // }, [dates]);

    useEffect(() => {
        // console.log(
        //     "selectedClassObject should be empty:",
        //     selectedClassObject
        // );
    }, [selectedClassObject]);

    useEffect(() => {
        // console.log("selectedDate:", selectedDate);
    }, [selectedDate]);

    useEffect(() => {
        // console.log("classObjects:", classObjects);
    }, [classObjects]);

    const triggerSetClassMode = () => {
        setClassMode("newclass");
    };

    const openAddNewClass = () => {
        setSelectedClassObject(
            {
                ClassKey: classObjects.length,
                ClassDescription: "",
                ClassType: "",
                Coach: "",
                StartTime: "",
                EndTime: "",
                Date: todaysDateString,
                Workout: [],
                MinSpots: 0,
                MaxSpots: 0,
                SignedUp: [],
                Waiting: []
            },
            [triggerSetClassMode()]
        );
    };

    return (
        <div className="FullTimetableWrapper">
            {memberType !== "Athlet" && (
                <div className="classMngBtnWrapper">
                    <button
                        className="classMngBtn"
                        onClick={(e) => setClassMode("classmanager")}
                    >
                        Kursverwaltung
                    </button>
                </div>
            )}
            <div className="timetableWrapper">
                <div className="week">
                    <div className="headlineAndWeekSwitchWrapper">
                        <h2>Kursplan</h2>
                        <div className="switchWeekButtonsWrapper">
                            <button
                                onClick={(e) => switchWeekDates("last")}
                                className="lastWeekBtn"
                            >
                                {"<"}
                            </button>
                            <div>KW {weekNumber}</div>
                            <button
                                onClick={(e) => switchWeekDates("next")}
                                className="nextWeekBtn"
                            >
                                {">"}
                            </button>
                        </div>
                    </div>
                    <div className="weekdayWrapper">
                        {generateWeekdayBtn("MO", 0)}
                        {generateWeekdayBtn("DI", 1)}
                        {generateWeekdayBtn("MI", 2)}
                        {generateWeekdayBtn("DO", 3)}
                        {generateWeekdayBtn("FR", 4)}
                        {generateWeekdayBtn("SA", 5)}
                        {generateWeekdayBtn("SO", 6)}
                    </div>
                    {memberType !== "Athlet" && (
                        <div
                            onClick={(e) => {
                                openAddNewClass();
                            }}
                            className="addClass"
                        >
                            + Sonderkurs am {formatDate(selectedDate)}
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
