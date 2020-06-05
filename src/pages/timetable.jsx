import React, { useContext } from "react";
import { BBxContext } from "../components/BBxContext";

// import './header.css';
import TimetableFull from "../components/timetable-full";
import ClassInfo from "../components/class-info";
import EditClass from "../components/edit-class";

// const getWeekDates = () => {
// }

export const Timetable = () => {
    const { classMode} = useContext(BBxContext);

    return (
        <div className="timetableBox">
            {classMode === "classinfo" &&<ClassInfo />}
            {classMode === "editclass" && <EditClass/>}
            {classMode === "closed" &&<TimetableFull />}

        </div>
    );
};
export default Timetable;
