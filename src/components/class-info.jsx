import React, { useContext, useState , useEffect} from "react";
// import React from "react";
import { BBxContext } from "../components/BBxContext";

import "./class-info.scss";

export const ClassInfo = () => {
    const {
        // classObjects,
        selectedClassObject,
        todaysDateString,
        signedUpClasses,
        classDescription1,
        setSignedUpClasses,
        credits, setCredits, setClassMode
        // , setFreeSpots1, setFreeSpots2, setFreeSpots3, setFreeSpots4
    } = useContext(BBxContext);
    
    // const [showSignedUpList, setShowSignedUpList] = useState(false);
    
    const classKey = selectedClassObject.ClassKey;
    
    const [signedUp, setSignedUp] = useState(signedUpClasses.includes(classKey));
    
    const signUpOrOffHandler = () => {
        if (signedUp){
            const newArr = signedUpClasses;
            console.log(newArr);
            newArr.splice(newArr.indexOf(classKey),1);
            console.log(newArr);
            setSignedUpClasses(newArr);
            setSignedUp(false);
            setCredits(credits + 1);

        }else{
            setSignedUpClasses([...signedUpClasses, classKey]);
            setSignedUp(true);
            setCredits(credits - 1);

        }
    };

console.log(classDescription1);

    useEffect(() => {
        console.log(signedUp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signedUp]);


    return (
        <div className="classInfoWrapper">
            <div><button onClick={(e) => setClassMode("closed")}>
                Kursinfo schließen
            </button>
            <button onClick={(e)=>setClassMode("editclass")}>Kurs bearbeiten</button>

            <div className="classInfoBox">
                <div className="classInfoInnerWrapper">
                    <div className="classDetails">
                        <h2>{selectedClassObject.ClassType}</h2>
                        <div>({selectedClassObject.FreeSpots} freie Plätze)
                            um {selectedClassObject.StartTime}-
                            {selectedClassObject.EndTime} am {todaysDateString}
                        </div>
                    </div>
                    <div className="classDescriptionText">
                        {selectedClassObject.ClassDescription}
                    </div>

                    <div className="signUpArea">
                        <div>02:30h bis Abmeldesperre</div>
                        <div className="signUpBtnWrapper">
                            <div
                                className="signUpBtn"
                                onClick={(e) => signUpOrOffHandler(classKey)}
                            >
                                {signedUp ? "abmelden": "anmelden"}
                            </div>
                            <div>{credits} Anmeldungen übrig</div>
                        </div>
                    </div>

                    <div className="classWorkout">
                        <div className="workoutHeadline">
                            <h3>Workout </h3>{" "}
                            <div>mit Coach {selectedClassObject.Coach}</div>
                        </div>
                        <div className="workoutList">
                            {selectedClassObject.Workout.map((workoutpart, index) => {
                                return (
                                    <div
                                        className="workoutPart"
                                        key={`${workoutpart.label}-${index}`}
                                    ><div className="workoutPartWrapper">
                                        <b>{workoutpart.label}</b>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: workoutpart.text
                                            }}
                                        />

                                    </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="signedUpList">
                        <div className="signedUpBtn" >
                            <ul>
                                <b>Teilnehmer</b>
                                {
                                    selectedClassObject.SignedUp.map(
                                        (athlete) => {
                                            return <li key={athlete}>{athlete}</li>;
                                        }
                                    )}
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
        </div>
    );
};

export default ClassInfo;
