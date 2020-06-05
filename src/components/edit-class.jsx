import React, { useContext, useEffect } from "react";
// import React from "react";
import { BBxContext } from "../components/BBxContext";
// import './header.css';

export const EditClass = () => {
    const {
        classObjects,
        todaysDateString, setClassMode,
        classDescription1,
        setClassDescription1,
        coach1,
        // setCoach1,
        workout1,
        setWorkout1
        // freeSpots1,
        // setFreeSpots1,
        // maxSpots1,
        // setMaxSpots1,
        // signedUp1,
        // setSignedUp1,
        // waiting1,
        // setWaiting1
    } = useContext(BBxContext);

    // setSelectedClassObject(classObjects[0]);

    const classObject = classObjects[0];
    const deleteWorkout = (index) => {
        const arr = workout1;
        arr.splice(index, 1);
        setWorkout1(arr);
    };

    useEffect(() => {
        console.log(workout1);
    }, [workout1]);

    useEffect(() => {
        console.log(classDescription1);
    }, [classDescription1]);

    // const deleteSignedUp = (index) => {

    // }

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
                    <div className="classDetails">
                        <h2>{classObject.ClassType}</h2>
                        <div>
                            ({classObject.FreeSpots} freie Plätze) um{" "}
                            {classObject.StartTime}-{classObject.EndTime} am{" "}
                            {todaysDateString}
                        </div>
                    </div>
                    <div className="classDescriptionText">
                        <input type="text" value={classDescription1} onChange={(e)=>setClassDescription1(e.target.value)}/>
                    </div>

                    <div className="classWorkout">
                        <div className="workoutHeadline">
                            <h3>Workout </h3> <div>mit Coach {coach1}</div>
                        </div>
                        <div className="workoutList">
                            {workout1.map((workoutpart, index) => {
                                return (
                                    <div
                                        className="workoutPart"
                                        key={workoutpart.label}
                                    >
                                        <b>{workoutpart.label}</b>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: workoutpart.text
                                            }}
                                        />
                                        <button
                                            onClick={(e) =>
                                                {deleteWorkout(index)}
                                            }
                                        >
                                            delete
                                        </button>
                                    </div>
                                );
                            })}
                            <button>neue Workout-Komponente</button>
                        </div>
                    </div>

                    <div className="signedUpList">
                        <div className="signedUpBtn">
                            <ul>
                                <b>Teilnehmer</b>
                                {classObject.SignedUp.map((athlete) => {
                                    return (
                                        <li key={athlete}>
                                            {athlete} <button>delete</button>
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
                </div>
            </div>
        </div>
    );
};

export default EditClass;
