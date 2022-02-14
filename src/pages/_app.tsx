import { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
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
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
                    rel="stylesheet"
                />
                <meta name="description" content="Boilerplate Nextjs" />
                <meta name="theme-color" content="#000" />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
