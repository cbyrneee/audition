import React from "react";

export default function ArtistComponent({ artist }) {
    return (
        <div>
            <a href={artist.external_urls.spotify}>
                <img
                    alt=""
                    className="artist-image"
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
