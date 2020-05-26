import React, { useState } from "react";

const BBxContext = React.createContext(null);

const BBxProvider = (props) => {
    const [status, setStatus] = useState('HOME');

    const [memberType, setMemberType] = useState('Box Owner');

    // const [state, setState] = useState({
    //     startDate: null,
    //     endDate: null,
    //     focusedInput: START_DATE,
    // });

    return (
        <BBxContext.Provider
            value={{
                memberType,
                setMemberType,
                status,
                setStatus
            }}
        >
            {props.children}
        </BBxContext.Provider>
    );
};

export { BBxContext, BBxProvider };
