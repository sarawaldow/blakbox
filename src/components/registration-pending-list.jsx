import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";
import { useState } from "react";
import { useEffect } from "react";

// import './header.css';

export const RegistrationPendingList = () => {
    const { listOfMembers, setListOfMembers } = useContext(BBxContext);

    const [selectedAction, setSelectedAction] = useState("freischalten");

    const [selectedEmails, setSelectedEmails] = useState([]);


    useEffect(() => {
        console.log(selectedEmails);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedEmails]);

    const handleCheckedEmail = (mail, isChecked) => {
        isChecked
            ? setSelectedEmails([...selectedEmails, mail])
            : 
            setSelectedEmails([...selectedEmails.slice(0,selectedEmails.indexOf(mail)), ...selectedEmails.slice(selectedEmails.indexOf(mail)+1)]);
    };

    const renderRegPendingList = () => {
        return (
            <div>
                {listOfMembers.map(
                    (member) =>
                        !member.Activated && (
                            <div className="regBox" key={member.EMail}>
                                {member.Name}
                                <br />
                                {member.EMail}
                                <input
                                    type="checkbox"
                                    onChange={(e) =>
                                        handleCheckedEmail(
                                            member.EMail,
                                            e.target.checked
                                        )
                                    }
                                />
                            </div>
                        )
                )}
            </div>
        );
    };

    const handleAction = () => {
        // eslint-disable-next-line array-callback-return
        listOfMembers.map((member)=>{
            if(selectedEmails.includes(member.EMail)){
                // selectedAction === freischalten ? member.Activated = true;
                member.Activated = true;
                setListOfMembers(listOfMembers);
            }
        })
     setSelectedEmails([]);
    };
    return (
        <div className="registrationPendingListWrapper">
            <h3>Warten auf Freischaltung</h3>
            <div className="buttonWrapper">
                ausgewählte
                <select
                    value={selectedAction}
                    onChange={(e) => {
                        setSelectedAction(e.target.value);
                    }}
                >
                    <option value="freischalten">freischalten</option>
                    <option value="ablehnen">ablehnen</option>
                </select>
                <button className="activateBtn" onClick={(e) => handleAction()}>
                    los
                </button>
            </div>
            {renderRegPendingList()}
        </div>
    );
};

export default RegistrationPendingList;
