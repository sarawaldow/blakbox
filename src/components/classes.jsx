import React from "react";

// import './header.css';

export const Classes = () => {
    return (
        <div className="classbox">
            <div className="class">
                <div className="classDetailBox">
                    <div className="classDetails">
                        <div>
                            <b>Open Gym </b>
                        </div>
                        <div>10:00-11:00</div>
                    </div>
                    <div className="classDetails">
                        <div >Coach</div>
                        <div>3/10 Teilnehmer</div>
                    </div>
                </div>
                <div className="openClass"><div>Öffnen</div></div>
            </div>
            <div className="class">
                <div className="classDetailBox">
                    <div className="classDetails">
                        <div>
                            <b>WOD Anfänger </b>
                        </div>
                        <div>15:00-16:00</div>
                    </div>
                    <div className="classDetails">
                        <div>Coach</div>
                        <div>5/10 Teilnehmer</div>
                    </div>
                </div>
                <div className="openClass"><div>Öffnen</div></div>
            </div>
            <div className="class">
                <div className="classDetailBox">
                    <div className="classDetails">
                        <div className="classDetails">
                            <b>WOD All Level </b>
                        </div>
                        <div>18:00-19:00</div>
                    </div>
                    <div className="classDetails">
                        <div>Coach</div>
                        <div>8/10 Teilnehmer</div>
                    </div>
                </div>
                <div className="openClass"><div>Öffnen</div></div>
            </div>
            <div className="class">
                <div className="classDetailBox">
                    <div className="classDetails">
                        <div className="classDetails">
                            <b>WOD All Level </b>
                        </div>
                        <div>19:00-20:00</div>
                    </div>
                    <div className="classDetails">
                        <div>Coach</div>
                        <div>8/10 Teilnehmer</div>
                    </div>
                </div>
                <div className="openClass"><div>Öffnen</div></div>
            </div>
        </div>
    );
};

export default Classes;
