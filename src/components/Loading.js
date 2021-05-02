import React from "react";
import Loader from "react-loader-spinner";
import useMediaQuery from "../hooks/useMediaQuery";

export default function LoadingComponent({ text }) {
    return (
        <div className="center-container">
            <h1 className="title">{text}</h1>

            <Loader
                type="ThreeDots"
                height={80}
                width={80}
                color={
                    useMediaQuery("(prefers-color-scheme: dark)")
                        ? "#FFFFFF"
                        : "#000000"
                }
            />
        </div>
    );
}
