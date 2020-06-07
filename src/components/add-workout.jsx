import React, { useState, useContext } from "react";
import { BBxContext } from "../components/BBxContext";
import { useEffect} from "react";
// import { render } from "@testing-library/react";

import './add-workout.scss';

export const AddWorkout = () => {
    const { workout1, setWorkout1, setClassMode} = useContext(BBxContext);

    const [selectedWorkoutType, setSelectedWorkoutType] = useState("WOD");
    const [showSelectWorkoutType, setShowSelectWorkoutType] = useState(false);
    const [addWorkoutOpt, setAddWorkoutOpt] = useState("");

    const [workoutName, setWorkoutName] = useState("");
    const [workoutResult, setWorkoutResult] = useState("For Time");
    const [workoutDescription, setWorkoutDescription] = useState("");

    useEffect(() => {
        console.log(workout1);
    }, [workout1]);

    const handleAddNewWorkout = (type) => {
        const arr = [];
        const obj = {};
        switch (type) {
            case "WOD":
                obj.label = "WOD";
                obj.text = `${workoutName}<br/>${workoutResult}<br/>${workoutDescription}`;
                arr.push(obj);
                console.log(arr);
                setWorkout1([...workout1, obj]);
                break;
            // case "WarmUp":
            //     obj.label = "Warm-Up";
            //     obj.text = `${workoutName}<br/>{wodDescription}`;
            //     arr.push(obj);
            //     console.log(arr);
            //     setWorkout1([...workout1, obj]);
            //     break;

            default:
                return;
        }
        setShowSelectWorkoutType(false);
        setClassMode("editclass")
    };
    
    const handleAddOldWorkout = () => {
        setWorkout1([...workout1, selectedWOD]);
        setClassMode("editclass")
    };

    const listOfBoxWods = [
        { label: "Box-WOD 1", text: "EMOM" },
        {
            label: "Box-WOD 2",
            text: "For Time<br/>5 Runden<br/>800m Laufen<br/>40 Pull-Ups"
        },
        { label: "Box-WOD 3", text: "AMRAP 15<br/>50 Squads<br/>50 Burpees" }
    ];
    const listOfBenchmarkWods = [
        {
            label: "Cindy",
            text: "AMRAP 20<br/>5 Pull-Ups<br/>10 Push-Ups<br/> 15 Squats"
        },
        {
            label: "Helen",
            text:
                "For Time<br/>3 Runden<br/>400m Laufen<br/>21 Kettlebell Swings(24/16kg)<br/> 12 Pull-Ups"
        },
        {
            label: "Jackie",
            text:
                "For Time<br/>1km Rudern<br/>50 Thrusters 20/15kg<br/>30 Pull-Ups"
        }
    ];

    const [selectedWodType, setSelectedWodType] = useState("boxWOD");
    const [selectedWOD, setSelectedWOD] = useState({});
    const selectWorkout = (obj) => {
        setSelectedWOD(obj);
    };
    
    useEffect(() => {
        console.log(selectedWOD);
    }, [selectedWOD]);

    const generateSearchForWorkoutType = () => {
        return (
            <div className="searchWODBox">
                <input type="text" placeholder="suche..." />
                <div
                    className="wodOptions"
                    onChange={(e) => setSelectedWodType(e.target.value)}
                >
                    <input type="radio" value="boxWOD" id="boxWOD" name="wodOpt" /> <label htmlFor="boxWOD">Box-WODs</label>
                    <input
                        type="radio" id="benchmarkWOD"
                        value="benchmarkWOD"
                        name="wodOpt"
                    />
                    <label htmlFor="benchmarkWOD">Benchmark-WODs</label>
                </div>
                <div>
                    Wähle ein WOD
                    {selectedWodType === "boxWOD" &&
                        listOfBoxWods.map((workoutpart, index) => {
                            return (
                                <div
                                onClick={(e) => selectWorkout(listOfBoxWods[index])
                                }
                                    className={
                                        selectedWOD === listOfBoxWods[index]
                                            ? "workoutPart framed selected"
                                            : "workoutPart framed"
                                    }
                                    // className="workoutPart framed"
                                    key={`${workoutpart.label}-${index}`}
                                >
                                    <div className="workoutPartWrapper ">
                                        <b>{workoutpart.label}</b>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: workoutpart.text
                                            }}
                                        />
                                    </div>
                                    <button
                                        className="selectWOD" 
                                    >
                                        wählen
                                    </button>
                                </div>
                            );
                        })}
                    {selectedWodType === "benchmarkWOD" &&
                        listOfBenchmarkWods.map((workoutpart, index) => {
                            return (
                                <div
                                onClick={(e) =>
                                    selectWorkout(listOfBenchmarkWods[index])
                                }
                                className={
                                    selectedWOD === listOfBenchmarkWods[index]
                                        ? "workoutPart framed selected"
                                        : "workoutPart framed"
                                }
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
                                    <button
                                        className="selectWOD"

                                    >
                                        wählen
                                    </button>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    };

    const generateFormForWorkoutType = (type) => {
        switch (type) {
            case "WOD":
                return (
                    <div className="newWorkoutInputBox">
                        <input
                            className="workoutNameInput"
                            type="text"
                            value={workoutName}
                            onChange={(e) => setWorkoutName(e.target.value)}
                            placeholder="WOD-Name"
                        />
                        <select
                            className="dropDownBox"
                            value={workoutResult}
                            onChange={(e) => {
                                setWorkoutResult(e.target.value);
                            }}
                        >
                            <option value="For Time">For Time</option>
                            <option value="AMRAP">AMRAP</option>
                            <option value="EMOM">EMOM</option>
                            <option value="EMOM (Score Reps)">
                                EMOM (Score Reps)
                            </option>
                        </select>
                        <input
                            type="text"
                            value={workoutDescription}
                            onChange={(e) => setWorkoutDescription(e.target.value)}
                            placeholder="WOD-Beschreibung"
                        />
                    </div>
                );
            case "Warm-Up":
                return (
                    <div className="newWorkoutInputBox">
                        <input
                            className="workoutNameInput"
                            type="text"
                            placeholder="Warm-Up-Name"
                        />
                        <input type="text" placeholder="Warm-Up-Beschreibung" />
                    </div>
                );
            case "Strength":
                return (
                    <div className="newWorkoutInputBox">
                        <input
                            className="workoutNameInput"
                            type="text"
                            placeholder="Strength-Name"
                        />
                        <input
                            type="text"
                            placeholder="Strength-Beschreibung"
                        />
                    </div>
                );
            case "FindYourXRep":
                return <div>bla</div>;
            default:
                return <div>bla</div>;
        }
    };

    return (
        <div className="addWorkoutBox">
            <button
                className="addWorkoutBtn"
                onClick={(e) => setShowSelectWorkoutType(true)}
            >
                + Workout-Komponente
            </button>
            {showSelectWorkoutType && (
                <div className="addWorkoutBoxCard">
                    <div>Komponente aussuchen:</div>
                    <select
                        className="dropDownBox"
                        value={selectedWorkoutType}
                        onChange={(e) => {
                            setSelectedWorkoutType(e.target.value);
                        }}
                    >
                        <option value="WOD">WOD</option>
                        <option value="Warm-Up">Warm-Up</option>
                        <option value="Strength">Strength</option>
                        <option value="FindYourXRep">Find-Your-X-Rep</option>
                    </select>
                    <div className="radiosWrapper">
                        <div
                            className="addingWorkoutOptions"
                            onChange={(e) => setAddWorkoutOpt(e.target.value)}
                        >
                            <input
                                type="radio"
                                value="newWorkout"
                                name="addWorkoutOpt"
                                id="newWorkout"
                                />
                            <label htmlFor="newWorkout">neue {selectedWorkoutType} Komponente</label>

                            <input
                                type="radio"
                                value="searchWorkout"
                                name="addWorkoutOpt"
                                id="searchWorkout"
                            />
                            <label htmlFor="searchWorkout">{selectedWorkoutType} suchen</label>
                            
                        </div>
                    </div>

                    {addWorkoutOpt === "newWorkout" && (
                        <div className="newWorkoutBox">
                            {generateFormForWorkoutType(selectedWorkoutType)}
                            <button
                                onClick={(e) => {
                                    handleAddNewWorkout(selectedWorkoutType);
                                }}
                            >
                                zum Workout hinzufügen
                            </button>
                        </div>
                    )}
                    {addWorkoutOpt === "searchWorkout" && (
                        <div className="searchWorkoutBox">
                            {generateSearchForWorkoutType()}
                            <button
                                onClick={(e) =>
                                    handleAddOldWorkout(selectedWorkoutType)
                                }
                            >
                                zum Workout hinzufügen
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AddWorkout;
