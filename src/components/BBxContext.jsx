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

    const [signedUpClasses, setSignedUpClasses] = useState([1, 2]);

    const [credits, setCredits] = useState(8);

    // classes info

    const [classDescription1, setClassDescription1] = useState(
        "Kommt ins Open Gym!"
    );
    const [coach1, setCoach1] = useState("Peter");
    const [workout1, setWorkout1] = useState([
        { label: "Warm-Up", text: "2km Laufen" },
        { label: "Strength", text: "1 Deadlift" },
        { label: "WOD", text: "AMRAP 15<br/>50 Squads<br/>50 Burpees" }
    ]);
    const [freeSpots1, setFreeSpots1] = useState(7);
    const [maxSpots1, setMaxSpots1] = useState(10);
    const [signedUp1, setSignedUp1] = useState([
        userName,
        "Martin Müller",
        "Anne Schulz",
        "Sophie Meyer"
    ]);
    const [waiting1, setWaiting1] = useState([]);

    const [classObjects, setClassObjects] = useState([
        {
            ClassKey: 1,
            ClassDescription: classDescription1,
            ClassType: "Open Gym",
            Coach: coach1,
            StartTime: "10:00",
            EndTime: "11:00",
            Date: "",
            Workout: workout1,
            FreeSpots: freeSpots1,
            MaxSpots: maxSpots1,
            SignedUp: signedUp1,
            Waiting: waiting1
        },
        {
            ClassKey: 2,
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
            FreeSpots: 7,
            MaxSpots: 10,
            SignedUp: ["Martin Müller", "Anne Schulz", "Sophie Meyer"],
            Waiting: []
        },
        {
            ClassKey: 3,
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
            FreeSpots: 2,
            MaxSpots: 10,
            SignedUp: ["Martin Müller", "Anne Schulz", "Sophie Meyer"],
            Waiting: []
        },
        {
            ClassKey: 4,
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
            FreeSpots: 0,
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
        FreeSpots: 0,
        MaxSpots: 0,
        SignedUp: [],
        Waiting: []
    });


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
                classDescription1,
                setClassDescription1,
                coach1,
                setCoach1,
                workout1,
                setWorkout1,
                freeSpots1,
                setFreeSpots1,
                maxSpots1,
                setMaxSpots1,
                signedUp1,
                setSignedUp1,
                waiting1,
                setWaiting1,
                classMode, setClassMode
            }}
        >
            {props.children}
        </BBxContext.Provider>
    );
};

export { BBxContext, BBxProvider };
