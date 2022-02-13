import { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Boilerplate Nextjs</title>
                <link
                    rel="shortcut icon"
                    href="favicon.ico"
                    type="image/x-icon"
                />
                <link rel="manifest" href="manifest.json" />
                <meta name="description" content="Boilerplate Nextjs" />
                <meta name="theme-color" content="#000" />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
