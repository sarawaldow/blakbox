import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";
import { useState } from "react";

export const EditProfile = () => {
    const {
        setClassMode,
        userName,
        setUserName,
        userGender,
        setUserGender,
        userMail,
        setUserMail,
        userBDay,
        setUserBDay,
        userPhone,
        setUserPhone,
        userStreet,
        setUserStreet,
        userHouseNr,
        setUserHouseNr,
        userExtraInfo,
        setUserExtraInfo,
        userPostCode,
        setUserPostCode
    } = useContext(BBxContext);

    const [dummyUserName, setDummyUserName] = useState(userName);
    const [dummyUserGender, setDummyUserGender] = useState(userGender);
    const [dummyUserMail, setDummyUserMail] = useState(userMail);
    const [dummyUserBDay, setDummyUserBDay] = useState(userBDay);
    const [dummyUserPhone, setDummyUserPhone] = useState(userPhone);
    const [dummyUserStreet, setDummyUserStreet] = useState(userStreet);
    const [dummyUserHouseNr, setDummyUserHouseNr] = useState(userHouseNr);
    const [dummyUserExtraInfo, setDummyUserExtraInfo] = useState(userExtraInfo);
    const [dummyUserPostCode, setDummyUserPostCode] = useState(userPostCode);

    const [changesMade, setChangesMade] = useState(false);

    const saveProfileChanges = () => {
        setUserName(dummyUserName);
        setUserGender(dummyUserGender);
        setUserMail(dummyUserMail);
        setUserBDay(dummyUserBDay);
        setUserPhone(dummyUserPhone);
        setUserStreet(dummyUserStreet);
        setUserHouseNr(dummyUserHouseNr);
        setUserExtraInfo(dummyUserExtraInfo);
        setUserPostCode(dummyUserPostCode);
        setChangesMade(false);
    };

    return (
        <div className="editProfileWrapper">
            <button className="backBtn" onClick={(e) => setClassMode("closed")}>
                zurück zur Profilübersicht
            </button>
            <h3>persönliche Daten bearbeiten</h3>
            {/* <div className="inputWrapper"></div> */}
            {changesMade && (
                <button
                    className="saveProfileChanges"
                    onClick={(e) => saveProfileChanges()}
                >
                    Änderungen speichern
                </button>
            )}
            <div className="inputWrapper">
                <div>Name</div>
                <input
                    type="text"
                    value={dummyUserName}
                    onChange={(e) => {
                        setDummyUserName(e.target.value);
                        setChangesMade(true);
                    }}
                />
            </div>
            <div className="inputWrapper">
                <div>Geschlecht</div>
                <select
                    value={dummyUserGender}
                    onChange={(e) => {
                        setDummyUserGender(e.target.value);
                        setChangesMade(true);
                    }}
                >
                    <option value="weiblich">weiblich</option>
                    <option value="männlich">männlich</option>
                    {/* <option value="Divers">Divers</option> */}
                </select>
            </div>
            <div className="inputWrapper">
                <div>Geburtsdatum* </div>
                <input
                    type="date"
                    value={dummyUserBDay}
                    onChange={(e) => {
                        setDummyUserBDay(e.target.value);
                        setChangesMade(true);
                    }}
                />
            </div>
            {/* <div className="inputWrapper"></div> */}
            <div className="inputWrapper">
                <div>E-Mail-Adresse*</div>
                <input
                    type="email"
                    value={dummyUserMail}
                    onChange={(e) => {
                        setDummyUserMail(e.target.value);
                        setChangesMade(true);
                    }}
                />
            </div>
            <div className="inputWrapper">
                <div>Telefonnummer*</div>
                <input
                    type="tel"
                    value={dummyUserPhone}
                    onChange={(e) => {
                        setDummyUserPhone(e.target.value);
                        setChangesMade(true);
                    }}
                />
            </div>
            <div>Anschrift*</div>
            <div className="addressInputWrapper">
                <div className="inputWrapper">
                    <div>Straße</div>
                    <input
                        className="street"
                        type="text"
                        value={dummyUserStreet}
                        onChange={(e) => {
                            setDummyUserStreet(e.target.value);
                            setChangesMade(true);
                        }}
                    />
                </div>
                <div className="inputWrapper">
                    <div>Hausnr. und Zusatz</div>
                    <div className="flexEndWrapper">
                        <input
                            className="houseNumber"
                            type="number"
                            min="1"
                            value={dummyUserHouseNr}
                            onChange={(e) => {
                                setDummyUserHouseNr(e.target.value);
                                setChangesMade(true);
                            }}
                        />
                        <input
                            className="extraInfo"
                            type="text"
                            value={dummyUserExtraInfo}
                            onChange={(e) => {
                                setDummyUserExtraInfo(e.target.value);
                                setChangesMade(true);
                            }}
                        />
                    </div>
                </div>
                <div className="inputWrapper">
                    <div>
                        PLZ
                        </div>
                        <input
                            className="postcode"
                            type="text"
                            value={dummyUserPostCode}
                            onChange={(e) => {
                                setDummyUserPostCode(e.target.value);
                                setChangesMade(true);
                            }}
                        />
                </div>
            </div>
            <p>
                Die mit * gekennzeichneten Informationen sind nur für den
                Box-Owner sichtbar
            </p>
        </div>
    );
};
export default EditProfile;
