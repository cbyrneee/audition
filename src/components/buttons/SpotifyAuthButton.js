import React from "react";
import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "../../constants";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SpotifyAuthButton({ text }) {
    return (
        <a
            className="button-green"
            href={`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${SPOTIFY_REDIRECT_URI}&scope=user-read-email%20user-read-private%20user-top-read`}
        >
            <FontAwesomeIcon className="fa-icon" icon={faSpotify} />
            <span>{text}</span>
        </a>
    );
}
