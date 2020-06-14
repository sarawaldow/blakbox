import React, { useContext, useEffect } from "react";
import { BBxContext } from "../components/BBxContext";

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

    useEffect(() => {
        console.log(selectedClassObject);
    }, [selectedClassObject]);

    useEffect(() => {
        console.log(workoutNC);
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
        setClassObjects([...classObjects, newObj], [setClassMode("closed")]);
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

    const formatToISODate = (date) => {
        const dateString =  date.toISOString().substring(0, 10);
        return dateString;
    };

    return (
        <div className="classInfoWrapper">
            <button className="backBtn" onClick={(e) => setClassMode("closed")}>
                zurück zum Kurs
            </button>

            <div className="classInfoBox">
                <div className="classInfoInnerWrapper newclass">
                    <div className="classDetails newClass">
                        <button
                            className="saveClassBtn"
                            onClick={(e) => saveChanges()}
                        >
                            Kurs speichern
                        </button>
                        {/* <h2>
                            Sonderkurs am {formatDate(selectedDate)} hinzufügen
                        </h2> */}
                        <div className="newClassInputs">
                            <div className="selectClassTypeWrapper">
                                <h3 className="bigLabel">Kursart auswählen</h3>
                                <select
                                    className="chooseClassType"
                                    value={classTypeNC}
                                    onChange={(e) => {
                                        setClassTypeNC(e.target.value);
                                    }}
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
                            <div className="minMaxInputWrapper">
                                <h3 className="bigLabel">Teilnehmerzahl</h3>
                                <div>
                                    <div>
                                        <label>minimal</label>
                                        <input
                                            value={minSpotsNC}
                                            onChange={(e) =>
                                                setMinSpotsNC(e.target.value)
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
                                                setMaxSpotsNC(e.target.value)
                                            }
                                            type="number"
                                            min="0"
                                        />
                                    </div>
                                </div>
                                {/* <label>Teilnehmer</label> */}
                            </div>
                            <div className="startEndTimeInputWrapper">
                                <h3 className="bigLabel">Uhrzeit und Datum</h3>
                                <div>
                                    <input type="date" value={formatToISODate(selectedDate)}/>
                                </div>
                                <div>
                                    <div>
                                        <label>von</label>
                                        <input
                                            value={startTimeNC}
                                            onChange={(e) =>
                                                setStartTimeNC(e.target.value)
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
                        <div className="workoutList">{renderWorkoutList()}</div>
                    </div>
                    <button
                        className="addWorkoutBtn"
                        onClick={(e) => setClassMode("addworkout")}
                    >
                        + Workout-Komponente
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewClass;
