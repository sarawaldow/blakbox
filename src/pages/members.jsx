import React, { useContext } from "react";
import { BBxContext } from "../components/BBxContext";

import MembersList from "../components/members-list";
import ContractTypes from "../components/contract-types";

import "./members.scss";
import EditMember from "../components/edit-member";
import EditContract from "../components/edit-contract";

export const Members = () => {
    const { memberPageMode, setMemberPageMode } = useContext(BBxContext);

    return (
        <div className="memberswrapper">
            {memberPageMode === "closed" && (
                <div>
                    <h2>Mitgliederverwaltung</h2>
                    <div className="contractTypesWrapper">
                        <button onClick={(e)=>setMemberPageMode("contracttypes")}>
                            Vertragsarten und Berechtigungsarten verwalten
                        </button>
                    </div>
                    <MembersList />
                </div>
            )}

            {memberPageMode === "contracttypes" && <ContractTypes />}
            {memberPageMode === "editmember" && <EditMember />}
            {memberPageMode === "editcontract" && <EditContract />}
        </div>
    );
};

export default Members;
