import React from "react";
import ArtistComponent from "./Artist";
import SpotifyAuthButton from "./buttons/SpotifyAuthButton";

export default function RecommendationsComponent({ artists, username }) {
    return (
        <div>
            <div class="flex flex-col space-y-4 pb-4">
                <div>
                    <h1 className="title">Recommendations for {username}</h1>
                    <p className="subtitle">
                        Thank you for using my service! If you have any
                        suggestions, please contact me on{" "}
                        <a
                            className="link"
                            href="https://twitter.com/dreamhopping"
                        >
                            Twitter
                        </a>
                        !
                    </p>
                </div>
                <div class="buttons-container">
                    <SpotifyAuthButton text={"Refresh recommendations"} />
                </div>
            </div>
            <div className="artists-container">
                {artists.map((artist) => (
                    <ArtistComponent artist={artist} key={artist.id} />
                ))}
            </div>
        </div>
    );
}
