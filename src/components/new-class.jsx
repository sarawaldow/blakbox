import React, { useContext, useEffect } from "react";
import { BBxContext } from "../components/BBxContext";
import { useState } from "react";

export const NewClass = () => {
    const {
        classObjects,
        setClassObjects,
        selectedDate,
        setClassMode,
        selectedClassObject,
        workoutNC,
        setWorkoutNC,
        coachNC,
        setCoachNC,
        classDescriptionNC,
        setClassDescriptionNC,
        maxSpotsNC,
        setMaxSpotsNC,
        minSpotsNC,
        setMinSpotsNC,
        startTimeNC,
        setStartTimeNC,
        endTimeNC,
        setEndTimeNC,
        classTypeNC,
        setClassTypeNC
    } = useContext(BBxContext);

    const [showSuccessfullyAdded, setShowSuccessfullyAdded] = useState(false);

    const formatToISODate = (date) => {
        const dateString = date.toLocaleDateString("sv");
        return dateString;
    };

    const [dateNC, setDateNC] = useState(formatToISODate(
        selectedDate
    ))

    useEffect(() => {
        console.log(selectedClassObject);
    }, [selectedClassObject]);

    useEffect(() => {
        console.log(workoutNC);
        // selectedClassObject.Workout = workoutNC;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [workoutNC]);

    useEffect(() => {
        console.log(classDescriptionNC);
    }, [classDescriptionNC]);

    useEffect(() => {
        console.log(coachNC);
    }, [coachNC]);
    useEffect(() => {
        console.log(classTypeNC);
    }, [classTypeNC]);

    const saveChanges = () => {
        selectedClassObject.ClassType = classTypeNC;
        selectedClassObject.ClassDescription = classDescriptionNC;
        selectedClassObject.Coach = coachNC;
        selectedClassObject.StartTime = startTimeNC;
        selectedClassObject.EndTime = endTimeNC;
        selectedClassObject.MinSpots = minSpotsNC;
        selectedClassObject.MaxSpots = maxSpotsNC;

        const newObj = selectedClassObject;
        console.log(newObj);
        setClassObjects(
            [...classObjects, newObj],
            setShowSuccessfullyAdded(true)
        );
    };

    const renderWorkoutList = () => {
        return selectedClassObject.Workout.map((workoutpart, index) => (
            <div className="workoutPart" key={`${workoutpart.label}-${index}`}>
                <div className="workoutPartWrapper">
                    <b>{workoutpart.label}</b>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: workoutpart.text
                        }}
                    />
                </div>
                <button
                    className="deleteWorkout"
                    onClick={(e) => {
                        setWorkoutNC([
                            ...workoutNC.slice(0, index),
                            ...workoutNC.slice(index + 1)
                        ]);
                    }}
                >
                    X
                </button>
            </div>
        ));
    };



    return (
        <div className="classInfoWrapper">
            {showSuccessfullyAdded && (
                <div className="successfullyAddedLayer">
                    <h3>Sonderkurs erfolgreich hinzugefügt</h3>

                    <button
                        onClick={(e) => {
                            setClassMode("closed");
                        }}
                    >
                        zurück zur Kursübersicht
                    </button>
                </div>
            )}

            {!showSuccessfullyAdded && (
                <div className="classInfoBox">
                    <div className="classInfoInnerWrapper newclass">
                        <div className="classDetails newClass">
                            <div className="buttonsWrapper">
                                <button
                                    className="backBtn"
                                    onClick={(e) => setClassMode("closed")}
                                >
                                    X
                                </button>
                                <button
                                    className="saveClassBtn"
                                    onClick={(e) => saveChanges()}
                                >
                                    Kurs speichern
                                </button>
                            </div>

                            <div className="newClassInputs">
                                <div className="selectClassTypeWrapper">
                                    <h3 className="bigLabel">
                                        Kursart auswählen
                                    </h3>
                                    <div className="inputWrapper">

                                    <select
                                        className="chooseClassType"
                                        value={classTypeNC}
                                        onChange={(e) => {
                                            setClassTypeNC(e.target.value);
                                        }}
                                        >
                                        <option value="Sonderkurs">
                                            Sonderkurs
                                        </option>
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
                                </div>
                                <div className="minMaxInputWrapper">
                                    <h3 className="bigLabel">Teilnehmerzahl</h3>
                                    <div className="inputWrapper">
                                        <div>
                                            <label>minimal</label>
                                            <input
                                                value={minSpotsNC}
                                                onChange={(e) =>
                                                    setMinSpotsNC(
                                                        e.target.value
                                                    )
                                                }
                                                type="number"
                                                min="0"
                                            />
                                        </div>
                                        <div>
                                            <label>bis maximal</label>
                                            <input
                                                value={maxSpotsNC}
                                                onChange={(e) =>
                                                    setMaxSpotsNC(
                                                        e.target.value
                                                    )
                                                }
                                                type="number"
                                                min="0"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="startEndTimeInputWrapper">
                                    <h3 className="bigLabel">
                                        Uhrzeit und Datum
                                    </h3>
                                    <div className="inputWrapper">
                                        <input
                                            type="date"
                                            value={dateNC}
                                            onChange={(e)=>setDateNC(e.target.value)}
                                        />
                                    </div>
                                    <div className="inputWrapper time">
                                        <div>
                                            <label>von</label>
                                            <input
                                                value={startTimeNC}
                                                onChange={(e) =>
                                                    setStartTimeNC(
                                                        e.target.value
                                                    )
                                                }
                                                type="time"
                                            />
                                        </div>

                                        <div>
                                            <label>bis</label>
                                            <input
                                                value={endTimeNC}
                                                onChange={(e) =>
                                                    setEndTimeNC(e.target.value)
                                                }
                                                type="time"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="classDescriptionText">
                            <h3 className="bigLabel">Kursbeschreibung</h3>
                            <textarea
                                type="text"
                                name="descriptionTextArea"
                                value={classDescriptionNC}
                                onChange={(e) => {
                                    setClassDescriptionNC(e.target.value);
                                }}
                            />
                        </div>

                        <div className="classWorkout">
                            <div className="workoutHeadline">
                                <h3 className="bigLabel">Workout </h3>{" "}
                                <div>
                                    Coach:
                                    <select
                                        className="dropDownBox"
                                        value={coachNC}
                                        onChange={(e) => {
                                            setCoachNC(e.target.value);
                                        }}
                                    >
                                        <option value="Peter">Peter</option>
                                        <option value="Anke">Anke</option>
                                        <option value="Gerda">Gerda</option>
                                        <option value="Hans">Hans</option>
                                    </select>
                                </div>
                            </div>
                            {selectedClassObject.Workout.length > 0 &&<div className="workoutList">
                                {renderWorkoutList()}
                            </div>}
                        </div>
                        <button
                            className="addWorkoutBtn"
                            onClick={(e) => setClassMode("addworkout")}
                        >
                            + Workout-Komponente
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewClass;
