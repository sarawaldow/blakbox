import React, { useContext, useState , useEffect} from "react";
// import React from "react";
import { BBxContext } from "../components/BBxContext";

import "./class-info.scss";

export const ClassInfo = () => {
    const {
        selectedClassObject,
        setIsClassLayerVisible,
        todaysDateString,
        signedUpClasses,
        setSignedUpClasses,
        credits, setCredits
    } = useContext(BBxContext);

    const [showSignedUpList, setShowSignedUpList] = useState(false);
    
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


    useEffect(() => {
        console.log(signedUp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signedUp]);

    return (
        <div className="classInfoWrapper">
            <button onClick={(e) => setIsClassLayerVisible(false)}>
                Kursinfo schließen
            </button>
            <button>Kurs bearbeiten</button>

            <div className="classInfoBox">
                <div className="classInfoInnerWrapper">
                    <div className="classDetails">
                        <h2>{selectedClassObject.ClassType}</h2>
                        <div>
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
                            {selectedClassObject.Workout.map((workoutpart) => {
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
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="signedUpList">
                        <div
                            className="signedUpBtn"
                            onClick={(e) =>
                                setShowSignedUpList(!showSignedUpList)
                            }
                        >
                            <ul>
                                <b>Teilnehmerliste</b>
                                {showSignedUpList &&
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
    );
};

export default ClassInfo;
