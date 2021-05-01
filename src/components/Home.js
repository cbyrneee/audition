import React, { useEffect, useState } from "react";
import useSpotifyAuth from "../hooks/useSpotifyAuth";
import SpotifyAPI from "spotify-web-api-node";
import LoadingComponent from "./Loading";
import RecommendationsComponent from "./Recommendations";
import { SPOTIFY_CLIENT_ID } from "../constants";

const spotifyAPI = new SpotifyAPI({
    clientId: SPOTIFY_CLIENT_ID,
});

export default function HomeComponent({ code }) {
    const [loaded, setLoaded] = useState(false);
    const [username, setUsername] = useState("");
    const [recommendedArtists, setRecommendedArtists] = useState([]);
    const accessToken = useSpotifyAuth(code);

    useEffect(() => {
        if (!accessToken) return;

        spotifyAPI.setAccessToken(accessToken);
        spotifyAPI.getMe().then((data) => {
            setUsername(data.body.display_name || "you");
        });

        spotifyAPI.getMyTopArtists().then((data) => {
            const topArtists = data.body.items
                .map((artist) => {
                    return artist.id;
                })
                .slice(0, 5);

            spotifyAPI
                .getRecommendations({
                    min_energy: 0.0,
                    seed_artists: topArtists.slice(0, 5),
                    min_popularity: 0.0,
                })
                .then((data) => {
                    const existingArtists = {};
                    const artistIDs = data.body.tracks
                        .filter((item) => {
                            // Remove duplicates
                            const exists = existingArtists[item.artists[0].id];
                            if (!exists) {
                                existingArtists[item.artists[0].id] = true;
                            }

                            return !exists;
                        })
                        .map((track) => {
                            return track.artists[0].id;
                        });

                    spotifyAPI.getArtists(artistIDs).then((data) => {
                        setRecommendedArtists(
                            data.body.artists.map((artist) => {
                                return {
                                    id: artist.id,
                                    name: artist.name,
                                    url: artist.external_urls.spotify,
                                    image:
                                        artist.images.length >= 0
                                            ? artist.images[0].url
                                            : "",
                                };
                            })
                        );

                        setLoaded(true);
                    });
                });
        });

        return () => {};
    }, [accessToken]);

    return (
        <div className="container">
            {loaded ? (
                <RecommendationsComponent
                    username={username}
                    artists={recommendedArtists}
                />
            ) : (
                <LoadingComponent text={"Getting your recommendations"} />
            )}
        </div>
    );
}
