import React, { useContext, useState } from "react";
import { BBxContext } from "./BBxContext";

import "./week-base.scss";

export const NewWeekBase = () => {
    const { setClassMode } = useContext(
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
 
        return (
            <div className="editBaseBox">

                            <div className="weekDayRow">
                                <button className="addClassBtn">+ Kurs</button>

                       
                                    <div className="oneClass">
                                        <div className="allInputsWrapper">
                                            <div className="inputWrapper time">
                                                <input
                                                    type="time"
                                                />{" "}
                                                bis{" "}
                                                <input
                                                    type="time"
                                                />
                                            </div>
                                            <div className="inputWrapper">
                                                <select
                                                    className="chooseClassType"
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
                                             
                                                            type="number"
                                                            min="0"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label>max.</label>

                                                        <input
                                           
                                                            type="number"
                                                            min="0"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="checkboxesWrapper">
                                                <div className="row">
                                                    <label>
                                                        MO
                                                        <input type="checkbox" checked={selectedDay === "MO"}/>
                                                    </label>
                                                    <label>
                                                        DI
                                                        <input type="checkbox" checked={selectedDay === "DI"}/>
                                                    </label>
                                                    <label>
                                                        MI
                                                        <input type="checkbox"  checked={selectedDay === "MI"}/>
                                                    </label>
                                                    <label>
                                                        DO
                                                        <input type="checkbox" checked={selectedDay === "DO"}/>
                                                    </label>
                                                </div>
                                                <div className="row">
                                                    <label>
                                                        FR
                                                        <input type="checkbox" checked={selectedDay === "FR"}/>
                                                    </label>
                                                    <label>
                                                        SA
                                                        <input type="checkbox" checked={selectedDay === "SA"}/>
                                                    </label>
                                                    <label>
                                                        SO
                                                        <input type="checkbox" checked={selectedDay === "SO"}/>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="inputWrapper">

                                            Wiederholungsrhythmus
                                            <select>
                                                <option value="jede Woche">jede Woche</option>
                                                <option value="alle zwei Wochen">alle zwei Wochen</option>
                                            </select>
                                            </div>
                                            <button>Kurs löschen</button>
                                        </div>
                                    </div>
                            




                            </div>

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

            <h3>Basis wechseln</h3>
            <h3>neue Basis</h3>
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
export default NewWeekBase;
