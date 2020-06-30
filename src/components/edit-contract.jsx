// import React, { useContext, useEffect, useState } from "react";
import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";
import { useState } from "react";
import { useEffect } from "react";

// import './header.css';

export const EditContract = () => {
    const {
        // listOfMembers,
        // setListOfMembers,
        setMemberPageMode,
        selectedMember,
        todaysDate
        // setSelectedMember
    } = useContext(BBxContext);

    const [showSuccessfullySaved, setShowSuccessfullySaved] = useState(false);

    // const todaysISODateString = todaysDate.toISOString().substring(0, 10);
    const todaysISODateString = todaysDate.toLocaleDateString("sv");

    const [dummyNewContract, setDummyNewContract] = useState(
        selectedMember.NewContract.Contract
    );
    const [dummyNewContractDate, setDummyNewContractDate] = useState(
        selectedMember.NewContract.Date
    );

    const [
        dummyNoticeOfTerminationDate,
        setDummyNoticeOfTerminationDate
    ] = useState(selectedMember.Termination.NoticeDate);
    const [dummyTerminationDate, setDummyTerminationDate] = useState(
        selectedMember.Termination.TerminationDate
    );

    useEffect(() => {
        console.log(dummyNewContractDate);
    }, [dummyNewContractDate]);

    const calculateTerminationDate = (isoDateString) => {
        let terminationDate = new Date(isoDateString);
        terminationDate.setDate(terminationDate.getDate() + 90);
        const terminationIsoString = terminationDate
            .toISOString()
            .substring(0, 10);
        setDummyTerminationDate(terminationIsoString);
    };

    const saveChanges = () => {
        selectedMember.NewContract.Contract = dummyNewContract;
        selectedMember.NewContract.Date = dummyNewContractDate;
        selectedMember.Termination.NoticeDate = dummyNoticeOfTerminationDate;
        selectedMember.Termination.TerminationDate = dummyTerminationDate;
        console.log("newDate:",dummyNewContractDate,"todaysDate",todaysDate,todaysISODateString);
        if (dummyNewContractDate === todaysISODateString){
            selectedMember.Contract = dummyNewContract;
        } 
        setShowSuccessfullySaved(true);
    };

    const revertChanges = () => {
        setDummyNewContract(selectedMember.NewContract.Contract);
        setDummyNewContractDate(selectedMember.NewContract.Date);
        setDummyNoticeOfTerminationDate(selectedMember.Termination.NoticeDate);
        setDummyTerminationDate(selectedMember.Termination.TerminationDate);
    };

    return (
        <div className="editContractWrapper">
            {showSuccessfullySaved && (
                <div className="successfullyAddedLayer">
                    <h3>
                        Vertragsdetails von {selectedMember.Name} erfolgreich
                        gespeichert
                    </h3>

                    <button
                        onClick={(e) => {
                            setMemberPageMode("editmember");
                        }}
                    >
                        zurück zur Mitgliederinfo
                    </button>
                </div>
            )}
            {!showSuccessfullySaved && (
                <div>
                    <button onClick={(e) => setMemberPageMode("editmember")}>
                        zurück zur Mitgliederinfo
                    </button>
                    <h3>{selectedMember.Name}</h3>
                    <div className="inputWrapper">
                        aktueller Vertrag:{" "}
                        <div className="textAlignEnd">
                            {selectedMember.Contract}
                        </div>
                    </div>
                    <div className="inputWrapper">
                        gültig seit:
                        <div className="textAlignEnd">
                            {selectedMember.ContractStart}
                        </div>
                    </div>
                    <div className="inputWrapper">
                        neuer Vertrag:{" "}
                        <select
                            value={dummyNewContract}
                            onChange={(e) =>
                                setDummyNewContract(e.target.value)
                            }
                        >
                            <option value="Half Member">Half Member</option>
                            <option value="Full Member">Full Member</option>
                        </select>
                    </div>
                    <div className="inputWrapper">
                        gültig ab:{" "}
                        <input
                            type="date"
                            value={dummyNewContractDate}
                            onChange={(e) =>
                                setDummyNewContractDate(e.target.value)
                            }
                        />
                    </div>
                    <h4>Kündigung</h4>
                    <div className="inputWrapper">
                        Eingangsdatum:{" "}
                        <input
                            type="date"
                            value={dummyNoticeOfTerminationDate}
                            onChange={(e) => {
                                setDummyNoticeOfTerminationDate(e.target.value);
                                calculateTerminationDate(e.target.value);
                            }}
                        />
                    </div>
                    <div className="inputWrapper">
                        Geltungsdatum:{" "}
                        <input
                            type="date"
                            value={dummyTerminationDate}
                            onChange={(e) =>
                                setDummyTerminationDate(e.target.value)
                            }
                        />
                    </div>
                    <div className="buttonWrapper">
                        <button
                            className="saveChanges"
                            onClick={(e) => saveChanges()}
                        >
                            Änderungen speichern
                        </button>
                        <button onClick={(e) => revertChanges()}>
                            Änderungen zurücksetzen
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditContract;
