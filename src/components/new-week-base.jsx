import React, { useContext, useState } from "react";
import { BBxContext } from "./BBxContext";

import "./week-base.scss";

export const NewWeekBase = () => {
    const { setClassMode, weekBaseObjects
        // ,currentWeekBase
     } = useContext(
        BBxContext
    );

    const [selectedDay, setSelectedDay] = useState("MO");
    const [weekBaseOption, setWeekBaseOption] = useState("");

    // const saveChangesHandler = () => {
    //     if(weekBaseOption === "switchBase"){
            
    //     }
    //     if(weekBaseOption === "newBase"){

    //     }

    // }

    const generateWeekdayBtn = () => {
        const weekDayStrings = ["MO", "DI", "MI", "DO", "FR", "SA", "SO"];

        return (
            <div>
                <input className="weekBaseNameInput" type="text" placeholder="Name"/>
                <div className="weekdayWrapper">
                    {weekDayStrings.map((day) => (
                        <button
                            className={
                                selectedDay === day
                                    ? "weekday selected"
                                    : "weekday"
                            }
                            onClick={(e) => setSelectedDay(day)}
                        >
                            {day}
                        </button>
                    ))}
                </div>
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
                                <input type="time" /> bis <input type="time" />
                            </div>
                            <div className="inputWrapper">
                                <select className="chooseClassType">
                                    <option value="Open Gym">Open Gym</option>
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
                                <select className="chooseCoach">
                                    <option value="Peter">Peter</option>
                                    <option value="Anke">Anke</option>
                                    <option value="Hans">Hans</option>
                                    <option value="Gerda">Gerda</option>
                                </select>
                            </div>
                            <div className="inputWrapper participants">
                                Teilnehmer
                                <div>
                                    <div>
                                        <label>min.</label>
                                        <input type="number" min="0" />
                                    </div>
                                    <div>
                                        <label>max.</label>

                                        <input type="number" min="0" />
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
                                            checked={selectedDay === "MO"}
                                        />
                                    </label>
                                    <label>
                                        DI
                                        <input
                                            type="checkbox"
                                            checked={selectedDay === "DI"}
                                        />
                                    </label>
                                    <label>
                                        MI
                                        <input
                                            type="checkbox"
                                            checked={selectedDay === "MI"}
                                        />
                                    </label>
                                    <label>
                                        DO
                                        <input
                                            type="checkbox"
                                            checked={selectedDay === "DO"}
                                        />
                                    </label>
                                </div>
                                <div className="row">
                                    <label>
                                        FR
                                        <input
                                            type="checkbox"
                                            checked={selectedDay === "FR"}
                                        />
                                    </label>
                                    <label>
                                        SA
                                        <input
                                            type="checkbox"
                                            checked={selectedDay === "SA"}
                                        />
                                    </label>
                                    <label>
                                        SO
                                        <input
                                            type="checkbox"
                                            checked={selectedDay === "SO"}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="inputWrapper">
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
            <button
                className="saveChangesBtn"
                onClick={(e) => saveWeekBaseChanges()}
            >
                Änderungen speichern
            </button>
            <div className="radiosWrapper">
                <div
                    className="weekBaseOptions"
                    onChange={(e) => setWeekBaseOption(e.target.value)}
                >
                    <label htmlFor="switchBase">
                        <h3>
                            <input
                                type="radio"
                                value="switchBase"
                                name="weekBaseOpt"
                                id="switchBase"
                            />
                            Basis wechseln
                        </h3>
                    </label>
                    {weekBaseOption === "switchBase" && (
                        <div>
                            <select>
                                {weekBaseObjects.map((base) => {
                                    return (
                                        <option value={base.Name}>
                                            {base.Name}
                                        </option>
                                    );
                                })}
                            </select>
                            <div className="inputWrapper">gültig ab:<input type="date" /></div>
                        </div>
                    )}
                    <label htmlFor="newBase">
                        <h3>
                            <input
                                type="radio"
                                value="newBase"
                                name="weekBaseOpt"
                                id="newBase"
                            />
                            neue Basis
                        </h3>
                    </label>
                </div>
            </div>

            {weekBaseOption === "newBase" && (
                <div>
                    {generateWeekdayBtn()}
                    {generateWeekBase()}
                </div>
            )}
        </div>
    );
};
export default NewWeekBase;
