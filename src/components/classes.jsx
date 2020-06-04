import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";

// import './header.css';

export const Classes = () => {
    const { classObjects, setSelectedClassObject,setIsClassLayerVisible} = useContext(BBxContext);

    const openSelectedClass = (obj) => {
        setSelectedClassObject(obj);
        setIsClassLayerVisible(true);
    }

    return (
        <div className="classbox">
            {classObjects.map((oneClass) => {
                return (
                    <div className="class" onClick={(e)=> openSelectedClass(oneClass)} key={oneClass.ClassKey}>
                        <div className="classDetailBox">
                            <div className="classDetails">
                                <div>
                                    <b>{oneClass.ClassType}</b>
                                </div>
                                <div>
                                    {oneClass.StartTime}-{oneClass.EndTime}
                                </div>
                            </div>
                            <div className="classDetails">
                                <div>Coach:{oneClass.Coach}</div>
                                <div>{oneClass.FreeSpots}/{oneClass.MaxSpots} Spots frei</div>
                            </div>
                        </div>
                        {/* <div className="openClass">
                            <div onClick={(e)=> openSelectedClass(oneClass)}>Öffnen</div>
                        </div> */}
                    </div>
                );
            })}
        </div>
    );
};

export default Classes;
