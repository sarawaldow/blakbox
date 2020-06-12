import React, { useContext } from "react";
import { BBxContext } from "../components/BBxContext";

import ClassInfo from "../components/class-info";
import EditClass from "../components/edit-class";

import "../pages/profile.scss";
import AddWorkout from "../components/add-workout";
import EditProfile from "../components/edit-profile";

export const Profile = () => {
    const {
        signedUpClasses,
        classObjects,
        setSelectedClassObject,
        classMode,
        setClassMode,
        userName,
        credits,
        contractType
    } = useContext(BBxContext);
    const openSelectedClass = (obj) => {
        setSelectedClassObject(obj);
        setClassMode("classinfo");
    };

    const renderProfileInfoBox = () => {
        return (
            <div className="profileInfoBox">
                <div className="profileInfoInnerWrapper">
                    <div className="profilePicWrapper">
                        <button className="profilePic">Profilbild</button>
                    </div>
                    <div className="profileInfoWrapper">
                        <div className="editProfileBtnWrapper">
                            <button
                                onClick={(e) => setClassMode("editprofile")}
                                className="editProfileInfo"
                            >
                                persönliche Daten bearbeiten
                            </button>
                        </div>
                        <div className="profileInfo">
                                <div>{userName}</div>
                                <div>{contractType}</div>{" "}
                            <div>{credits}/8 Anmeldungen übrig</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderSignedUpClassesList = () => {
        return (
            <div className="signedUpClassesList">
                <h2>meine Kurse</h2>
                <div className="allClasses">
                    <div className="myClasses">
                        <button className="futureClasses selected">
                            bevorstehende Kurse
                        </button>
                        <button className="pastClasses">
                            vergangene Kurse
                        </button>
                    </div>

                    {
                        // eslint-disable-next-line array-callback-return
                        classObjects.map((oneClass) => {
                            if (signedUpClasses.includes(oneClass.ClassKey)) {
                                return (
                                    <div
                                        className="class"
                                        onClick={(e) =>
                                            openSelectedClass(oneClass)
                                        }
                                        key={oneClass.ClassKey}
                                    >
                                        <div className="classDetailBox">
                                            <div className="classDetails one">
                                                <div>
                                                    <div>
                                                        {oneClass.StartTime}-
                                                        {oneClass.EndTime}
                                                    </div>
                                                    <h3>
                                                        {oneClass.ClassType}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="classDetails two">
                                                <div>
                                                    Coach: {oneClass.Coach}
                                                </div>
                                                <div>
                                                    <span>
                                                        {oneClass.MaxSpots -
                                                            oneClass.SignedUp
                                                                .length}
                                                    </span>
                                                    {`/${oneClass.MaxSpots} Spots frei`}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            </div>
        );
    };

    return (
        <div className="profilewrapper">
            {classMode === "classinfo" && (
                <div className="classBox">
                    <ClassInfo />
                </div>
            )}
            {classMode === "editclass" && (
                <div className="classBox">
                    <EditClass />
                </div>
            )}
            {classMode === "addworkout" && (
                <div className="classBox">
                    <AddWorkout />
                </div>
            )}
            {classMode === "closed" && (
                <div className="profileInfoWrapper">
                    {renderProfileInfoBox()}
                    {renderSignedUpClassesList()}
                </div>
            )}
            {classMode === "editprofile" && <EditProfile />}
        </div>
    );
};

export default Profile;
