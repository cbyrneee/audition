export function getAuthURL() {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const scope = process.env.NEXT_PUBLIC_SCOPE;
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;

  return `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`;
}
