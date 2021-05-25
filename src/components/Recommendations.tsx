import React from "react";
import ArtistComponent from "./Artist";
import SpotifyAuthButton from "./buttons/SpotifyAuthButton";

interface Props {
    artists: SpotifyApi.ArtistObjectFull[];
    username: string;
}

export default function RecommendationsComponent(props: Props) {
    return (
        <div>
            <div className="flex flex-col space-y-4 pb-4">
                <div>
                    <h1 className="title">
                        Recommendations for {props.username}
                    </h1>
                    <p className="subtitle">
                        Thank you for using my service! If you have any
                        suggestions, please contact me on{" "}
                        <a
                            className="link"
                            href="https://twitter.com/cbyrnedev"
                        >
                            Twitter
                        </a>
                        !
                    </p>
                </div>
                <div className="buttons-container">
                    <SpotifyAuthButton text={"Refresh recommendations"} />
                </div>
            </div>
            <div className="artists-container">
                {props.artists.map((artist) => (
                    <ArtistComponent artist={artist} key={artist.id} />
                ))}
            </div>
        </div>
    );
}
