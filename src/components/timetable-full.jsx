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
        dates,
        setDates,
        weekNumber,
        setWeekNumber
    } = useContext(BBxContext);

    const now = todaysDate;
    const todaysWeekDay = now.getDay();
    const [selectedDay, setSelectedDay] = useState(todaysWeekDay);

    const shortenDateString = (datestring) => {
        const dateFormatted = datestring.substring(0, datestring.length - 4);
        return dateFormatted;
    };

    const formatDate = (dateObj) => {
        const dateString = dateObj.toLocaleDateString();
        return dateString;
    };

    const dateSelectionHandler = (weekdayIndex, dateObjIndex) => {
        setSelectedDay(weekdayIndex);
        setSelectedDate(dates[dateObjIndex]);
    };

    const generateWeekdayBtn = (weekdayString, weekdayIndex, dateObjIndex) => {
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
        console.log("selectedDate:", selectedDate);
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
                        {generateWeekdayBtn("MO", 1, 0)}
                        {generateWeekdayBtn("DI", 2, 1)}
                        {generateWeekdayBtn("MI", 3, 2)}
                        {generateWeekdayBtn("DO", 4, 3)}
                        {generateWeekdayBtn("FR", 5, 4)}
                        {generateWeekdayBtn("SA", 6, 5)}
                        {generateWeekdayBtn("SO", 0, 6)}
                    </div>
                    {memberType !== "Athlet" && (
                        <div
                            onClick={(e) => {
                                openAddNewClass();
                            }}
                            className="addClass"
                        >
                            Sonderkurs am {formatDate(selectedDate)} hinzufügen
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
