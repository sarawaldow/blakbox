import React, { useState } from "react";

const BBxContext = React.createContext(null);

const BBxProvider = (props) => {
    const [status, setStatus] = useState("PROFILE");

    const [memberType, setMemberType] = useState("Box Owner");

    const [todaysDate, setTodaysDate] = useState(new Date());
    const [todaysDateString, setTodaysDateString] = useState(
        todaysDate
            .toLocaleDateString()
            .substring(0, todaysDate.toLocaleDateString().length - 4)
    );

    const [signedUpClasses, setSignedUpClasses] = useState([0, 1, 2]);

    const [credits, setCredits] = useState(8);

    const [classObjects, setClassObjects] = useState([
        {
            ClassKey: 0,
            ClassDescription: "Kommt ins Open Gym!",
            ClassType: "Open Gym",
            Coach: "Peter",
            StartTime: "10:00",
            EndTime: "11:00",
            Workout: [
                { label: "Warm-Up", text: "2km Laufen" },
                { label: "Strength", text: "1 Deadlift" },
                { label: "WOD", text: "AMRAP 15<br/>50 Squads<br/>50 Burpees" }
            ],
            FreeSpots: 7,
            MaxSpots: 10,
            SignedUp: ["Martin Müller", "Anne Schulz", "Sophie Meyer"],
            Waiting: []
        },
        {
            ClassKey: 1,
            ClassDescription: "Heute üben wir Deadlifts",
            ClassType: "WOD Anfänger",
            Coach: "Anke",
            StartTime: "15:00",
            EndTime: "16:00",
            Workout: [
                { label: "Warm-Up", text: "2km Laufen" },
                { label: "Strength", text: "1 Deadlift" },
                { label: "WOD", text: "AMRAP 15<br/>50 Squads<br/>50 Burpees" }
            ],
            FreeSpots: 7,
            MaxSpots: 10,
            SignedUp: ["Martin Müller", "Anne Schulz", "Sophie Meyer"],
            Waiting: []
        },
        {
            ClassKey: 2,
            ClassDescription: "Heute geht es an die Beine",
            ClassType: "WOD All Level",
            Coach: "Hans",
            StartTime: "18:00",
            EndTime: "19:00",
            Workout: [
                { label: "Warm-Up", text: "2km Laufen" },
                { label: "Strength", text: "1 Deadlift" },
                { label: "WOD", text: "AMRAP 15 50 Squads 50 Burpees" }
            ],
            FreeSpots: 2,
            MaxSpots: 10,
            SignedUp: ["Martin Müller", "Anne Schulz", "Sophie Meyer"],
            Waiting: []
        },
        {
            ClassKey: 3,
            ClassDescription: "Blub",
            ClassType: "WOD All Level",
            Coach: "Gerda",
            StartTime: "19:00",
            EndTime: "12:00",
            Workout: [
                { label: "Warm-Up", text: "2km Laufen" },
                { label: "Strength", text: "1 Deadlift" },
                { label: "WOD", text: "AMRAP 15<br/>50 Squads<br/>50 Burpees" }
            ],
            FreeSpots: 2,
            MaxSpots: 10,
            SignedUp: ["Martin Müller", "Anne Schulz", "Sophie Meyer"],
            Waiting: []
        }
    ]);

    const [selectedClassObject, setSelectedClassObject] = useState({
        ClassKey: 0,
        ClassDescription: "",
        ClassType: "",
        Coach: "",
        StartTime: "",
        EndTime: "",
        Workout: [
            { label: "Warm-Up", text: "" },
            { label: "Strength", text: "" },
            { label: "WOD", text: "" }
        ],
        FreeSpots: 0,
        MaxSpots: 0,
        SignedUp: [],
        Waiting: []
    });
    const [isClassLayerVisible, setIsClassLayerVisible] = useState(true);

    // const [state, setState] = useState({
    //     startDate: null,
    //     endDate: null,
    //     focusedInput: START_DATE,
    // });

    return (
        <BBxContext.Provider
            value={{
                memberType,
                setMemberType,
                status,
                setStatus,
                classObjects,
                setClassObjects,
                todaysDate,
                setTodaysDate,
                todaysDateString,
                setTodaysDateString,
                selectedClassObject,
                setSelectedClassObject,
                isClassLayerVisible,
                setIsClassLayerVisible,
                signedUpClasses,
                setSignedUpClasses,
                credits,
                setCredits
            }}
        >
            {props.children}
        </BBxContext.Provider>
    );
};

export { BBxContext, BBxProvider };
