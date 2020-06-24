import React, { useState } from "react";

const BBxContext = React.createContext(null);

const BBxProvider = (props) => {
    const [status, setStatus] = useState("START");

    const [memberType, setMemberType] = useState("Box Owner");

    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    const [todaysDate, setTodaysDate] = useState(today);

    const [selectedDate, setSelectedDate] = useState(todaysDate);

    const [classMode, setClassMode] = useState("closed");
    const [memberPageMode, setMemberPageMode] = useState("closed");

    // user info
    const [userName, setUserName] = useState("Maxi Muster");
    const [userGender, setUserGender] = useState("männlich");
    const [userMail, setUserMail] = useState("Maxi@Muster.de");
    const [userBDay, setUserBDay] = useState("1990-09-09");
    const [userPhone, setUserPhone] = useState("0123 456 789");
    const [userStreet, setUserStreet] = useState("Hafenstraße");
    const [userHouseNr, setUserHouseNr] = useState("20");
    const [userExtraInfo, setUserExtraInfo] = useState("a");
    const [userPostCode, setUserPostCode] = useState("12345");
    const [userCity, setUserCity] = useState("Lübeck");
    const [contractType, setContractType] = useState("Half Member");

    const [signedUpClasses, setSignedUpClasses] = useState([]);

    const [credits, setCredits] = useState(8);
    const [changesMade, setChangesMade] = useState(false);

    const [selectedMember, setSelectedMember] = useState();

    const [listOfMembers, setListOfMembers] = useState([
        {
            Key: 0,
            Activated: true,
            Name: "Susi Anders",
            Bday: "02.02.1985",
            EMail: "susi.anders@gmail.de",
            Phone: "015198765432",
            Address: "Dorfstraße 50, 23566 Lübeck",
            lastVisited: "27.05.2020",
            Status: "Athlet",
            Level: "Anfänger",
            Contract: "Half Member",
            ContractStart: "01.05.2019",
            NewContract: { Contract: "", Date: "" },
            Termination: { NoticeDate: "", TerminationDate: "" }
        },
        {
            Key: 1,
            Activated: true,
            Name: "Peter Müller",
            Bday: "15.09.1972",
            EMail: "peter.mueller@gmx.de",
            Phone: "017012345678",
            Address: "Dorfstraße 50, 23566 Lübeck",
            lastVisited: "11.06.2020",
            Status: "Coach",
            Level: "Fortgeschritten",
            Contract: "Full Member",
            ContractStart: "01.05.2019",
            NewContract: { Contract: "", Date: "" },
            Termination: { NoticeDate: "", TerminationDate: "" }
        },
        {
            Key: 2,
            Activated: false,
            Name: "Monika Löwe",
            Bday: "15.09.1972",
            EMail: "mo-lo@gmail.com",
            Phone: "017012345678",
            Address: "Dorfstraße 50, 23566 Lübeck",
            lastVisited: "",
            Status: "Athlet",
            Level: "Anfänger",
            Contract: "Half Member",
            ContractStart: "01.05.2019",
            NewContract: { Contract: "", Date: "" },
            Termination: { NoticeDate: "", TerminationDate: "" }
        },
        {
            Key: 3,
            Activated: false,
            Name: "Jan Christen",
            Bday: "15.09.1972",
            EMail: "jchristen@gmx.de",
            Phone: "017012345678",
            Address: "Dorfstraße 50, 23566 Lübeck",
            lastVisited: "",
            Status: "Athlet",
            Level: "Anfänger",
            Contract: "Full Member",
            ContractStart: "01.05.2019",
            NewContract: { Contract: "", Date: "" },
            Termination: { NoticeDate: "", TerminationDate: "" }
        },
        {
            Key: 4,
            Activated: false,
            Name: "Merle Hofer",
            Bday: "20.05.1992",
            EMail: "merlehofer@gmail.com",
            Phone: "016960987312",
            Address: "Dorfstraße 50, 23566 Lübeck",
            lastVisited: "",
            Status: "Athlet",
            Level: "Anfänger",
            Contract: "Full Member",
            ContractStart: "01.05.2019",
            NewContract: { Contract: "", Date: "" },
            Termination: { NoticeDate: "", TerminationDate: "" }
        }
    ]);

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
                {
                    label: "Warm-Up",
                    text:
                        "400m Laufen<br/>2 Runden:<br/>-20 sek. Couch Stretch<br/>-20 sek Spiderman Lunge<br/>-20 sek Pidgeon Pose"
                },
                { label: "Skill", text: "Kettlebell Snatch<br/>Dbl KB Snatch" },
                {
                    label: "WOD",
                    text:
                        "AMRAP 20<br/>-40 Barbell (Walking) Lunges 30/25<br/>-30 AbMat Sit-ups<br/>-20 Sumo Deadlift High Pulls 30/25<br/>-10 C2B Pull-ups"
                }
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
                {
                    label: "Warm-Up",
                    text:
                        "400m Laufen<br/>2 Runden:<br/>-20 sek. Couch Stretch<br/>-20 sek Spiderman Lunge<br/>-20 sek Pidgeon Pose"
                },
                { label: "Skill", text: "Kettlebell Snatch<br/>Dbl KB Snatch" },
                {
                    label: "WOD",
                    text:
                        "AMRAP 20<br/>-40 Barbell (Walking) Lunges 30/25<br/>-30 AbMat Sit-ups<br/>-20 Sumo Deadlift High Pulls 30/25<br/>-10 C2B Pull-ups"
                }
            ],
            MinSpots: 2,
            MaxSpots: 10,
            SignedUp: ["Martin Müller", "Anne Schulz", "Sophie Meyer"],
            Waiting: []
        },
        {
            ClassKey: 2,
            ClassDescription: "Heute bringt euch Hans zum schwitzen!",
            ClassType: "WOD All Level",
            Coach: "Hans",
            StartTime: "18:00",
            EndTime: "19:00",
            Date: "",
            Workout: [
                {
                    label: "Warm-Up",
                    text:
                        "400m Laufen<br/>2 Runden:<br/>-20 sek. Couch Stretch<br/>-20 sek Spiderman Lunge<br/>-20 sek Pidgeon Pose"
                },
                { label: "Skill", text: "Kettlebell Snatch<br/>Dbl KB Snatch" },
                {
                    label: "WOD",
                    text:
                        "AMRAP 20<br/>-40 Barbell (Walking) Lunges 30/25<br/>-30 AbMat Sit-ups<br/>-20 Sumo Deadlift High Pulls 30/25<br/>-10 C2B Pull-ups"
                }
            ],
            MinSpots: 2,
            MaxSpots: 10,
            SignedUp: ["Martin Müller", "Anne Schulz", "Sophie Meyer"],
            Waiting: []
        },
        {
            ClassKey: 3,
            ClassDescription:
                "Hier kommen alle auf ihre Kosten! Meldet euch an.",
            ClassType: "WOD All Level",
            Coach: "Gerda",
            StartTime: "19:00",
            EndTime: "20:00",
            Date: "",
            Workout: [
                {
                    label: "Warm-Up",
                    text:
                        "400m Laufen<br/>2 Runden:<br/>-20 sek. Couch Stretch<br/>-20 sek Spiderman Lunge<br/>-20 sek Pidgeon Pose"
                },
                { label: "Skill", text: "Kettlebell Snatch<br/>Dbl KB Snatch" },
                {
                    label: "WOD",
                    text:
                        "AMRAP 20<br/>-40 Barbell (Walking) Lunges 30/25<br/>-30 AbMat Sit-ups<br/>-20 Sumo Deadlift High Pulls 30/25<br/>-10 C2B Pull-ups"
                }
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

    const [signUpTime, setSignUpTime] = useState(14);
    const [signOffTill, setSignOffTill] = useState(2);
    const [workoutVisibilityTime, setWorkoutVisibilityTime] = useState(8);
    const [checkSignedUp, setCheckSignedUp] = useState(1.5);

    const [currentWeekBase, setCurrentWeekBase] = useState("Standardplan-01");
    const [nextWeekBase, setNextWeekBase] = useState({
        Key: 0,
        StartDate: new Date()
    });

    const classesOfTheDay = [
        {
            Class: "Open Gym",
            StartTime: "10:00",
            EndTime: "11:00",
            Coach: "Peter",
            MinSpots: 2,
            MaxSpots: 10,
            Rhythm: "jede Woche"
        },
        {
            Class: "WOD Anfänger",
            StartTime: "15:00",
            EndTime: "16:00",
            Coach: "Anke",
            MinSpots: 2,
            MaxSpots: 10,
            Rhythm: "jede Woche"
        },
        {
            Class: "WOD All Level",
            StartTime: "18:00",
            EndTime: "19:00",
            Coach: "Hans",
            MinSpots: 2,
            MaxSpots: 10,
            Rhythm: "jede Woche"
        },
        {
            Class: "WOD All Level",
            StartTime: "19:00",
            EndTime: "20:00",
            Coach: "Gerda",
            MinSpots: 2,
            MaxSpots: 10,
            Rhythm: "jede Woche"
        }
    ];

    const [weekBaseObjects, setWeekBaseObjects] = useState([
        {
            Key: 0,
            Name: "Standardplan-01",
            WeekDays: [
                {
                    Day: "MO",
                    Classes: classesOfTheDay
                },
                {
                    Day: "DI",
                    Classes: classesOfTheDay
                },
                {
                    Day: "MI",
                    Classes: classesOfTheDay
                },
                {
                    Day: "DO",
                    Classes: classesOfTheDay
                },
                {
                    Day: "FR",
                    Classes: classesOfTheDay
                },
                {
                    Day: "SA",
                    Classes: classesOfTheDay
                },
                {
                    Day: "SO",
                    Classes: classesOfTheDay
                }
            ]
        }
    ]);

    const [workoutNC, setWorkoutNC] = useState([]);
    const [coachNC, setCoachNC] = useState("Peter");
    const [classDescriptionNC, setClassDescriptionNC] = useState("");
    const [maxSpotsNC, setMaxSpotsNC] = useState(0);
    const [minSpotsNC, setMinSpotsNC] = useState(0);

    const [startTimeNC, setStartTimeNC] = useState("00:00");
    const [endTimeNC, setEndTimeNC] = useState("00:00");
    const [classTypeNC, setClassTypeNC] = useState("Sonderkurs");

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
                selectedDate,
                setSelectedDate,
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
                userStreet,
                setUserStreet,
                userHouseNr,
                setUserHouseNr,
                userExtraInfo,
                setUserExtraInfo,
                userPostCode,
                setUserPostCode,
                userCity,
                setUserCity,
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
                setClassTypeNC,
                weekBaseObjects,
                setWeekBaseObjects,
                currentWeekBase,
                setCurrentWeekBase,
                nextWeekBase,
                setNextWeekBase,
                signUpTime,
                setSignUpTime,
                signOffTill,
                setSignOffTill,
                workoutVisibilityTime,
                setWorkoutVisibilityTime,
                checkSignedUp,
                setCheckSignedUp,
                listOfMembers,
                setListOfMembers,
                selectedMember,
                setSelectedMember,
                memberPageMode,
                setMemberPageMode
            }}
        >
            {props.children}
        </BBxContext.Provider>
    );
};

export { BBxContext, BBxProvider };
