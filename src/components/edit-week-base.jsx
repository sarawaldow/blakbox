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
                                        <div className="allInputsWrapper">
                                            <div className="inputWrapper time">
                                                Uhrzeit
                                                <div><input
                                                    value={oneClass.StartTime}
                                                    type="time"
                                                /> bis <input
                                                    value={oneClass.EndTime}
                                                    type="time"
                                                /></div>
                                            </div>
                                            <div className="inputWrapper">
                                                Kursart 
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
                                            </div>
                                            <div className="inputWrapper coach">
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
                                            <div className="inputWrapper participants">
                                                Teilnehmer
                                                <div>
                                                    <div>
                                                        <label>min.</label>
                                                        <input
                                                            value={
                                                                oneClass.MinSpots
                                                            }
                                                            type="number"
                                                            min="0"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label>max.</label>

                                                        <input
                                                            value={
                                                                oneClass.MaxSpots
                                                            }
                                                            type="number"
                                                            min="0"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="levelCheckboxes">
                                                <div>zugelassene Trainingslevel</div>
                                                <label>
                                                    <input type="checkbox" defaultChecked/>
                                                    Anfänger
                                                </label>
                                                <label>
                                                    <input type="checkbox" defaultChecked/>
                                                    Fortgeschritten
                                                </label>
                                                <label>
                                                    <input type="checkbox" defaultChecked/>
                                                    Hero
                                                </label>
                                            </div>
                                            <div className="checkboxesWrapper">
                                                <div className="row">
                                                    <label>
                                                        MO
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                selectedDay ===
                                                                "MO"
                                                            }
                                                        />
                                                    </label>
                                                    <label>
                                                        DI
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                selectedDay ===
                                                                "DI"
                                                            }
                                                        />
                                                    </label>
                                                    <label>
                                                        MI
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                selectedDay ===
                                                                "MI"
                                                            }
                                                        />
                                                    </label>
                                                    <label>
                                                        DO
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                selectedDay ===
                                                                "DO"
                                                            }
                                                        />
                                                    </label>
                                                </div>
                                                <div className="row">
                                                    <label>
                                                        FR
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                selectedDay ===
                                                                "FR"
                                                            }
                                                        />
                                                    </label>
                                                    <label>
                                                        SA
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                selectedDay ===
                                                                "SA"
                                                            }
                                                        />
                                                    </label>
                                                    <label>
                                                        SO
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                selectedDay ===
                                                                "SO"
                                                            }
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="inputWrapper rhythm">
                                                Wiederholungsrhythmus
                                                <select>
                                                    <option value="jede Woche">
                                                        jede Woche
                                                    </option>
                                                    <option value="alle zwei Wochen">
                                                        alle zwei Wochen
                                                    </option>
                                                </select>
                                            </div>
                                            <button>Kurs löschen</button>
                                        </div>
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
