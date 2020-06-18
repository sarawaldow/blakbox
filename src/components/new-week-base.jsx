import React, { useContext, useState } from "react";
import { BBxContext } from "./BBxContext";

import "./week-base.scss";
import { useEffect } from "react";

export const NewWeekBase = () => {
    const {
        setClassMode,
        weekBaseObjects,
        setWeekBaseObjects,
        currentWeekBase,
        setCurrentWeekBase
    } = useContext(BBxContext);

    const [selectedDay, setSelectedDay] = useState("MO");
    const [weekBaseOption, setWeekBaseOption] = useState("");

    const [switchToWeekBase, setSwitchToWeekBase] = useState(currentWeekBase);

    const [newBaseName, setNewBaseName] = useState("");
    const [newBaseClassType, setNewBaseClassType] = useState("Open Gym");
    const [newClassStartTime, setNewClassStartTime] = useState("");
    const [newClassEndTime, setNewClassEndTime] = useState("");
    const [newClassCoach, setNewClassCoach] = useState("");
    const [newClassMinSpots, setNewClassMinSpots] = useState(0);
    const [newClassMaxSpots, setNewClassMaxSpots] = useState(10);
    const [newClassRhythm, setNewClassRhythm] = useState("");
    const [
        showAskIfBaseShouldBeChanged,
        setShowAskIfBaseShouldBeChanged
    ] = useState(false);

    const switchBaseHandler = () => {
        setCurrentWeekBase(switchToWeekBase);
        setClassMode("classmanager");
    };

    useEffect(() => {
        console.log("week base objs:", weekBaseObjects);
    }, [weekBaseObjects]);

    const saveChangesHandler = () => {
        if (weekBaseOption === "switchBase") {
            setShowAskIfBaseShouldBeChanged(true);
        }
        if (weekBaseOption === "newBase") {
            const newClass = {
                Class: newBaseClassType,
                StartTime: newClassStartTime,
                EndTime: newClassEndTime,
                Coach: newClassCoach,
                MinSpots: newClassMinSpots,
                MaxSpots: newClassMaxSpots,
                Rhythm: newClassRhythm
            };
            const obj = {
                Key: 1,
                Name: newBaseName,
                WeekDays: [
                    { Day: "MO", Classes: [newClass] },
                    { Day: "DI", Classes: [newClass] },
                    { Day: "MI", Classes: [newClass] },
                    { Day: "DO", Classes: [newClass] },
                    { Day: "FR", Classes: [newClass] },
                    { Day: "SA", Classes: [newClass] },
                    { Day: "SO", Classes: [newClass] }
                ]
            };
            setWeekBaseObjects([...weekBaseObjects, obj]);
            setWeekBaseOption("switchBase");
        }
    };

    useEffect(() => {
        console.log("opt:", weekBaseOption);
    }, [weekBaseOption]);

    const generateWeekdayBtn = () => {
        const weekDayStrings = ["MO", "DI", "MI", "DO", "FR", "SA", "SO"];

        return (
            <div>
                <input
                    className="weekBaseNameInput"
                    type="text"
                    value={newBaseName}
                    onChange={(e) => setNewBaseName(e.target.value)}
                    placeholder="Name der neuen Basis"
                />
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
                                Uhrzeit{" "}
                                <div>
                                    <input
                                        type="time"
                                        value={newClassStartTime}
                                        onChange={(e) =>
                                            setNewClassStartTime(e.target.value)
                                        }
                                    />{" "}
                                    bis{" "}
                                    <input
                                        type="time"
                                        value={newClassEndTime}
                                        onChange={(e) =>
                                            setNewClassEndTime(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="inputWrapper">
                                Kursart
                                <select
                                    value={newBaseClassType}
                                    onChange={(e) => {
                                        setNewBaseClassType(e.target.value);
                                    }}
                                    className="chooseClassType"
                                >
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
                                <select
                                    value={newClassCoach}
                                    onChange={(e) => {
                                        setNewClassCoach(e.target.value);
                                    }}
                                    className="chooseCoach"
                                >
                                    <option value="-">-</option>
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
                                        <input
                                            type="number"
                                            value={newClassMinSpots}
                                            onChange={(e) => {
                                                setNewClassMinSpots(
                                                    e.target.value
                                                );
                                            }}
                                            min="0"
                                        />
                                    </div>
                                    <div>
                                        <label>max.</label>

                                        <input
                                            type="number"
                                            value={newClassMaxSpots}
                                            onChange={(e) => {
                                                setNewClassMaxSpots(
                                                    e.target.value
                                                );
                                            }}
                                            min="0"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="levelCheckboxes">
                                <div>zugelassene Trainingslevel</div>
                                <label>
                                    <input type="checkbox" defaultChecked />
                                    Anfänger
                                </label>
                                <label>
                                    <input type="checkbox" defaultChecked />
                                    Fortgeschritten
                                </label>
                                <label>
                                    <input type="checkbox" defaultChecked />
                                    Hero
                                </label>
                            </div>
                            <div className="checkboxesWrapper">
                                <div className="row">
                                    <label>
                                        MO
                                        <input type="checkbox" checked />
                                    </label>
                                    <label>
                                        DI
                                        <input type="checkbox" checked />
                                    </label>
                                    <label>
                                        MI
                                        <input type="checkbox" checked />
                                    </label>
                                    <label>
                                        DO
                                        <input type="checkbox" checked />
                                    </label>
                                </div>
                                <div className="row">
                                    <label>
                                        FR
                                        <input type="checkbox" checked />
                                    </label>
                                    <label>
                                        SA
                                        <input type="checkbox" checked />
                                    </label>
                                    <label>
                                        SO
                                        <input type="checkbox" checked />
                                    </label>
                                </div>
                            </div>
                            <div className="inputWrapper rhythm">
                                Wiederholungsrhythmus
                                <select
                                    value={newClassRhythm}
                                    onChange={(e) => {
                                        setNewClassRhythm(e.target.value);
                                    }}
                                >
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

    return (
        <div className="editWeekBaseWrapper">
            {showAskIfBaseShouldBeChanged && (
                <div className="askIfSureLayer">
                    <h3>Wochenplanbasis wirklich wechseln?</h3>
                    <div>
                        <button
                        onClick={(e) => {
                            setClassMode("classmanager");
                        }}
                        >
                        abbrechen
                    </button>

                    <button
                        onClick={(e) => {
                            switchBaseHandler();
                        }}
                        >
                        Basis wechseln
                    </button>
                        </div>
                </div>
            )}
            {!showAskIfBaseShouldBeChanged && (
                <div>
                    <button
                        className="backBtn"
                        onClick={(e) => setClassMode("classmanager")}
                    >
                        zurück zur Kursverwaltung
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
                                        checked={
                                            weekBaseOption === "switchBase"
                                        }
                                    />
                                    Basis wechseln
                                </h3>
                            </label>

                            <label htmlFor="newBase">
                                <h3>
                                    <input
                                        type="radio"
                                        value="newBase"
                                        name="weekBaseOpt"
                                        id="newBase"
                                        checked={weekBaseOption === "newBase"}
                                    />
                                    neue Basis
                                </h3>
                            </label>
                        </div>
                    </div>
                    {weekBaseOption !== "" && (
                        <button
                            className="saveChangesBtn"
                            onClick={(e) => {
                                saveChangesHandler();
                            }}
                        >
                            {weekBaseOption === "newBase"
                                ? "neue Basis speichern"
                                : "Änderungen speichern"}
                        </button>
                    )}
                    {weekBaseOption === "switchBase" && (
                        <div className="switchBaseWrapper">
                            <div className="inputWrapper base">
                                <div>Basis wählen</div>
                                <select
                                    value={switchToWeekBase}
                                    onChange={(e) =>
                                        setSwitchToWeekBase(e.target.value)
                                    }
                                >
                                    {weekBaseObjects.map((base) => {
                                        return (
                                            <option value={base.Name}>
                                                {base.Name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="inputWrapper date">
                                <div>gültig ab:</div>
                                <input type="date" />
                            </div>
                        </div>
                    )}
                    {weekBaseOption === "newBase" && (
                        <div>
                            {generateWeekdayBtn()}
                            {generateWeekBase()}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
export default NewWeekBase;
