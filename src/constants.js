const IS_DEVELOPMENT_ENV =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development";

export const SPOTIFY_CLIENT_ID = "0484168bada84e948070230150fddf2d";
export const SPOTIFY_REDIRECT_URI = IS_DEVELOPMENT_ENV
    ? "http://localhost:3000"
    : "https://audition.vercel.app";
export const API_URL = IS_DEVELOPMENT_ENV
    ? "http://localhost:3001"
    : "https://audition-serverless.vercel.app";
