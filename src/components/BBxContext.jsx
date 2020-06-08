import React, { useState } from "react";

const BBxContext = React.createContext(null);

const BBxProvider = (props) => {
    const [status, setStatus] = useState("TIMETABLE");

    const [memberType, setMemberType] = useState("Box Owner");

    const [todaysDate, setTodaysDate] = useState(new Date());
    const [todaysDateString, setTodaysDateString] = useState(
        todaysDate
            .toLocaleDateString()
            .substring(0, todaysDate.toLocaleDateString().length - 4)
    );

    const [classMode, setClassMode] = useState("editclass");

    // user info
    const [userName, setUserName] = useState("Maxi Muster");
    const [userGender, setUserGender] = useState("männlich");
    const [userMail, setUserMail] = useState("Maxi@Muster.de");
    const [userBDay, setUserBDay] = useState("09.09.1990");
    const [userPhone, setUserPhone] = useState("0123 456 789");
    const [userAddress, setUserAddress] = useState(
        "Hafenstraße 20, 12345 Lübeck"
    );
    const [contractType, setContractType] = useState("Half Member");

    const [signedUpClasses, setSignedUpClasses] = useState([]);

    const [credits, setCredits] = useState(8);
    const [changesMade, setChangesMade] = useState(false);

    const [classObjects, setClassObjects] = useState([
        {
            ClassKey: 0,
            ClassDescription: "Kommt ins Open Gym!",
            ClassType: "Open Gym",
            Coach: "Peter",
            StartTime: "10:00",
            EndTime: "11:00",
            Date: "",
            Workout: [
                { label: "Warm-Up", text: "2km Laufen" },
                { label: "Strength", text: "1 Deadlift" },
                { label: "WOD", text: "AMRAP 15<br/>50 Squads<br/>50 Burpees" }
            ],
            MinSpots: 2,
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
            Date: "",
            Workout: [
                { label: "Warm-Up", text: "2km Laufen" },
                { label: "Strength", text: "1 Deadlift" },
                { label: "WOD", text: "AMRAP 15<br/>50 Squads<br/>50 Burpees" }
            ],
            MinSpots: 2,
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
            Date: "",
            Workout: [
                { label: "Warm-Up", text: "2km Laufen" },
                { label: "Strength", text: "1 Deadlift" },
                { label: "WOD", text: "AMRAP 15 50 Squads 50 Burpees" }
            ],
            MinSpots: 2,
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
            Date: "",
            Workout: [
                { label: "Warm-Up", text: "2km Laufen" },
                { label: "Strength", text: "1 Deadlift" },
                { label: "WOD", text: "AMRAP 15<br/>50 Squads<br/>50 Burpees" }
            ],
            MinSpots: 2,
            MaxSpots: 10,
            SignedUp: [
                "Georg Frank",
                "Paula Kühn",
                "Jonas Hansen",
                "Martin Müller",
                "Anne Schulz",
                "Sophie Meyer",
                "Gisela Werner",
                "Kevin Becker",
                "Louisa Beck",
                "Oliver Kruse"
            ],
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
        Date: "",
        Workout: [
            { label: "Warm-Up", text: "" },
            { label: "Strength", text: "" },
            { label: "WOD", text: "" }
        ],
        MinSpots: 0,
        MaxSpots: 0,
        SignedUp: [],
        Waiting: []
    });

    const [workoutNC, setWorkoutNC] = useState([]);
    const [coachNC, setCoachNC] = useState("Peter");
    const [classDescriptionNC, setClassDescriptionNC] = useState("");
    const [maxSpotsNC, setMaxSpotsNC] = useState(0);
    const [minSpotsNC, setMinSpotsNC] = useState(0);

    const [startTimeNC, setStartTimeNC] = useState("00:00");
    const [endTimeNC, setEndTimeNC] = useState("00:00");
    const [classTypeNC, setClassTypeNC] = useState("Open Gym");

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
                signedUpClasses,
                setSignedUpClasses,
                credits,
                setCredits,
                userName,
                setUserName,
                contractType,
                setContractType,
                userGender,
                setUserGender,
                userMail,
                setUserMail,
                userBDay,
                setUserBDay,
                userPhone,
                setUserPhone,
                userAddress,
                setUserAddress,
                changesMade,
                setChangesMade,
                classMode,
                setClassMode,
                workoutNC,
                setWorkoutNC,
                coachNC,
                setCoachNC,
                classDescriptionNC,
                setClassDescriptionNC,
                maxSpotsNC,
                setMaxSpotsNC,
                minSpotsNC,
                setMinSpotsNC,
                startTimeNC,
                setStartTimeNC,
                endTimeNC,
                setEndTimeNC,
                classTypeNC,
                setClassTypeNC
            }}
        >
            {props.children}
        </BBxContext.Provider>
    );
};

export { BBxContext, BBxProvider };
