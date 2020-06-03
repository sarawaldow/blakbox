import React, { useContext } from "react";
import { BBxContext } from "../components/BBxContext";

// import './header.css';
import TimetableFull from "../components/timetable-full";
import ClassInfo from "../components/class-info";

// const getWeekDates = () => {
// }

export const Timetable = () => {
    const { isClassLayerVisible } = useContext(BBxContext);

    return (
        <div className="timetableBox">
            {isClassLayerVisible &&<ClassInfo />}
            {!isClassLayerVisible&&<TimetableFull />}
        </div>
    );
};
export default Timetable;
