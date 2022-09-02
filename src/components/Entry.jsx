import React from "react";

function Entry(props) {
    return (
        <div className="box">
            <div className="emoji-icon">
                <div>{props.emojiIcon}</div>
            </div>
            <div className="emoji-title">
                <h2>{props.emojiTitle}</h2>
            </div>
            <div className="emoji-description">
                <p>{props.emojiDescribe}</p>
            </div>
        </div>
    );
}

export default Entry;