import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from "next/head";
import NextNprogress from "nextjs-progressbar";

import Player from "../components/Player";
import { PlayerProvider } from "../contexts/Player";
import GlobalStyles from "../styles/GlobalStyle";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <>
            <Head>
                <title>MySpotify</title>
                <link rel="manifest" href="manifest.json" />
                <link
                    rel="shortcut icon"
                    href="/assets/spotify.svg"
                    type="image/x-icon"
                />
                <meta
                    name="description"
                    content="MySpotify is a application that allow user see contents from your spotify and listening a preview. This is basically a Spotify Clone."
                />
                <meta name="theme-color" content="#000" />
            </Head>
            <GlobalStyles />
            <NextNprogress color="#f1f1f1" startPosition={0.7} />
            <SessionProvider session={session}>
                <PlayerProvider>
                    <>
                        <Component {...pageProps} />
                        <Player />
                    </>
                </PlayerProvider>
            </SessionProvider>
        </>
    );
}

export default MyApp;
