import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import c from "centra";

export default function useSpotifyAuth(code: string): string {
    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        const fetchToken = async () => {
            try {
                // Remove the code query
                window.history.pushState({}, "", "/");

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
                window.location.href = "/";
            }
        };

        fetchToken();
    }, [code]);

    return accessToken;
}
