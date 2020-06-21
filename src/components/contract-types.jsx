import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";
// import './header.css';

export const ContractTypes = () => {
    const { setMemberPageMode } = useContext(BBxContext);

    const contractTypes = [
        {
            Key: 0,
            Name: "Full Member",
            SignUps: 100,
            Price: 95.0,
            ContractTime: "12 Monate",
            TerminationTime: "3 Monate"
        },
        {
            Key: 1,
            Name: "Half Member",
            SignUps: 8,
            Price: 75.0,
            ContractTime: "12 Monate",
            TerminationTime: "3 Monate"
        }
    ];

    const renderContractTypes = () => {
        return (
            <div className="allContractTypesWrapper">
                {contractTypes.map((type) => (
                    <div className="contractTypeWrapper">
                        <div className="innerWrapper">
                            <div><h3>{type.Name}</h3></div>
                            <div>Kosten/Monat: <span>{type.Price}€</span></div>
                            <div>
                                Anmeldungen:{" "}<span>
                                {type.SignUps === 100
                                    ? "unbegrenzt"
                                    : type.SignUps}
                            </span></div>
                            <div>Vertragslaufzeit: <span>{type.ContractTime}</span></div>
                            <div>Kündigungsfrist: <span>{type.TerminationTime}</span></div>
                        </div>
                        <button>bearbeiten</button>
                    </div>
                ))}
                <button>Vertragsart hinzufügen</button>
            </div>
        );
    };

    return (
        <div className="contractTypesBox">
            <button
                className="backBtn"
                onClick={(e) => setMemberPageMode("closed")}
            >
                X
            </button>
            <div className="headlineWrap">
                <button className="selected">Vertragsarten</button>
                <button>Berechtigungen</button>
            </div>
            {renderContractTypes()}
        </div>
    );
};

export default ContractTypes;
