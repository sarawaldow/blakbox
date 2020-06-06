import React, { useContext, useEffect, useState } from "react";
// import React from "react";
import { BBxContext } from "../components/BBxContext";
// import './header.css';

export const EditClass = () => {
    const {
        classObjects,
        // setClassObjects,
        todaysDateString,
        setClassMode,
        classDescription1,
        setClassDescription1,
        coach1,
        // setCoach1,
        workout1,
        setWorkout1,
        // freeSpots1,
        // setFreeSpots1,
        // maxSpots1,
        // setMaxSpots1,
        signedUp1,
        setSignedUp1
        // waiting1,
        // setWaiting1
    } = useContext(BBxContext);

    const classObject = classObjects[0];

    const deleteWorkout = (index) => {
        const arr = workout1;
        arr.splice(index, 1);
        setWorkout1(arr);
    };

    const deleteAthlete = (index) => {
        const arr = signedUp1;
        arr.splice(index, 1);
        setSignedUp1(arr);
    };

    useEffect(() => {
        console.log(workout1);
        console.log(classObject);
        classObjects[0].Workout = workout1;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [workout1]);

    useEffect(() => {
        console.log(classDescription1);
        classObjects[0].ClassDescription = classDescription1;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [classDescription1]);

    const [wodName, setWodName] = useState("");
    const [wodResult, setWodResult] = useState("For Time");
    const [wodDescription, setWodDescription] = useState("");

    // const [] = useState();

    const handleAddWorkout = (type) => {
        const arr = [];
        const obj = {};
        switch (type){
            case "WOD":
            obj.label = "WOD";
            obj.text = `${wodName}-${wodResult}<br/>${wodDescription}`;
            arr.push(obj);
            console.log(arr);
            setWorkout1([...workout1, obj]);
            break;
            default: return;
        }
    }

    const generateFormForWorkoutType = (type) => {
        switch (type) {
            case "WOD":
                return (
                    <div>
                        <input
                            type="text"
                            value={wodName}
                            onChange={(e) => setWodName(e.target.value)}
                            placeholder="WOD-Name"
                        />
                        <select
                            className="dropDownBox"
                            value={wodResult}
                            onChange={(e) => {
                                setWodResult(e.target.value);
                            }}
                        >
                            <option value="WOD">For Time</option>
                            <option value="WarmUp">AMRAP</option>
                            <option value="Strength">EMOM</option>
                            <option value="FindYourXRep">
                                EMOM (Score Reps)
                            </option>
                        </select>
                        <input
                            type="text"
                            value={wodDescription}
                            onChange={(e) => setWodDescription(e.target.value)}
                            placeholder="WOD-Beschreibung"
                        />
                    </div>
                );
            case "WarmUp":
                return <div>bla</div>;
            case "Strength":
                return <div>bla</div>;
            case "FindYourXRep":
                return <div>bla</div>;
            default:
                return <div>bla</div>;
        }
    };
    const showExistingListOfWorkoutType = (type) => {};

    const [selectedWorkoutType, setSelectedWorkoutType] = useState("WOD");
    const [showNewWorkoutSec, setShowNewWorkoutSec] = useState(false);

    return (
        <div className="classInfoWrapper">
            <button onClick={(e) => setClassMode("classinfo")}>
                zurück zum Kurs
            </button>
            <button onClick={(e) => setClassMode("classinfo")}>
                Änderungen speichern
            </button>

            <div className="classInfoBox">
                <div className="classInfoInnerWrapper">
                    {/* <div className="popUpBeforeDelete">
                        <p>Bist du sicher?</p>
                        <button>Nein, abbrechen</button>
                        <button>Ja, löschen</button>
                    </div>
                    <div className="popUpBeforeSave">
                        <p>Bist du sicher?</p>
                        <button>Nein, abbrechen</button>
                        <button>Ja, speichern</button>
                    </div> */}
                    <div className="classDetails">
                        <h2>{classObject.ClassType}</h2>
                        <div>
                            ({classObject.FreeSpots} freie Plätze) um{" "}
                            {classObject.StartTime}-{classObject.EndTime} am{" "}
                            {todaysDateString}
                        </div>
                    </div>
                    <div className="classDescriptionText">
                        <input
                            type="text"
                            value={classDescription1}
                            onChange={(e) =>
                                setClassDescription1(e.target.value)
                            }
                        />
                    </div>

                    <div className="classWorkout">
                        <div className="workoutHeadline">
                            <h3>Workout </h3> <div>mit Coach {coach1}</div>
                        </div>
                        <div className="workoutList">
                            {classObject.Workout.map((workoutpart, index) => {
                                return (
                                    <div
                                        className="workoutPart"
                                        key={`${workoutpart.label}-${index}`}
                                    >
                                        <b>{workoutpart.label}</b>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: workoutpart.text
                                            }}
                                        />
                                        <button
                                            onClick={(e) =>
                                                deleteWorkout(index)
                                            }
                                        >
                                            delete
                                        </button>
                                    </div>
                                );
                            })}
                            <button>neue Workout-Komponente</button>
                            <div>Komponente aussuchen:</div>
                            <select
                                className="dropDownBox"
                                value={selectedWorkoutType}
                                onChange={(e) => {
                                    setSelectedWorkoutType(e.target.value);
                                }}
                            >
                                <option value="WOD">WOD</option>
                                <option value="WarmUp">Warm-Up</option>
                                <option value="Strength">Strength</option>
                                <option value="FindYourXRep">
                                    Find-Your-X-Rep
                                </option>
                            </select>
                            <button onClick={(e) => setShowNewWorkoutSec(true)}>
                                neue {selectedWorkoutType} Komponente
                            </button>
                            {showNewWorkoutSec && (
                                <div className="newWorkoutBox">
                                    {generateFormForWorkoutType(
                                        selectedWorkoutType
                                    )}
                                    <button onClick={ (e) => handleAddWorkout(selectedWorkoutType)}>
                                        zum Workout hinzufügen
                                    </button>
                                </div>
                            )}
                            <button
                                onClick={showExistingListOfWorkoutType(
                                    selectedWorkoutType
                                )}
                            >
                                {selectedWorkoutType} suchen
                            </button>
                        </div>
                    </div>

                    <div className="signedUpList">
                        <div className="signedUpBtn">
                            <ul>
                                <b>Teilnehmer</b>
                                {classObject.SignedUp.map((athlete, index) => {
                                    return (
                                        <li key={athlete}>
                                            {athlete}
                                            <button
                                                onClick={(e) =>
                                                    deleteAthlete(index)
                                                }
                                            >
                                                delete
                                            </button>
                                        </li>
                                    );
                                })}
                                <button>Teilnehmer hinzufügen</button>
                            </ul>
                            {/* <ul>
                                <b>Teilnehmerliste</b>
                                {showSignedUpList &&
                                    selectedClassObject.SignedUp.map(
                                        (athlete) => {
                                            return <li key={athlete}>{athlete}</li>;
                                        }
                                    )}
                            </ul> */}
                        </div>
                    </div>
                    <button>Kurs löschen oder absagen</button>
                </div>
            </div>
        </div>
    );
};

export default EditClass;
