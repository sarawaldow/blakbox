import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";
import { useState } from "react";

export const ClassSettings = () => {
    const {
        setClassMode,
        signUpTime,
        setSignUpTime,
        signOffTill,
        setSignOffTill,
        workoutVisibilityTime,
        setWorkoutVisibilityTime,
        checkSignedUp,
        setCheckSignedUp
    } = useContext(BBxContext);

    const [areSettingsVisible, setAreSettingsVisible] = useState(false);

    const [dummySignUpTime, setDummySignUpTime] = useState(signUpTime);
    const [dummySignOffTill, setDummySignOffTill] = useState(signOffTill);
    const [
        dummyWorkoutVisibilityTime,
        setDummyWorkoutVisibilityTime
    ] = useState(workoutVisibilityTime);
    const [dummyCheckSignedUp, setDummyCheckSignedUp] = useState(checkSignedUp);

    const saveSettingChanges = () => {
        setSignUpTime(dummySignUpTime);
        setSignOffTill(dummySignOffTill);
        setWorkoutVisibilityTime(dummyWorkoutVisibilityTime);
        setCheckSignedUp(dummyCheckSignedUp);
    };
    return (
        <div className="classSettingsWrapper">
            <div
                onClick={(e) => setAreSettingsVisible(!areSettingsVisible)}
                className="showSettingsToggleBtn"
            >
                <h3>allgemeine Kurseinstellungen</h3>
            </div>
            {areSettingsVisible && (
                <div className="settingsWrapper">
                    <div className="inputsWrapper">
                        <div>
                            Anmelden möglich ab{" "}
                            <input
                                type="number"
                                min="0"
                                value={dummySignUpTime}
                                onChange={(e)=>setDummySignUpTime(e.target.value)}
                            />
                            Tage vor Kursbeginn
                        </div>
                        <div>
                            Abmeldesperre ab{" "}
                            <input
                                type="number"
                                step="0.5"
                                value={dummySignOffTill}
                                onChange={(e)=>setDummySignOffTill(e.target.value)}
                            />
                            Stunden vor Kursbeginn
                        </div>
                        <div>
                            Workout anzeigen ab{" "}
                            <input
                                type="number"
                                step="0.5"
                                value={dummyWorkoutVisibilityTime}
                                onChange={(e)=>setDummyWorkoutVisibilityTime(e.target.value)}
                            />
                            Stunden vor Kursbeginn
                        </div>
                        <div>
                            Teilnehmerminimum überprüfen{" "}
                            <input
                                type="number"
                                step="0.5"
                                value={dummyCheckSignedUp}
                                onChange={(e)=>setDummyCheckSignedUp(e.target.value)}
                            />
                            Stunden vor Kursbeginn
                        </div>
                    </div>
                    <button onClick={(e)=>saveSettingChanges()}>Änderungen speichern</button>
                </div>
            )}
        </div>
    );
};
export default ClassSettings;
