import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";
import { useEffect } from "react";

import memberIcon from "../assets/members.png";
import memberIconSelected from "../assets/membersSelected.png";
import timetableIcon from "../assets/timetable.png";
import timetableIconSelected from "../assets/timetableSelected.png";
import profileIcon from "../assets/profile.png";
import profileIconSelected from "../assets/profileSelected.png";

// import './header.css';

export const Menu = () => {
    const { status, setStatus, memberType, setClassMode, setMemberPageMode
        ,selectedDate, setSelectedDate, todaysDate
    } = useContext(BBxContext);

useEffect(()=>{
console.log(selectedDate);
},[selectedDate])

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
            >{status === "PROFILE"?<img src={profileIconSelected} alt="profileIcon" className="profileimg"/>:<img src={profileIcon} alt="profileIcon" className="profileimg"/>}</button>
            <button
                className={
                    status === "TIMETABLE"
                        ? "headerOption timetable selected"
                        : "headerOption timetable"
                }
                onClick={(e) => {setStatus("TIMETABLE"); setClassMode("closed");
                setSelectedDate(todaysDate)
            }}
            >{status === "TIMETABLE"?<img src={timetableIconSelected} alt="timetableIcon" className="timetableimg"/>:<img src={timetableIcon} alt="timetableIcon" className="timetableimg"/>}</button>

            {memberType === 'Box Owner'? <button
                className={
                    status === "MEMBERS"
                        ? "headerOption members selected"
                        : "headerOption members"
                }
                onClick={(e) => {setStatus("MEMBERS"); setMemberPageMode("closed");
                // setSelectedDate(todaysDate)
            }}
            >{status === "MEMBERS" ?<img src={memberIconSelected} alt="membersIcon" className="membersimg"/>:<img src={memberIcon} alt="membersIcon" className="membersimg"/>}</button>: <button className="headerOption" disabled/>}
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
