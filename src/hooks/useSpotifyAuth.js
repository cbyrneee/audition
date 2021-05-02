import { useEffect, useState } from "react";
import { API_URL } from "../constants";
const c = require("centra");

export default function useSpotifyAuth(code) {
    const [accessToken, setAccessToken] = useState();

    useEffect(() => {
        async function fetchToken() {
            try {
                // Remove the code query
                window.history.pushState({}, null, "/");

                const request = c(
                    new URL(`${API_URL}/api/v1/login`),
                    "POST"
                ).body(
                    {
                        code: code,
                    },
                    "json"
                );

                const response = await request.send();
                const json = await response.json();

                setAccessToken(json.accessToken);
            } catch (error) {
                window.location = "/";
            }
        }

        fetchToken();
    }, [code]);

    return accessToken;
}
