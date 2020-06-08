import React, { useContext, useState, useEffect } from "react";
// import React from "react";
import { BBxContext } from "../components/BBxContext";

import "./class-info.scss";

export const ClassInfo = () => {
    const {
        classObjects,
        selectedClassObject,
        todaysDateString,
        signedUpClasses,
        memberType,
        userName,
        setSignedUpClasses,
        credits,
        setCredits,
        setClassMode
    } = useContext(BBxContext);

    const classKey = selectedClassObject.ClassKey;

    const [signedUp, setSignedUp] = useState(
        signedUpClasses.includes(classKey)
    );

    const [signedUpList, setSignedUpList] = useState(
        selectedClassObject.SignedUp
    );
    const [waitingList, setWaitingList] = useState(selectedClassObject.Waiting);

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
        console.log(signedUpList);
        classObjects[selectedClassObject.ClassKey].SignedUp = signedUpList;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signedUpList]);

    useEffect(() => {
        console.log(waitingList);
        classObjects[selectedClassObject.ClassKey].Waiting = waitingList;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [waitingList]);

    const waitingListSignUpOrOffHandler = () => {
        if (signedUp) {
            const newArr = signedUpClasses;
            console.log(newArr);
            newArr.splice(newArr.indexOf(classKey), 1);
            console.log(newArr);
            setSignedUpClasses(newArr);
            setSignedUp(false);
            setCredits(credits + 1);
            console.log("indexOf username", waitingList.indexOf(userName));
            setWaitingList([
                ...waitingList.slice(0, waitingList.indexOf(userName)),
                ...waitingList.slice(waitingList.indexOf(userName) + 1)
            ]);
        } else {
            setSignedUpClasses([...signedUpClasses, classKey]);
            setSignedUp(true);
            setCredits(credits - 1);
            setWaitingList([...waitingList, userName]);
        }
    };

    const signUpOrOffHandler = () => {
        if (signedUp) {
            const newArr = signedUpClasses;
            console.log(newArr);
            newArr.splice(newArr.indexOf(classKey), 1);
            console.log(newArr);
            setSignedUpClasses(newArr);
            setSignedUp(false);
            setCredits(credits + 1);
            console.log("indexOf username", signedUpList.indexOf(userName));
            setSignedUpList([
                ...signedUpList.slice(0, signedUpList.indexOf(userName)),
                ...signedUpList.slice(signedUpList.indexOf(userName) + 1)
            ]);
        } else {
            setSignedUpClasses([...signedUpClasses, classKey]);
            setSignedUp(true);
            setCredits(credits - 1);
            setSignedUpList([...signedUpList, userName]);
        }
    };

    useEffect(() => {
        console.log(signedUp);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signedUp]);

    return (
        <div className="classInfoWrapper">
            <div>
                <div className="topBtnsWrapper">
                <button
                    className="backBtn"
                    onClick={(e) => setClassMode("closed")}
                    >
                    Kursinfo schließen
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
                                } am ${todaysDateString}`}
                            </div>
                        </div>
                        <div className="classDescriptionText">
                            {selectedClassObject.ClassDescription}
                        </div>

                        <div className="signUpArea">
                            <div>02:30h bis Abmeldesperre</div>
                            <div className="signUpBtnWrapper">
                                {/* <div
                                    className="signUpBtn"
                                    onClick={(e) =>
                                        signUpOrOffHandler(classKey)
                                    }
                                >
                                    {signedUp ? "abmelden" : "anmelden"}
                                </div> */}
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
                            <div className="waitingList">
                                <ul>
                                    <b>Warteliste</b>

                                    {waitingList.map((athlete) => {
                                        return <li key={athlete}>{athlete}</li>;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassInfo;
