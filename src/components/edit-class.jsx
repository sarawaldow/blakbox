import React, { useContext, useEffect } from "react";
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
        setCoach1,
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

    // const classObject = classObjects[0];

    useEffect(() => {
        console.log(workout1);
        console.log(classObjects[0]);
        classObjects[0].Workout = workout1;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [workout1]);

    useEffect(() => {
        console.log(classDescription1);
        classObjects[0].ClassDescription = classDescription1;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [classDescription1]);

    useEffect(() => {
        console.log(coach1);
        classObjects[0].Coach = coach1;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coach1]);
    useEffect(() => {
        console.log(signedUp1);
        classObjects[0].SignedUp = signedUp1;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signedUp1]);

    const renderWorkoutList = () => {
        return(
            workout1.map((workoutpart, index) => 
                
                    <div
                        className="workoutPart"
                        key={`${workoutpart.label}-${index}`}
                    >
                        <div className="workoutPartWrapper">
                            <b>{workoutpart.label}</b>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: workoutpart.text
                                }}
                            />
                        </div>
                        <button className="deleteWorkout"
                            onClick={(e) =>
                                // deleteWorkout(index)
                                setWorkout1([...workout1.slice(0,index), ...workout1.slice(index+1)])

                            }
                        >X</button>
                    </div>
             
            )
        )
    }

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
                        Bearbeitungsmodus
                        <h2>{classObjects[0].ClassType}</h2>
                        <div>
                            ({classObjects[0].FreeSpots} freie Plätze) um{" "}
                            {classObjects[0].StartTime}-{classObjects[0].EndTime} am{" "}
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
                            <h3>Workout </h3>{" "}
                            <div>
                                mit Coach{" "}
                                <select
                                    className="dropDownBox"
                                    value={coach1}
                                    onChange={(e) => {
                                        setCoach1(e.target.value);
                                    }}
                                >
                                    <option value="Peter">Peter</option>
                                    <option value="Anke">Anke</option>
                                    <option value="Gerda">Gerda</option>
                                    <option value="Hans">Hans</option>
                                </select>
                            </div>
                        </div>
                        <div className="workoutList">
                                    {renderWorkoutList()}
                        </div>
                    </div>
                            <button onClick={(e)=>setClassMode("addworkout")}>Workout hinzufügen</button>

                    <div className="signedUpList">
                        <div className="signedUpBtn">
                            <ul>
                                <b>Teilnehmer</b>
                                {signedUp1.map((athlete, index) => {
                                    return (
                                        <li key={athlete}>
                                            {athlete}
                                            <button
                                                onClick={(e) =>
                                                    // deleteAthlete(index)
                                                    setSignedUp1([...signedUp1.slice(0,index), ...signedUp1.slice(index+1)])
                                                }
                                            >
                                                X
                                            </button>
                                        </li>
                                    );
                                })}
                                <button>Teilnehmer hinzufügen</button>
                            </ul>
                            <ul>
                                <b>Warteliste</b>
                                {classObjects[0].Waiting.map((athlete) => {
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
