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
        const getData = async () => {
            if (!accessToken) return;
            spotifyAPI.setAccessToken(accessToken);

            const topArtists = (
                await spotifyAPI.getMyTopArtists()
            ).body.items.map((item) => item.id);

            // We take 5 random artists because the Spotify API doesn't allow us to submit more than that
            const selectedArtists = topArtists
                .sort(() => 0.5 - Math.random())
                .slice(0, 5);

            const recommendations = await spotifyAPI.getRecommendations({
                min_energy: 0.0,
                seed_artists: selectedArtists,
                min_popularity: 0.0,
            });

            const recommendedArtists = await spotifyAPI.getArtists([
                ...new Set(
                    recommendations.body.tracks.map(
                        (track) => track.artists[0].id
                    )
                ),
            ]);

            const me = (await spotifyAPI.getMe()).body;
            setUsername(me.display_name || "you");
            setRecommendedArtists(recommendedArtists.body.artists);
            setLoaded(true);
        };

        getData();
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
