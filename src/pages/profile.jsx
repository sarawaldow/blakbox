import React, { useContext } from "react";
import { BBxContext } from "../components/BBxContext";

import ClassInfo from "../components/class-info";

import "../pages/profile.scss";

export const Profile = () => {
    const {
        signedUpClasses,
        classObjects,
        setSelectedClassObject,
        setIsClassLayerVisible,
        isClassLayerVisible
    } = useContext(BBxContext);
    const openSelectedClass = (obj) => {
        setSelectedClassObject(obj);
        setIsClassLayerVisible(true);
    };

    return (
        <div className="profilewrapper">
            {isClassLayerVisible && (
                <div className="classBox">
                    <ClassInfo />
                </div>
            )}

            {!isClassLayerVisible && (
                <div className="profileInfoWrapper">
                    <div className="profileInfoBox">
                        <div className="profileInfoInnerWrapper">
                            <div className="profilePic" />
                            <div className="profileInfo">
                                Name Geschlecht Vertragsart Kursanmeldungen für
                                diesen Monat
                            </div>
                            <div className="editProfileInfo"></div>
                        </div>
                    </div>
                    <div className="signedUpClassesList">
                        <h2>meine Kurse</h2>
                        <div className="allClasses">
                            <div className="myClasses">
                                <div className="futureClasses">
                                    bevorstehende Kurse
                                </div>
                                <div className="pastClasses">
                                    vergangene Kurse
                                </div>
                            </div>

                            {
                                // eslint-disable-next-line array-callback-return
                                classObjects.map((oneClass) => {
                                    if (
                                        signedUpClasses.includes(
                                            oneClass.ClassKey
                                        )
                                    ) {
                                        return (
                                            <div
                                                className="class"
                                                onClick={(e) =>
                                                    openSelectedClass(oneClass)
                                                }
                                                key={oneClass.ClassKey}
                                            >
                                                <div className="classDetailBox">
                                                    <div className="classDetails">
                                                        <div>
                                                            <b>
                                                                {
                                                                    oneClass.ClassType
                                                                }
                                                            </b>
                                                        </div>
                                                        <div>
                                                            {oneClass.StartTime}
                                                            -{oneClass.EndTime}
                                                        </div>
                                                    </div>
                                                    <div className="classDetails">
                                                        <div>
                                                            Coach:
                                                            {oneClass.Coach}
                                                        </div>
                                                        <div>
                                                            {oneClass.FreeSpots}
                                                            /{oneClass.MaxSpots}{" "}
                                                            Spots frei
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="openClass">
                                                    <div
                                                        onClick={(e) =>
                                                            openSelectedClass(
                                                                oneClass
                                                            )
                                                        }
                                                    >
                                                        Öffnen
                                                    </div>
                                                </div> */}
                                            </div>
                                        );
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
