import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SpotifyAuthButton from "./buttons/SpotifyAuthButton";

export default function LoginComponent() {
    return (
        <div className="center-container">
            <div>
                <h1 className="title">Welcome to Audition</h1>

                <h2 className="subtitle">
                    Audition needs access to your Spotify account to recommend
                    new artists
                </h2>
            </div>

            <div className="buttons-container">
                <SpotifyAuthButton text={"Login with Spotify"} />
                <a
                    className="button"
                    href={"https://github.com/dreamhopping/audition"}
                >
                    <FontAwesomeIcon className="fa-icon" icon={faGithub} />
                    <span>View source on GitHub</span>
                </a>
            </div>
        </div>
    );
}
