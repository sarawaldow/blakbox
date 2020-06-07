import React, { useContext } from "react";
import { BBxContext } from "../components/BBxContext";

// import './header.css';
import TimetableFull from "../components/timetable-full";
import ClassInfo from "../components/class-info";
import EditClass from "../components/edit-class";
import AddWorkout from "../components/add-workout";

// const getWeekDates = () => {
// }

export const Timetable = () => {
    const { classMode} = useContext(BBxContext);

    return (
        <div className="timetableBox">
            {classMode === "classinfo" &&<ClassInfo />}
            {classMode === "editclass" && <EditClass/>}
            {classMode==="addworkout"&&<AddWorkout/>}
            {classMode === "closed" &&<TimetableFull />}

        </div>
    );
};
export default Timetable;
