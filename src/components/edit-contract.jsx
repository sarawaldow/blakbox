// import React, { useContext, useEffect, useState } from "react";
import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";

// import './header.css';

export const EditContract = () => {
    const {
        // listOfMembers,
        // setListOfMembers,
        setMemberPageMode,
        selectedMember,
        // setSelectedMember
    } = useContext(BBxContext);

    return (
        <div className="editContractWrapper">
                        <button onClick={(e) => setMemberPageMode("editmember")}>
                zurück zur Mitgliederinfo
            </button>
                    <h3>{selectedMember.Name}</h3>
    <div>aktueller Vertrag: {selectedMember.Contract}</div>
    <div>neuer Vertrag: <select><option value="Half Member">Half Member</option><option value="Full Member">Full Member</option></select></div>
    <div>gültig ab: <input type="date"/></div>
    <div>Kündigung: </div>
    <div>Eingangsdatum: <input type="date"/></div>
    <div>Geltungsdatum: <input type="date"/></div>
    <button>Änderungen speichern</button>
    <button>Änderungen zurücksetzen</button>
        </div>
    );
};

export default EditContract;
