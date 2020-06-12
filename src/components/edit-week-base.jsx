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
            obj.Name === currentWeekBase ? (weekbase = obj) : console.log("");
        });
        console.log("weekbase", weekbase);

        return (
            <div className="editBaseBox">
                {weekbase.WeekDays.map(
                    (weekday) =>
                        weekday.Day === selectedDay && (
                            <div className="weekDayRow">
                                <button className="addClassBtn">+ Kurs</button>
                                {weekday.Classes.map((oneClass) => (
                                    <div className="oneClass">
                                        <div>
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
                                            Coach
                                            <select
                                                className="chooseCoach"
                                                value={oneClass.Coach}
                                            >
                                                <option value="Peter">
                                                    Peter
                                                </option>
                                                <option value="Anke">
                                                    Anke
                                                </option>
                                                <option value="Hans">
                                                    Hans
                                                </option>
                                                <option value="Gerda">
                                                    Gerda
                                                </option>
                                            </select>
                                        </div>
                                        <div>
                                            
                                        <input
                                            value={oneClass.StartTime}
                                            type="time"
                                            />{" "}
                                        bis
                                        <input
                                            value={oneClass.EndTime}
                                            type="time"
                                            />
                                            </div>
                                            <div>
                                            
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
                                            </div>
                                        <div className="checkboxesWrapper">
                                            <label>
                                                MO
                                                <input type="checkbox" />
                                            </label>
                                            <label>
                                                DI
                                                <input type="checkbox" />
                                            </label>
                                            <label>
                                                MI
                                                <input type="checkbox" />
                                            </label>
                                            <label>
                                                DO
                                                <input type="checkbox" />
                                            </label>
                                            <label>
                                                FR
                                                <input type="checkbox" />
                                            </label>
                                            <label>
                                                SA
                                                <input type="checkbox" />
                                            </label>
                                            <label>
                                                SO
                                                <input type="checkbox" />
                                            </label>
                                        </div>
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
            <button
                className="backBtn"
                onClick={(e) => setClassMode("classmanager")}
            >
                zurück zur Kursverwaltung
            </button>

            <h3>{currentWeekBase} bearbeiten</h3>
            <button
                className="saveChangesBtn"
                onClick={(e) => saveWeekBaseChanges()}
            >
                Änderungen speichern
            </button>
            {generateWeekdayBtn()}
            {generateWeekBase()}
        </div>
    );
};
export default EditWeekBase;
