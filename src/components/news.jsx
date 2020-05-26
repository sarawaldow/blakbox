import React, { useContext } from "react";
import { BBxContext } from "./BBxContext";

import "./news.scss";

export const News = () => {
    const { memberType } = useContext(BBxContext);

    return (
        <div className="newswrapper">
            <div className="newsBox">
                <div className="newsHeadlineWrapper">
                    <h2>
                        Neuigkeiten (<span className="highlight">1</span>)
                    </h2>
                    {memberType === "Box Owner" ? (
                        <div className="addNews">neue Meldung</div>
                    ) : (
                        <div />
                    )}
                </div>
                <div className="news">
                    <div className="newsContentBox">
                        <div className="newsContent">
                            <div className="newsText">
                                <h3>Meldung</h3>
                                <p>Dies ist eine Meldung</p>
                            </div>
                            <div className="newsDate">30.04.20</div>
                        </div>
                        <div className="giveLike">gefällt mir</div>
                    </div>
                    <div className="commentSec">
                        <div className="comment">Kommentar</div>
                        <div className="newComment">kommentieren</div>
                    </div>
                </div>
                <div className="news">
                    <div className="newsContentBox">
                        <div className="newsContent">
                            <div className="newsText">
                                <h3>Meldung</h3>
                                <p>Dies ist eine Meldung</p>
                            </div>
                            <div className="newsDate">20.04.20</div>
                        </div>
                        <div className="giveLike">gefällt mir</div>
                    </div>
                    <div className="commentSec">
                        <div className="comment">Kommentar</div>
                        <div className="newComment">kommentieren</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
