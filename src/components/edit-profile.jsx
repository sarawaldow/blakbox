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
        userAddress,
        setUserAddress
    } = useContext(BBxContext);

    const [dummyUserName, setDummyUserName] = useState(userName);
    const [dummyUserGender, setDummyUserGender] = useState(userGender);
    const [dummyUserMail, setDummyUserMail] = useState(userMail);
    const [dummyUserBDay, setDummyUserBDay] = useState(userBDay);
    const [dummyUserPhone, setDummyUserPhone] = useState(userPhone);
    const [dummyUserAddress, setDummyUserAddress] = useState(userAddress);

    const saveProfileChanges = () => {
        setUserName(dummyUserName);
        setUserGender(dummyUserGender);
        setUserMail(dummyUserMail);
        setUserBDay(dummyUserBDay);
        setUserPhone(dummyUserPhone);
        setUserAddress(dummyUserAddress);
    };

    return (
        <div className="editProfileWrapper">
            <button className="backBtn" onClick={(e) => setClassMode("closed")}>
                zurück zur Profilübersicht
            </button>
            <h3>persönliche Daten bearbeiten</h3>
            Name{" "}
            <input
                type="text"
                value={dummyUserName}
                onChange={(e) => setDummyUserName(e.target.value)}
            />
            Geschlecht
            <select
                value={dummyUserGender}
                onChange={(e) => setDummyUserGender(e.target.value)}
            >
                <option value="weiblich">weiblich</option>
                <option value="männlich">männlich</option>
                {/* <option value="Divers">Divers</option> */}
            </select>
            Geburtsdatum*{" "}
            <input
                type="date"
                value={dummyUserBDay}
                onChange={(e) => setDummyUserBDay(e.target.value)}
            />
            E-Mail-Adresse*
            <input
                type="email"
                value={dummyUserMail}
                onChange={(e) => setDummyUserMail(e.target.value)}
            />
            Telefonnummer*
            <input
                type="tel"
                value={dummyUserPhone}
                onChange={(e) => setDummyUserPhone(e.target.value)}
            />{" "}
            Anschrift*
            <div className="addressInputWrapper">
                Straße <input className="street" type="text"                 value={dummyUserAddress}
                onChange={(e) => setDummyUserAddress(e.target.value)}/> Hausnummer
                <input
                    className="houseNumber"
                    type="number"
                    min="1"
                /> Zusatz <input className="extraInfo" type="text" /> PLZ{" "}
                <input className="postcode" type="text" />
            </div>
            <p>
                Die mit * gekennzeichneten Informationen sind nur für den
                Box-Owner sichtbar
            </p>
            <button className="saveProfileChanges" onClick={(e) => saveProfileChanges()}>
                Änderungen speichern
            </button>
        </div>
    );
};
export default EditProfile;
