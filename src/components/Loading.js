import React from "react";

export default function LoadingComponent({ text }) {
    return (
        <div className="center-container">
            <h1 className="title">{text}</h1>
        </div>
    );
}
