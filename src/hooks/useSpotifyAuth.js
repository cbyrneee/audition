import { useEffect, useState } from "react";
const c = require("centra");

export default function useSpotifyAuth(code) {
    const [accessToken, setAccessToken] = useState();

    useEffect(() => {
        c(
            new URL("https://audition-serverless.vercel.app/api/v1/login"),
            "POST"
        )
            .body(
                {
                    code: code,
                },
                "json"
            )
            .send()
            .then((res) => {
                res.json()
                    .then((data) => {
                        setAccessToken(data.accessToken);
                    })
                    .catch((error) => {
                        console.log(error);
                        window.location = "/";
                    });

                window.history.pushState({}, null, "/");
            })
            .catch((error) => {
                console.log(error);
                window.location = "/";
            });
    }, [code]);

    return accessToken;
}
