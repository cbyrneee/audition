import React from "react";

export default function ArtistComponent({ artist }) {
    return (
        <div className="artist-container">
            <img className="artist-image" alt="" src={artist.image}></img>
            <a className="artist-link" href={artist.url}>
                {artist.name}
            </a>
        </div>
    );
}
