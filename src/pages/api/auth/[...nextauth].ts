import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export default NextAuth({
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
            authorization:
                "https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,user-top-read,user-read-recently-played",
        }),
    ],
    secret: process.env.SECRET,
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            return session;
        },
    },
});
