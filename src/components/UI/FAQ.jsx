import { useState } from "react";

export const FAQ = ({curData, ontoggle, isActive}) => {
    const {question, answer} = curData;
   

    return (
        <li>
            <div className="accrodion-grid">
                <p>{question}</p>
                <button onClick={ontoggle} className={isActive ? "active-btn" : ""}>{isActive ? "Close" : "Show"}</button>
            </div>
            <p>{isActive && answer}</p>
        </li>
    );
};