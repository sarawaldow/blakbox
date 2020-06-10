import React, { useContext } from "react";
import { BBxContext } from "../components/BBxContext";

// import './header.css';
import TimetableFull from "../components/timetable-full";
import ClassInfo from "../components/class-info";
import EditClass from "../components/edit-class";
import AddWorkout from "../components/add-workout";
import NewClass from "../components/new-class";
import ClassManager from "../components/class-manager";
import EditWeekBase from "../components/edit-week-base";

export const Timetable = () => {
    const { classMode} = useContext(BBxContext);

    return (
        <div className="timetableBox">
            {classMode === "classinfo" &&<ClassInfo />}
            {classMode === "editclass" && <EditClass/>}
            {classMode === "newclass"&&<NewClass/>}
            {classMode==="addworkout"&&<AddWorkout/>}
            {classMode==="classmanager"&&<ClassManager/>}
            {classMode==="editweekbase"&&<EditWeekBase/>}
            {classMode === "closed" &&<TimetableFull />}

        </div>
    );
};
export default Timetable;
