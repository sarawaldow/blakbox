import React, { useContext, useState, useEffect } from "react";
import { BBxContext } from "./BBxContext";

export const EditMember = () => {
    const {
        setMemberPageMode,
        selectedMember,
        // setSelectedMember,
        // listOfMembers
    } = useContext(BBxContext);

    const [accessStatus, setAccessStatus] = useState(selectedMember.Status);
    const [level, setLevel] = useState(selectedMember.Level);
    // const [contract, setContract] = useState(selectedMember.Contract);
    
    useEffect(() => {
        console.log(level);
        selectedMember.Level = level;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [level]);

    useEffect(() => {
        console.log(accessStatus);
        selectedMember.Status = accessStatus;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessStatus]);

    return (
        <div className="editMemberWrapper">
            <button onClick={(e) => setMemberPageMode("closed")}>
                X
            </button>
            <div className="memberSettings">
                <div>
                    <h3>{selectedMember.Name}</h3>
                    Berechtigungsstatus
                    <select
                        value={accessStatus}
                        onChange={(e) => {
                            setAccessStatus(e.target.value);
                        }}
                    >
                        <option value="Box-Owner">Box-Owner</option>
                        <option value="Coach">Coach</option>
                        <option value="Athlet">Athlet</option>
                    </select>
                    Trainingslevel<select
                        value={level}
                        onChange={(e) => {
                            setLevel(e.target.value);
                        }}
                    >
                        <option value="Anfänger">Anfänger</option>
                        <option value="Fortgeschritten">Fortgeschritten</option>
                        <option value="Hero">Hero</option>
                    </select>
                    
                    Vertragsart{selectedMember.Contract}
                </div>
                Info
                <div>Geburtstag: {selectedMember.Bday}</div>
                <div>Mail: {selectedMember.EMail}</div>
                <div>Tel.: {selectedMember.Phone}</div>
                <div>Add.: {selectedMember.Address}</div>
                <div>letzter Besuch: {selectedMember.lastVisited}</div>

                <button onClick={(e)=>setMemberPageMode("editcontract")}className="openContractSettingsBtn">Vertragsverwaltung und Kündigung</button>
                <button className="deleteMember">{selectedMember.Name} löschen</button>
            </div>
        </div>
    );
};

export default EditMember;
