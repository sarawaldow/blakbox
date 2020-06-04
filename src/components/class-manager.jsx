import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";

// import './header.css';


// const getWeekDates = () => {
// }

export const ClassManager = () => {
    const { isClassLayerVisible } = useContext(BBxContext);

    return (
        <div className="classMngrWrapper">

        </div>
    );
};
export default ClassManager;