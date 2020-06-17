import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";
import ClassSettings from "./class-settings";
import ClassTypes from "./class-types";
import WeekBase from "./week-base";

import "./class-manager.scss";

export const ClassManager = () => {
    const { setClassMode } = useContext(BBxContext);

    return (
        <div className="classManagerWrapper">
            <div className="topBtnsWrapper">
                <button
                    className="backBtn"
                    onClick={(e) => setClassMode("closed")}
                >
                    X
                </button>
                <ClassTypes />
            </div>
            <ClassSettings />
            <WeekBase />
        </div>
    );
};
export default ClassManager;
