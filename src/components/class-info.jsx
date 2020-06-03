import React, { useContext } from "react";
// import React from "react";
import { BBxContext } from "../components/BBxContext";

import "./class-info.scss";

export const ClassInfo = () => {
    const {
        selectedClassObject,
        setIsClassLayerVisible,
        todaysDateString,
        signedUpClasses,
        setSignedUpClasses
    } = useContext(BBxContext);

    return (
        <div className="classInfoWrapper">
            <h2>Kursinfo</h2>
            <button onClick={(e) => setIsClassLayerVisible(false)}>
                Kursinfo schließen
            </button>

            <div className="classInfoBox">
                <div className="classInfoInnerWrapper">
                    <div className="classDetails">
                        <h2>
                            {`${selectedClassObject.ClassType}  
                        ${selectedClassObject.StartTime}-${selectedClassObject.EndTime} am ${todaysDateString}`}
                        </h2>
                    </div>
                    <div className="classDescriptionText">
                        {selectedClassObject.ClassDescription}
                    </div>
                    <div className="classWorkout">
                        <h3>Workout</h3> <div>mit {selectedClassObject.Coach}</div>
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
                    <div className="signUpArea">
                        <div>00:02:30 bis Abmeldesperre</div>
                        <div className="signUpBtnWrapper">
                            <div className="signUpBtn" onClick={(e)=>setSignedUpClasses([...signedUpClasses, selectedClassObject.ClassKey])}>{signedUpClasses.includes(selectedClassObject.ClassKey)? "abmelden":"anmelden"}</div>
                            <div>x Anmeldungen übrig</div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default ClassInfo;
