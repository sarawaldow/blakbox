import React, { useState, useContext } from "react";
import { BBxContext } from "../components/BBxContext";
import { useEffect } from "react";
// import { render } from "@testing-library/react";

import "./add-workout.scss";

export const AddWorkout = () => {
    const {
        setClassMode,
        classObjects,
        selectedClassObject
        // setChangesMade
    } = useContext(BBxContext);
    const [showSuccessfullyAdded, setShowSuccessfullyAdded] = useState(false);
    // const classObject = classObjects[selectedClassObject.ClassKey];
    const classObject = selectedClassObject;

    const [selectedWorkoutType, setSelectedWorkoutType] = useState("WOD");
    const [addWorkoutOpt, setAddWorkoutOpt] = useState("");
    const [selectedWodType, setSelectedWodType] = useState("");
    const [selectedWOD, setSelectedWOD] = useState({});

    const [workoutName, setWorkoutName] = useState("");
    const [workoutResult, setWorkoutResult] = useState("For Time");
    const [workoutDescription, setWorkoutDescription] = useState("");

    const [workout, setWorkout] = useState(classObject.Workout);

    useEffect(() => {
        console.log(workout);
        // classObjects[selectedClassObject.ClassKey].Workout = workout;
        selectedClassObject.Workout = workout;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [workout]);

    const handleAddNewWorkout = (type) => {
        const arr = [];
        const obj = {};
        setWorkoutDescription(workoutDescription);
        switch (type) {
            case "WOD":
                obj.label = "WOD";
                obj.text = `${workoutName}<br/>${workoutResult}<br/>${workoutDescription}`;
                arr.push(obj);
                console.log(arr);
                setWorkout([...workout, obj]);
                break;
            case "Warm-Up":
                obj.label = "Warm-Up";
                obj.text = `${workoutName}<br/>${workoutDescription}`;
                arr.push(obj);
                console.log("arr:", arr);
                setWorkout([...workout, obj]);
                break;
            case "Strength":
                obj.label = "Strength";
                obj.text = `${workoutName}<br/>${workoutDescription}`;
                arr.push(obj);
                console.log("arr:", arr);
                setWorkout([...workout, obj]);
                break;
            case "Find-Your-X-Rep":
                obj.label = `Find-Your-X-Rep-${workoutResult}`;
                obj.text = `${workoutName}<br/>${workoutDescription}`;
                arr.push(obj);
                console.log(arr);
                setWorkout([...workout, obj]);
                break;
            default:
                return;
        }
        setShowSuccessfullyAdded(true);
    };

    const handleAddOldWorkout = () => {
        setWorkout([...workout, selectedWOD]);
        setShowSuccessfullyAdded(true);
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

    useEffect(() => {
        console.log(selectedWOD);
    }, [selectedWOD]);

    const addSelectedClass = (workout) => {
        if (
            selectedWOD.label === workout.label &&
            selectedWOD.text === workout.text
        ) {
            return "workoutPart framed selected";
        } else return "workoutPart framed";
    };

    const generateSearchForWorkoutType = () => {
        return (
            <div className="searchWODBox">
                <h3>Komponente suchen</h3>

                <div
                    className="wodOptions"
                    onChange={(e) => setSelectedWodType(e.target.value)}
                >
                    <label htmlFor="boxWOD">
                        <input
                            type="radio"
                            value="boxWOD"
                            id="boxWOD"
                            name="wodOpt"
                        />
                        Box-WODs
                    </label>
                    <label htmlFor="benchmarkWOD">
                        <input
                            type="radio"
                            id="benchmarkWOD"
                            value="benchmarkWOD"
                            name="wodOpt"
                        />
                        Benchmark-WODs
                    </label>
                </div>
                <input type="text" placeholder="suche..." />
                <div>
                    {selectedWodType === "boxWOD" && (
                        <div>
                            <h3>Wähle ein WOD</h3>

                            {listOfBoxWods.map((workoutpart, index) => {
                                return (
                                    <div
                                        onClick={(e) =>
                                            setSelectedWOD(workoutpart)
                                        }
                                        className={addSelectedClass(
                                            workoutpart
                                        )}
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
                                    </div>
                                );
                            })}
                            <button
                                className="addThisWorkout"
                                onClick={(e) =>
                                    handleAddOldWorkout(selectedWorkoutType)
                                }
                            >
                                zum Workout hinzufügen
                            </button>
                        </div>
                    )}
                    {selectedWodType === "benchmarkWOD" && (
                        <div>
                            <h3>Wähle ein WOD</h3>
                            {listOfBenchmarkWods.map((workoutpart, index) => {
                                return (
                                    <div
                                        onClick={(e) =>
                                            setSelectedWOD(workoutpart)
                                        }
                                        className={addSelectedClass(
                                            workoutpart
                                        )}
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
                                    </div>
                                );
                            })}
                            <button
                                className="addThisWorkout"
                                onClick={(e) =>
                                    handleAddOldWorkout(selectedWorkoutType)
                                }
                            >
                                zum Workout hinzufügen
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const generateFormForWorkoutType = (type) => {
        switch (type) {
            case "WOD":
                return (
                    <div className="newWorkoutInputBox">
                        <h3>neue Komponente</h3>

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
                        <textarea
                            type="text"
                            value={workoutDescription}
                            onChange={(e) =>
                                setWorkoutDescription(e.target.value)
                            }
                            placeholder="WOD-Beschreibung"
                        />
                    </div>
                );
            case "Warm-Up":
                return (
                    <div className="newWorkoutInputBox">
                        <h3>neue Komponente</h3>

                        <input
                            className="workoutNameInput"
                            type="text"
                            value={workoutName}
                            onChange={(e) => setWorkoutName(e.target.value)}
                            placeholder="Warm-Up-Name"
                        />
                        <textarea
                            type="text"
                            value={workoutDescription}
                            onChange={(e) =>
                                setWorkoutDescription(e.target.value)
                            }
                            placeholder="Warm-Up-Beschreibung"
                        />
                    </div>
                );
            case "Strength":
                return (
                    <div className="newWorkoutInputBox">
                        <h3>neue Komponente</h3>

                        <input
                            className="workoutNameInput"
                            type="text"
                            value={workoutName}
                            onChange={(e) => setWorkoutName(e.target.value)}
                            placeholder="Strength-Name"
                        />
                        <textarea
                            type="text"
                            onChange={(e) =>
                                setWorkoutDescription(e.target.value)
                            }
                            placeholder="Strength-Beschreibung"
                        />
                    </div>
                );
            case "Find-Your-X-Rep":
                return (
                    <div className="newWorkoutInputBox">
                        <h3>neue Komponente</h3>

                        <input
                            className="workoutNameInput"
                            type="text"
                            value={workoutName}
                            onChange={(e) => setWorkoutName(e.target.value)}
                            placeholder="Find-Your-X-Rep-Name"
                        />
                        <select
                            className="dropDownBox"
                            value={workoutResult}
                            onChange={(e) => {
                                setWorkoutResult(e.target.value);
                            }}
                        >
                            <option value="For Time">For Time</option>
                            <option value="Max">Max</option>
                        </select>
                        <textarea
                            type="text"
                            value={workoutDescription}
                            onChange={(e) =>
                                setWorkoutDescription(e.target.value)
                            }
                            placeholder="Find-Your-X-Rep-Beschreibung"
                        />
                    </div>
                );
            default:
                return <div>bla</div>;
        }
    };

    return (
        <div className="addWorkoutBox">
            {showSuccessfullyAdded && (
                <div className="successfullyAddedLayer">
                    <h3>Workout erfolgreich hinzugefügt</h3>
                    {selectedClassObject.ClassKey === classObjects.length ? (
                        <button
                            onClick={(e) => {
                                setClassMode("newclass");
                            }}
                        >
                            zurück zur Kurserstellung
                        </button>
                    ) : (
                        <button
                            onClick={(e) => {
                                setClassMode("editclass");
                            }}
                        >
                            zurück zum Bearbeitungsmodus
                        </button>
                    )}
                </div>
            )}
            {!showSuccessfullyAdded && (
                <div className="addWorkoutBoxCard">
                    <button
                        className="backBtn"
                        onClick={(e) => setClassMode("editclass")}
                    >
                        abbrechen
                    </button>
                    <h3>Komponente aussuchen</h3>
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
                        <option value="Find-Your-X-Rep">Find-Your-X-Rep</option>
                    </select>
                    <div className="radiosWrapper">
                        <div
                            className="addingWorkoutOptions"
                            onChange={(e) => setAddWorkoutOpt(e.target.value)}
                        >
                            <label htmlFor="newWorkout">
                                <input
                                    type="radio"
                                    value="newWorkout"
                                    name="addWorkoutOpt"
                                    id="newWorkout"
                                />
                                neue {selectedWorkoutType} Komponente
                            </label>

                            <label htmlFor="searchWorkout">
                                <input
                                    type="radio"
                                    value="searchWorkout"
                                    name="addWorkoutOpt"
                                    id="searchWorkout"
                                />
                                {selectedWorkoutType} suchen
                            </label>
                        </div>
                    </div>

                    {addWorkoutOpt === "newWorkout" && (
                        <div className="newWorkoutBox">
                            {generateFormForWorkoutType(selectedWorkoutType)}
                            <button
                                className="addThisWorkout"
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
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AddWorkout;
