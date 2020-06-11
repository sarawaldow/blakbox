import React, { useContext } from "react";
import { BBxContext } from "../components/BBxContext";

import MembersList from "../components/members-list";
import ContractTypes from "../components/contract-types";

import "./members.scss";
import EditMember from "../components/edit-member";

export const Members = () => {
    const { memberPageMode } = useContext(BBxContext);

    return (
        <div className="memberswrapper">
            {memberPageMode === "closed" && (
                <div>
                    <h2>Mitgliederverwaltung</h2>
                    <ContractTypes />
                    <MembersList />
                </div>
            )}
            {memberPageMode === "editmember"&& <EditMember/>}
        </div>
    );
};

export default Members;
