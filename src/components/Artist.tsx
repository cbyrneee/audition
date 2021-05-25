import React from "react";

interface Props {
    artist: SpotifyApi.ArtistObjectFull;
}

export default function ArtistComponent(props: Props) {
    return (
        <div className="artist-component">
            <a href={props.artist.external_urls.spotify}>
                <img
                    alt=""
                    className="artist-image"
                    src={props.artist.images[0].url}
                ></img>
            </a>
            <a
                className="artist-link"
                href={props.artist.external_urls.spotify}
            >
                {props.artist.name}
            </a>
            <p className="artist-genre">
                {props.artist.genres[0] || "unknown genre"}
            </p>
        </div>
    );
}
