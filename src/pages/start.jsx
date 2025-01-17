import React, {useContext} from "react";
import { BBxContext } from '../components/BBxContext';

// import './header.css';

export const Start = () => {
    const {
        setStatus, memberType,
        setMemberType
    } = useContext(BBxContext);

    const setAccess = (memberType) => {
        setMemberType(memberType);
    }

    return (
        <div className="startWrapper">
            <div className="logoBox"/>
            <div className="LoginTypesSec">

            <button className={memberType === 'Box Owner'? "selected":""}
            onClick={(e) => setAccess('Box Owner')}>Box Owner</button>
            <button className={memberType === 'Coach'? "selected":""}
            onClick={(e) =>setAccess('Coach')}>Coach</button>
            <button className={memberType === 'Athlet'? "selected":""}
            onClick={(e) =>setAccess('Athlet')}>Athlet</button>
            </div>

            <button className="LoginBtn" disabled={ !memberType ? 'disabled' : ''} onClick={(e) => setStatus('TIMETABLE')}>Weiter</button>
        </div>
    );
};

export default Start;
