import React from "react";

interface Props {
    text: string;
}

export default function LoadingComponent(props: Props) {
    return (
        <div className="center-container">
            <h1 className="title">{props.text}</h1>
        </div>
    );
}
