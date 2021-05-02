import React from "react";

export default function ArtistComponent({ artist }) {
    return (
        <div className="artist-container">
            <a href={artist.external_urls.spotify}>
                <img
                    className="artist-image"
                    alt=""
                    src={artist.images[0].url}
                ></img>
            </a>
            <a className="artist-link" href={artist.external_urls.spotify}>
                {artist.name}
            </a>
            <p className="artist-genre">
                {artist.genres[0] || "unknown genre"}
            </p>
        </div>
    );
}
