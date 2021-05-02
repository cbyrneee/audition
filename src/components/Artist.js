import React from "react";

export default function ArtistComponent({ artist }) {
    return (
        <div className="artist-container">
            <img
                className="artist-image"
                alt=""
                src={artist.images[0].url}
            ></img>
            <a className="artist-link" href={artist.ima}>
                {artist.name}
            </a>
        </div>
    );
}
