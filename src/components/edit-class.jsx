import React, { useContext, useEffect, useState } from "react";
import { BBxContext } from "./BBxContext";

export const EditClass = () => {
    const {
        classObjects,
        selectedClassObject,
        selectedDate,
        setClassMode,
        changesMade,
        setChangesMade
    } = useContext(BBxContext);

    const classObject = classObjects[selectedClassObject.ClassKey];

    const [workout, setWorkout] = useState(classObject.Workout);
    const [coach, setCoach] = useState(classObject.Coach);
    const [signedUp, setSignedUp] = useState(classObject.SignedUp);
    const [classDescription, setClassDescription] = useState(
        classObject.ClassDescription
    );
    const [maxSpots, setMaxSpots] = useState(classObject.MaxSpots);
    const [minSpots, setMinSpots] = useState(classObject.MinSpots);

    useEffect(() => {
        console.log(workout);
    }, [workout]);

    useEffect(() => {
        console.log(classDescription);
    }, [classDescription]);

    useEffect(() => {
        console.log(coach);
    }, [coach]);
    useEffect(() => {
        console.log(signedUp);
    }, [signedUp]);

    const saveChanges = () => {
        classObjects[selectedClassObject.ClassKey].Workout = workout;
        classObjects[
            selectedClassObject.ClassKey
        ].ClassDescription = classDescription;
        classObjects[selectedClassObject.ClassKey].Coach = coach;
        classObjects[selectedClassObject.ClassKey].SignedUp = signedUp;
        classObjects[selectedClassObject.ClassKey].MinSpots = minSpots;
        classObjects[selectedClassObject.ClassKey].MaxSpots = maxSpots;
        setChangesMade(false);
    };
    const revertChanges = () => {
        setWorkout(classObjects[selectedClassObject.ClassKey].Workout);
        setClassDescription(
            classObjects[selectedClassObject.ClassKey].ClassDescription
        );
        setCoach(classObjects[selectedClassObject.ClassKey].Coach);
        setSignedUp(classObjects[selectedClassObject.ClassKey].SignedUp);
        setMinSpots(classObjects[selectedClassObject.ClassKey].MinSpots);
        setMaxSpots(classObjects[selectedClassObject.ClassKey].MaxSpots);
        setChangesMade(false);
    };

    const renderWorkoutList = () => {
        return workout.map((workoutpart, index) => (
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
                        setWorkout([
                            ...workout.slice(0, index),
                            ...workout.slice(index + 1)
                        ]);
                        setChangesMade(true);
                    }}
                >
                    X
                </button>
            </div>
        ));
    };

    const formatDate = (date) => {
        const dateString = date.toLocaleDateString();
        return dateString;
    }

    return (
        <div className="classInfoWrapper">
            <button
                className="backBtn"
                onClick={(e) => setClassMode("classinfo")}
            >
                zurück zum Kurs
            </button>

            <div className="classInfoBox">
                <div className="classInfoInnerWrapper">
                    <div className="classDetails">
                        Bearbeitungsmodus
                        {changesMade && (
                            <div className="saveBtnsWrapper">
                                <button
                                    className="revertChangesBtn"
                                    onClick={(e) => revertChanges()}
                                >
                                    Änderungen zurücksetzen
                                </button>
                                <button
                                    className="saveChangesBtn"
                                    onClick={(e) => saveChanges()}
                                >
                                    Änderungen speichern
                                </button>
                            </div>
                        )}
                        <h2>{classObject.ClassType}</h2>
                        <div>
                            {`(${
                                classObject.MaxSpots -
                                classObject.SignedUp.length
                            } freie Plätze) um ${classObject.StartTime}-${
                                classObject.EndTime
                            } am 
                            ${formatDate(selectedDate)}`}
                        </div>
                    </div>
                    <div className="minMaxInputWrapper">
                            Teilnehmeranzahl
                        <div>
                            <label>minimal</label>
                            <input
                                value={minSpots}
                                onChange={(e) => {
                                    setMinSpots(e.target.value);
                                    setChangesMade(true);
                                }}
                                type="number"
                                min="0"
                            />
                        </div>
                        <div>
                            <label>bis maximal</label>
                            <input
                                value={maxSpots}
                                onChange={(e) => {
                                    setMaxSpots(e.target.value);
                                    setChangesMade(true);
                                }}
                                type="number"
                                min="0"
                            />
                        </div>
                    </div>
                    <div className="classDescriptionText">
                        <label htmlFor="descriptionTextArea">
                            Beschreibung bearbeiten
                        </label>
                        <textarea
                            type="text"
                            name="descriptionTextArea"
                            value={classDescription}
                            onChange={(e) => {
                                setClassDescription(e.target.value);
                                setChangesMade(true);
                            }}
                        />
                    </div>

                    <div className="classWorkout">
                        <div className="workoutHeadline">
                            <h3>Workout </h3>{" "}
                            <div>
                                Coach:
                                <select
                                    className="dropDownBox"
                                    value={coach}
                                    onChange={(e) => {
                                        setCoach(e.target.value);
                                        setChangesMade(true);
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

                    <div className="signedUpAndWaitingList">
                        <div className="signedUpList">
                            <ul>
                                <b>Teilnehmer</b>
                                {signedUp.map((athlete, index) => {
                                    return (
                                        <li key={athlete}>
                                            {athlete}
                                            <button
                                                onClick={(e) =>
                                                    // deleteAthlete(index)
                                                    {
                                                        setSignedUp([
                                                            ...signedUp.slice(
                                                                0,
                                                                index
                                                            ),
                                                            ...signedUp.slice(
                                                                index + 1
                                                            )
                                                        ]);
                                                        setChangesMade(true);
                                                    }
                                                }
                                            >
                                                X
                                            </button>
                                        </li>
                                    );
                                })}
                                <button>Teilnehmer hinzufügen</button>
                            </ul>
                        </div>
                        <div className="waitingList">
                            <ul>
                                <b>Warteliste</b>
                                {classObject.Waiting.map((athlete) => {
                                    return <li key={athlete}>{athlete}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                    <button>Kurs löschen oder absagen</button>
                </div>
            </div>
        </div>
    );
};

export default EditClass;
