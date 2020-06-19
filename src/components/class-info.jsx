import React, { useContext, useState, useEffect } from "react";
// import React from "react";
import { BBxContext } from "../components/BBxContext";

import "./class-info.scss";

export const ClassInfo = () => {
    const {
        classObjects,
        selectedClassObject,
        signedUpClasses,
        memberType,
        userName,
        setSignedUpClasses,
        credits,
        setCredits,
        setClassMode,
        selectedDate, setSelectedDate,todaysDate
    } = useContext(BBxContext);

    const classKey = selectedClassObject.ClassKey;

    const signedUpClassObj = { Key: classKey, Date: selectedDate };

    
    const isAlreadySignedUp = () => {
        let isSignedUp = false;
        // eslint-disable-next-line array-callback-return
        signedUpClasses.map((oneClass) => {
            if (oneClass.Key === signedUpClassObj.Key && selectedDate === signedUpClassObj.Date){
                isSignedUp = true
            }
        });
        return isSignedUp;
    };
    
    const [signedUp, setSignedUp] = useState(isAlreadySignedUp());

    const [signedUpList, setSignedUpList] = useState(
        selectedClassObject.SignedUp
    );
    const [waitingList, setWaitingList] = useState(selectedClassObject.Waiting);

    const [showSuccessfullySignedUp, setShowSuccessfullySignedUp] = useState(false);

    const checkIfClassIsFull = () => {
        if (
            selectedClassObject.SignedUp.length >=
                selectedClassObject.MaxSpots &&
            !selectedClassObject.SignedUp.includes(userName)
        ) {
            return (
                <div
                    className="signUpBtn"
                    onClick={(e) => waitingListSignUpOrOffHandler(classKey)}
                >
                    {signedUp
                        ? "Warteliste verlassen"
                        : "auf Warteliste setzen"}
                </div>
            );
        } else {
            return (
                <div
                    className="signUpBtn"
                    onClick={(e) => signUpOrOffHandler(classKey)}
                >
                    {signedUp ? "abmelden" : "anmelden"}
                </div>
            );
        }
    };

    useEffect(() => {
        // console.log(signedUp);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signedUp]);

    useEffect(() => {
        console.log("signedUpClasses",signedUpClasses);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signedUpClasses]);

    useEffect(() => {
        // console.log(signedUpList);
        classObjects[selectedClassObject.ClassKey].SignedUp = signedUpList;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signedUpList]);

    useEffect(() => {
        // console.log(waitingList);
        classObjects[selectedClassObject.ClassKey].Waiting = waitingList;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [waitingList]);

    const waitingListSignUpOrOffHandler = () => {
        if (signedUp) {
            const newArr = signedUpClasses;
            newArr.splice(newArr.indexOf(signedUpClassObj), 1);
            setSignedUpClasses(newArr);
            setSignedUp(false);
            
            setWaitingList([
                ...waitingList.slice(0, waitingList.indexOf(userName)),
                ...waitingList.slice(waitingList.indexOf(userName) + 1)
            ]);
        } else {
            setSignedUpClasses([...signedUpClasses, signedUpClassObj]);
            setSignedUp(true);

            setWaitingList([...waitingList, userName]);
        }
    };

    const signUpOrOffHandler = () => {
        console.log("signUpOrOffHandler");
        
        if (signedUp) {
            console.log("signUpOrOffHandler signedUp");
            const newArr = signedUpClasses;
            newArr.splice(newArr.indexOf(signedUpClassObj), 1);
            setSignedUpClasses(newArr);
            setSignedUp(false);
            setCredits(credits + 1);
            
            setSignedUpList([
                ...signedUpList.slice(0, signedUpList.indexOf(userName)),
                ...signedUpList.slice(signedUpList.indexOf(userName) + 1)
            ]);
        } else {
            console.log("signUpOrOffHandler not signedUp");
            const newArr = signedUpClasses;
            // console.log("zhe old signed up classes:", signedUpClasses, "the new class:",signedUpClassObj);
            newArr.push(signedUpClassObj);
            setSignedUpClasses(newArr);
            setSignedUp(true);
            setCredits(credits - 1);
            setSignedUpList([...signedUpList, userName]);
            setShowSuccessfullySignedUp(true);
        }
    };

    const formatDate = (date) => {
        const dateString = date.toLocaleDateString();
        return dateString;
    };

    return (
        <div className="classInfoWrapper">
            {showSuccessfullySignedUp && (
                <div className="successfullyAddedLayer">
                    <h3>
            Erfolgreich für den Kurs {selectedClassObject.ClassType} am {formatDate(selectedDate)} um {selectedClassObject.StartTime} angemeldet.
                    </h3>
                    <p>Abmeldung noch 2:30 h möglich.</p>

                    <button
                        onClick={(e) => {
                            setClassMode("closed");setSelectedDate(todaysDate)
                        }}
                    >
                        zurück zur Kursübersicht
                    </button>
                </div>
            )}
            {!showSuccessfullySignedUp&&<div>
                <div className="topBtnsWrapper">
                    <button
                        className="backBtn"
                
                onClick={(e) => {setClassMode("closed");setSelectedDate(todaysDate)}}
                    >
                        X
                    </button>
                    {memberType !== "Athlet" && (
                        <button
                            className="editClassBtn"
                            onClick={(e) => setClassMode("editclass")}
                        >
                            Kurs bearbeiten
                        </button>
                    )}
                </div>

                <div className="classInfoBox">
                    <div className="classInfoInnerWrapper">
                        <div className="classDetails">
                            <h2>{selectedClassObject.ClassType}</h2>
                            <div>
                                {`(${
                                    selectedClassObject.MaxSpots -
                                    selectedClassObject.SignedUp.length
                                } freie Plätze) um ${
                                    selectedClassObject.StartTime
                                }
                                - ${
                                    selectedClassObject.EndTime
                                } am ${formatDate(selectedDate)}`}
                            </div>
                        </div>
                        <div className="classDescriptionText">
                            {selectedClassObject.ClassDescription}
                        </div>

                        <div className="signUpArea">
                            <div>02:30h bis Abmeldesperre</div>
                            <div className="signUpBtnWrapper">
                                {checkIfClassIsFull()}
                                <div>{credits} Anmeldungen übrig</div>
                            </div>
                        </div>

                        <div className="classWorkout">
                            <div className="workoutHeadline">
                                <h3>Workout </h3>{" "}
                                <div>mit Coach {selectedClassObject.Coach}</div>
                            </div>
                            <div className="workoutList">
                                {selectedClassObject.Workout.map(
                                    (workoutpart, index) => {
                                        return (
                                            <div
                                                className="workoutPart"
                                                key={`${workoutpart.label}-${index}`}
                                            >
                                                <div className="workoutPartWrapper">
                                                    <b>{workoutpart.label}</b>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                workoutpart.text
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>

                        <div className="signedUpAndWaitingList">
                            <div className="signedUpList">
                                <ul>
                                    <b>Teilnehmer</b>
                                    {signedUpList.map((athlete) => {
                                        return <li key={athlete}>{athlete}</li>;
                                    })}
                                </ul>
                            </div>
                            {waitingList.length >0 && <div className="waitingList">
                                <ul>
                                    <b>Warteliste</b>

                                    {waitingList.map((athlete) => {
                                        return <li key={athlete}>{athlete}</li>;
                                    })}
                                </ul>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    );
};

export default ClassInfo;
