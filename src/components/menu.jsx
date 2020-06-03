import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";

// import './header.css';

export const Menu = () => {
    const { status, setStatus, memberType} = useContext(BBxContext);

    return (
        <div className="menubox">
            <button
                className={
                    status === "PROFILE"
                        ? "headerOption profile selected"
                        : "headerOption profile"
                }
                onClick={(e) => setStatus("PROFILE")}
            />
            <button
                className={
                    status === "TIMETABLE"
                        ? "headerOption timetable selected"
                        : "headerOption timetable"
                }
                onClick={(e) => setStatus("TIMETABLE")}
            />
            {/* <button
                className={
                    status === "HOME"
                        ? "headerOption home selected"
                        : "headerOption home"
                }
                onClick={(e) => setStatus("HOME")}
            /> */}
            {memberType === 'Box Owner'? <button
                className={
                    status === "MEMBERS"
                        ? "headerOption members selected"
                        : "headerOption members"
                }
                onClick={(e) => setStatus("MEMBERS")}
            />: <button className="headerOption" disabled/>}
            <button
                className="headerOption"
                onClick={(e) => setStatus("START")}
            >
                log out
            </button>
        </div>
    );
};

export default Menu;
