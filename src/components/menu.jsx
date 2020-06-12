import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";

// import './header.css';

export const Menu = () => {
    const { status, setStatus, memberType, setClassMode, setMemberPageMode} = useContext(BBxContext);

    return (
        <div className="menubox">
            <button
                className={
                    status === "PROFILE"
                        ? "headerOption profile selected"
                        : "headerOption profile"
                }
                onClick={(e) => {setStatus("PROFILE");setClassMode("closed")}}
            />
            <button
                className={
                    status === "TIMETABLE"
                        ? "headerOption timetable selected"
                        : "headerOption timetable"
                }
                onClick={(e) => {setStatus("TIMETABLE"); setClassMode("closed")}}
            />

            {memberType === 'Box Owner'? <button
                className={
                    status === "MEMBERS"
                        ? "headerOption members selected"
                        : "headerOption members"
                }
                onClick={(e) => {setStatus("MEMBERS"); setMemberPageMode("closed")}}
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
