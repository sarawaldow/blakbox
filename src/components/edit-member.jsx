import React, { useContext, useState, useEffect } from "react";
import { BBxContext } from "./BBxContext";

export const EditMember = () => {
    const {
        setMemberPageMode,
        selectedMember
        // setSelectedMember,
        // listOfMembers
    } = useContext(BBxContext);

    const [accessStatus, setAccessStatus] = useState(selectedMember.Status);
    // const [contract, setContract] = useState(selectedMember.Contract);



    useEffect(() => {
        console.log(accessStatus);
        selectedMember.Status = accessStatus;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessStatus]);

    return (
        <div className="editMemberWrapper">
            <button onClick={(e) => setMemberPageMode("closed")}>X</button>
            <div className="memberSettings">
                    <h3>{selectedMember.Name}</h3>
                    <div className="inputWrapper">
                        <div>Berechtigungsstatus</div>
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
                    </div>

                    <div className="inputWrapper">
                        <div>Vertragsart</div>
                        <div className="textAlignEnd">
                            {selectedMember.Contract}
                        </div>
                    </div>
                    <div className="flexEndWrapper">
                        <button
                            onClick={(e) => setMemberPageMode("editcontract")}
                            className="openContractSettingsBtn"
                        >
                            Vertragsverwaltung und Kündigung
                        </button>
                    </div>
                <h4>Info</h4>
                <div className="infoWrapper">Geburtstag: <div>{selectedMember.Bday}</div></div>
                <div className="infoWrapper">Mail: <div>{selectedMember.EMail}</div></div>
                <div className="infoWrapper">Telefon: <div>{selectedMember.Phone}</div></div>
                <div className="infoWrapper">Adresse: <div>{selectedMember.Address}</div></div>
                <div className="infoWrapper">letzter Besuch: <div></div>{selectedMember.lastVisited}</div>
                <button className="deleteMember">
                    {selectedMember.Name} löschen
                </button>
            </div>
        </div>
    );
};

export default EditMember;
