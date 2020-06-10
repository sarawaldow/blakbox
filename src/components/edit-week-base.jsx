import React, { useContext, useState } from "react";
import { BBxContext } from "./BBxContext";

import "./week-base.scss";

export const EditWeekBase = () => {
    const { setClassMode, weekBaseObjects, currentWeekBase } = useContext(
        BBxContext
    );

    const [selectedDay, setSelectedDay] = useState("MO");

    const generateWeekdayBtn = () => {
        const weekDayStrings = ["MO", "DI", "MI", "DO", "FR", "SA", "SO"];

        return (
            <div className="weekdayWrapper">
                {weekDayStrings.map((day) => (
                    <button
                        className={
                            selectedDay === day ? "weekday selected" : "weekday"
                        }
                        onClick={(e) => setSelectedDay(day)}
                    >
                        {day}
                    </button>
                ))}
            </div>
        );
    };

    const generateWeekBase = () => {
        let weekbase = {};
        // eslint-disable-next-line array-callback-return
        weekBaseObjects.map((obj) => {
            obj.Key === currentWeekBase ? (weekbase = obj) : console.log("");
        });
        console.log("weekbase", weekbase);

        return (
            <div className="weekBaseBox">
                {weekbase.WeekDays.map(
                    (weekday) =>
                        weekday.Day === selectedDay && (
                            <div className="weekDayRow">
                                {weekday.Classes.map((oneClass) => (
                                    <div className="oneClass">
                                        {oneClass.Class}
                                        {oneClass.StartTime}-{oneClass.EndTime}
                                        <select
                                            className="chooseClassType"
                                            value={oneClass.Class}
                                        >
                                            <option value="Open Gym">
                                                Open Gym
                                            </option>
                                            <option value="WOD All Level">
                                                WOD All Level
                                            </option>
                                            <option value="WOD Anfänger">
                                                WOD Anfänger
                                            </option>
                                            <option value="WOD Fortgeschrittene">
                                                WOD Fortgeschrittene
                                            </option>
                                        </select>
                                        <input
                                            value={oneClass.StartTime}
                                            type="time"
                                        />
                                        <input
                                            value={oneClass.EndTime}
                                            type="time"
                                        />
                                        <input
                                            value={oneClass.MinSpots}
                                            type="number"
                                            min="0"
                                        />
                                        <input
                                            value={oneClass.MaxSpots}
                                            type="number"
                                            min="0"
                                        />
                                        <button>Kurs löschen</button>
                                    </div>
                                ))}
                            </div>
                        )
                )}
            </div>
        );
    };

    const saveWeekBaseChanges = () => {};

    return (
        <div className="editWeekBaseWrapper">
            <button onClick={(e) => setClassMode("classmanager")}>
                aktuelle Basis bearbeiten
            </button>

            <h3>Basis bearbeiten</h3>
            {generateWeekdayBtn()}
            {generateWeekBase()}
            <button onClick={(e) => saveWeekBaseChanges()}>
                Änderungen speichern
            </button>
        </div>
    );
};
export default EditWeekBase;
