import React from "react";
import Loader from "react-loader-spinner";

export default function LoadingComponent({ text }) {
    return (
        <div>
            <h2>{text}</h2>
            <div>
                <Loader
                    type="ThreeDots"
                    color="#000000"
                    height={80}
                    width={80}
                />
            </div>
        </div>
    );
}
