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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <meta name="description" content="Boilerplate Nextjs" />
                <meta name="theme-color" content="#000" />
            </Head>
            <GlobalStyles />
            <NextNprogress color="#f1f1f1" startPosition={0.7} />
            <SessionProvider session={session}>
                <PlayerProvider>
                    <div>
                        <Component {...pageProps} />
                        <Player />
                    </div>
                </PlayerProvider>
            </SessionProvider>
        </>
    );
}

export default MyApp;
