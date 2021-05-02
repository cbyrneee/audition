import React from "react";
import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSpotify } from "@fortawesome/free-brands-svg-icons";

export default function LoginComponent() {
    return (
        <div className="center-container">
            <h1>Welcome to Audition</h1>

            <p className="subtitle">
                Audition needs access to your Spotify account to recommend new
                artists
            </p>

            <div>
                <a
                    className="btn btn-primary"
                    href={`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${SPOTIFY_REDIRECT_URI}&scope=user-read-email%20user-read-private%20user-top-read&show_dialog=true`}
                >
                    <FontAwesomeIcon className="fa-icon" icon={faSpotify} />
                    <span>Login with Spotify</span>
                </a>
                <a
                    className="btn btn-github"
                    href={"https://github.com/dreamhopping/audition"}
                >
                    <FontAwesomeIcon className="fa-icon" icon={faGithub} />
                    <span>View source on GitHub</span>
                </a>
            </div>
        </div>
    );
}
