import React from "react";
import TimetablePrev from "../components/timetable-prev";
import News from "../components/news";

// import './header.css';

export const Home = () => {
    return (
        <div className="homeWrapper">
            <TimetablePrev />
            <News/>
        </div>
    );
};

export default Home;
