import React, { useState } from "react";

const BBxContext = React.createContext(null);

const BBxProvider = (props) => {
    const [status, setStatus] = useState("TIMETABLE");

    const [memberType, setMemberType] = useState("Box Owner");

    const [todaysDate, setTodaysDate] = useState(new Date());


    const getWeek = () => {
        let date = new Date(todaysDate.getTime());
        date.setHours(0, 0, 0, 0);
        // Thursday in current week decides the year.
        date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
        // January 4 is always in week 1.
        let week1 = new Date(date.getFullYear(), 0, 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1.
        return (
            1 +
            Math.round(
                ((date.getTime() - week1.getTime()) / 86400000 -
                    3 +
                    ((week1.getDay() + 6) % 7)) /
                    7
            )
        );
    };
    const [weekNumber, setWeekNumber] = useState(getWeek());

    let datesThisWeek = [];
    const numberOfDates = 7;
    const monday = new Date();

    const weekDaysDifferenceToMonday = {
        0: -7,
        1: 0,
        2: -1,
        3: -2,
        4: -3,
        5: -4,
        6: -5
    };

    const getMondaysDate = () => {
        let numberOfDaysToMonday = 0;
        Object.entries(weekDaysDifferenceToMonday).forEach(([key, value]) => {
            // eslint-disable-next-line eqeqeq
            if (todaysDate.getDay() == key) numberOfDaysToMonday = value;
        });
        monday.setDate(monday.getDate() + numberOfDaysToMonday);
        return monday;
    };
    const thisMondaysDate = getMondaysDate();

    for (let i = 0; i < numberOfDates; i++) {
        const MondayPlusI = new Date(thisMondaysDate);

        MondayPlusI.setDate(MondayPlusI.getDate() + i);
        datesThisWeek.push(MondayPlusI);
    }

    const [dates, setDates] = useState(datesThisWeek);
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
    const [userPostCode, setUserPostCode] = useState("12345 Lübeck");
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
            Address: "",
            lastVisited: "27.05.2020",
            Status: "Athlet",
            Level: "Anfänger",
            Contract: "Half Member"
        },
        {
            Key: 1,
            Activated: true,
            Name: "Peter Müller",
            Bday: "15.09.1972",
            EMail: "peter.mueller@gmx.de",
            Phone: "017012345678",
            Address: "",
            lastVisited: "11.06.2020",
            Status: "Coach",
            Level: "Fortgeschritten",
            Contract: "Full Member"
        },
        {
            Key: 2,
            Activated: false,
            Name: "Monika Löwe",
            Bday: "15.09.1972",
            EMail: "mo-lo@gmail.com",
            Phone: "017012345678",
            Address: "",
            lastVisited: "",
            Status: "Athlet",
            Level: "Anfänger",
            Contract: "Half Member"
        },
        {
            Key: 3,
            Activated: false,
            Name: "Jan Christen",
            Bday: "15.09.1972",
            EMail: "jchristen@gmx.de",
            Phone: "017012345678",
            Address: "",
            lastVisited: "",
            Status: "Athlet",
            Level: "Anfänger",
            Contract: "Full Member"
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

    const [signUpTime, setSignUpTime] = useState(14);
    const [signOffTill, setSignOffTill] = useState(2);
    const [workoutVisibilityTime, setWorkoutVisibilityTime] = useState(8);
    const [checkSignedUp, setCheckSignedUp] = useState(1.5);

    const [currentWeekBase, setCurrentWeekBase] = useState("Standardplan-01");
    const [nextWeekBase, setNextWeekBase] = useState({
        Key: 0,
        StartDate: new Date()
    });
    const [weekBaseObjects, setWeekBaseObjects] = useState([
        {
            Key: 0,
            Name: "Standardplan-01",
            WeekDays: [
                {
                    Day: "MO",
                    Classes: [
                        {
                            Class: "Open Gym",
                            StartTime: "10:00",
                            EndTime: "11:00",
                            Coach: "Peter",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD Anfänger",
                            StartTime: "15:00",
                            EndTime: "16:00",
                            Coach: "Anke",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD All Level",
                            StartTime: "18:00",
                            EndTime: "19:00",
                            Coach: "Hans",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD All Level",
                            StartTime: "19:00",
                            EndTime: "20:00",
                            Coach: "Gerda",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        }
                    ]
                },
                {
                    Day: "DI",
                    Classes: [
                        {
                            Class: "Open Gym",
                            StartTime: "10:00",
                            EndTime: "11:00",
                            Coach: "Peter",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD Anfänger",
                            StartTime: "15:00",
                            EndTime: "16:00",
                            Coach: "Anke",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD All Level",
                            StartTime: "18:00",
                            EndTime: "19:00",
                            Coach: "Hans",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD All Level",
                            StartTime: "19:00",
                            EndTime: "20:00",
                            Coach: "Gerda",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        }
                    ]
                },
                {
                    Day: "MI",
                    Classes: [
                        {
                            Class: "Open Gym",
                            StartTime: "10:00",
                            EndTime: "11:00",
                            Coach: "Peter",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD Anfänger",
                            StartTime: "15:00",
                            EndTime: "16:00",
                            Coach: "Anke",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD All Level",
                            StartTime: "18:00",
                            EndTime: "19:00",
                            Coach: "Hans",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD All Level",
                            StartTime: "19:00",
                            EndTime: "20:00",
                            Coach: "Gerda",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        }
                    ]
                },
                {
                    Day: "DO",
                    Classes: [
                        {
                            Class: "Open Gym",
                            StartTime: "10:00",
                            EndTime: "11:00",
                            Coach: "Peter",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD Anfänger",
                            StartTime: "15:00",
                            EndTime: "16:00",
                            Coach: "Anke",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD All Level",
                            StartTime: "18:00",
                            EndTime: "19:00",
                            Coach: "Hans",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD All Level",
                            StartTime: "19:00",
                            EndTime: "20:00",
                            Coach: "Gerda",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        }
                    ]
                },
                {
                    Day: "FR",
                    Classes: [
                        {
                            Class: "Open Gym",
                            StartTime: "10:00",
                            EndTime: "11:00",
                            Coach: "Peter",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD Anfänger",
                            StartTime: "15:00",
                            EndTime: "16:00",
                            Coach: "Anke",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD All Level",
                            StartTime: "18:00",
                            EndTime: "19:00",
                            Coach: "Hans",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD All Level",
                            StartTime: "19:00",
                            EndTime: "20:00",
                            Coach: "Gerda",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        }
                    ]
                },
                {
                    Day: "SA",
                    Classes: [
                        {
                            Class: "Open Gym",
                            StartTime: "10:00",
                            EndTime: "11:00",
                            Coach: "Peter",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD Anfänger",
                            StartTime: "15:00",
                            EndTime: "16:00",
                            Coach: "Anke",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD All Level",
                            StartTime: "18:00",
                            EndTime: "19:00",
                            Coach: "Hans",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD All Level",
                            StartTime: "19:00",
                            EndTime: "20:00",
                            Coach: "Gerda",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        }
                    ]
                },
                {
                    Day: "SO",
                    Classes: [
                        {
                            Class: "Open Gym",
                            StartTime: "10:00",
                            EndTime: "11:00",
                            Coach: "Peter",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD Anfänger",
                            StartTime: "15:00",
                            EndTime: "16:00",
                            Coach: "Anke",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD All Level",
                            StartTime: "18:00",
                            EndTime: "19:00",
                            Coach: "Hans",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        },
                        {
                            Class: "WOD All Level",
                            StartTime: "19:00",
                            EndTime: "20:00",
                            Coach: "Gerda",
                            MinSpots: 0,
                            MaxSpots: 0,
                            Rhythm: "jede Woche"
                        }
                    ]
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
                dates,
                setDates,
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
                setMemberPageMode, weekNumber, setWeekNumber
            }}
        >
            {props.children}
        </BBxContext.Provider>
    );
};

export { BBxContext, BBxProvider };
