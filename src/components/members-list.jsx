import React, { useContext, useState, useEffect } from "react";
import { BBxContext } from "./BBxContext";

// import './header.css';

export const MembersList = () => {
    const {
        listOfMembers,
        setListOfMembers,
        setMemberPageMode,
        // selectedMember,
        setSelectedMember
    } = useContext(BBxContext);

    const [showOwners, setShowOwners] = useState(true);
    const [showCoaches, setShowCoaches] = useState(true);
    const [showAthletes, setShowAthletes] = useState(true);
    const [selectedAction, setSelectedAction] = useState("freischalten");
    const [selectedEmails, setSelectedEmails] = useState([]);
    const [showPendingRegistrations, setShowPendingRegistrations] = useState(
        false
    );

    useEffect(() => {
        console.log(listOfMembers);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listOfMembers]);
    useEffect(() => {
        console.log(selectedEmails);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedEmails]);

    const openMemberSettings = (member) => {
        setSelectedMember(member);
        setMemberPageMode("editmember");
    };

    const renderMembersList = () => {
        return (
            <div className="memberBoxesWrapper">
                {listOfMembers.map(
                    (member) =>
                        member.Activated && (
                            <div
                                className="memberBox"
                                onClick={(e) => {
                                    openMemberSettings(member);
                                }}
                                key={member.EMail}
                            >
                                <div className="memberInfo">
                                    <div>
                                        <h3>
                                            {member.Name} ({member.Status})
                                        </h3>
                                    </div>
                                    <div>
                                        <div>{member.Contract}</div>
                                        <div>{member.EMail}</div>
                                    </div>
                                </div>
                            </div>
                        )
                )}
            </div>
        );
    };

    const getNumberOfPendingRegistrations = () => {
        let counter = 0;
        // eslint-disable-next-line array-callback-return
        listOfMembers.map((member) => {
            console.log("member.Activated:", member.Activated);
            if (!member.Activated) counter++;
        });

        return counter;
    };

    const handleCheckedEmail = (mail, isChecked) => {
        isChecked
            ? setSelectedEmails([...selectedEmails, mail])
            : setSelectedEmails([
                  ...selectedEmails.slice(0, selectedEmails.indexOf(mail)),
                  ...selectedEmails.slice(selectedEmails.indexOf(mail) + 1)
              ]);
    };

    const renderRegPendingList = () => {
        return (
            <div className="regBoxesWrapper">
                {listOfMembers.map(
                    (member) =>
                        !member.Activated && (
                            <div className="regBox" key={member.EMail}>
                                <label htmlFor={member.EMail} className="info">

                                <div>{member.Name}</div>
                                <div>{member.EMail}</div>
                                <input
                                    type="checkbox"
                                    id={member.EMail}
                                    onChange={(e) =>
                                        handleCheckedEmail(
                                            member.EMail,
                                            e.target.checked
                                            )
                                        }
                                        />
                                        </label>
                            </div>
                        )
                )}
            </div>
        );
    };

    const handleAction = () => {
        // eslint-disable-next-line array-callback-return
        listOfMembers.map((member) => {
            if (selectedEmails.includes(member.EMail)) {
                selectedAction === "freischalten"
                    ? (member.Activated = true)
                    : setListOfMembers([
                          ...listOfMembers.slice(
                              0,
                              listOfMembers.indexOf(member)
                          ),
                          ...listOfMembers.slice(
                              listOfMembers.indexOf(member) + 1
                          )
                      ]);
                // setListOfMembers(listOfMembers);
            }
        });
        setSelectedEmails([]);
    };
    return (
        <div>
            <div className="registrationPendingListWrapper">
                <div className="showPendingListBtn"
                    onClick={(e) =>
                        setShowPendingRegistrations(!showPendingRegistrations)
                    }
                >
                    <h3>Warten auf Freischaltung (
                    {getNumberOfPendingRegistrations()})
                    </h3>
                    {showPendingRegistrations?<div className="arrowIcon up"/>:<div className="arrowIcon"/>}
                </div>
                {showPendingRegistrations && (
                    <div>
                        <div className="buttonWrapper">
                            ausgewählte
                            <select
                                value={selectedAction}
                                onChange={(e) => {
                                    setSelectedAction(e.target.value);
                                }}
                            >
                                <option value="freischalten">
                                    freischalten
                                </option>
                                <option value="ablehnen">ablehnen</option>
                            </select>
                            <button
                                className="activateBtn"
                                onClick={(e) => handleAction()}
                            >
                                los
                            </button>
                        </div>
                        {renderRegPendingList()}
                    </div>
                )}
            </div>

            <div className="membersListWrapper">
                <h3>Mitglieder</h3>
                <div className="checkboxesWrapper">
                    <label>
                        Box-Owner/Admins
                        <input
                            type="checkbox"
                            checked={showOwners}
                            onChange={(e) => setShowOwners(e.target.checked)}
                        />
                    </label>
                    <label>
                        Coaches
                        <input
                            type="checkbox"
                            checked={showCoaches}
                            onChange={(e) => setShowCoaches(e.target.checked)}
                        />
                    </label>
                    <label>
                        Athleten
                        <input
                            type="checkbox"
                            checked={showAthletes}
                            onChange={(e) => setShowAthletes(e.target.checked)}
                        />
                    </label>
                </div>
                <input
                    className="searchBar"
                    type="text"
                    placeholder="suche..."
                />
                {renderMembersList()}
            </div>
        </div>
    );
};

export default MembersList;
