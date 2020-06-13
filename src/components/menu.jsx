import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";
// import { useEffect } from "react";

// import './header.css';

export const Menu = () => {
    const { status, setStatus, memberType, setClassMode, setMemberPageMode
        // ,selectedDate, setSelectedDate, todaysDate
    } = useContext(BBxContext);

// useEffect(()=>{
// console.log(selectedDate);
// },[selectedDate])

    return (
        <div className="menubox">
            <button
                className={
                    status === "PROFILE"
                        ? "headerOption profile selected"
                        : "headerOption profile"
                }
                onClick={(e) => {setStatus("PROFILE");setClassMode("closed");
                // setSelectedDate(todaysDate)
            }}
            />
            <button
                className={
                    status === "TIMETABLE"
                        ? "headerOption timetable selected"
                        : "headerOption timetable"
                }
                onClick={(e) => {setStatus("TIMETABLE"); setClassMode("closed");
                // setSelectedDate(todaysDate)
            }}
            />

            {memberType === 'Box Owner'? <button
                className={
                    status === "MEMBERS"
                        ? "headerOption members selected"
                        : "headerOption members"
                }
                onClick={(e) => {setStatus("MEMBERS"); setMemberPageMode("closed");
                // setSelectedDate(todaysDate)
            }}
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
