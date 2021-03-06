import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Vansh Dhillon</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Vansh Dhillon" />
            <meta name="description"
                content="Vansh ~ Die with Memories, Dreams" />
            <meta name="author" content="Vansh Dhillon" />
            <meta name="keywords"
                content="Vansh, Vansh's portfolio, vansh linux, ubuntu portfolio, vansh dhillon protfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Vansh Dhillon" />
            <meta itemProp="description"
                content="Vansh ~ Die with Memories, Dreams." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="V@nsh Dhillon" />
            <meta name="twitter:description"
                content="Vansh ~ Die with Memories, Dreams." />
            <meta name="twitter:site" content="van._.sh07" />
            <meta name="twitter:creator" content="van._.sh07" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="V@nsh Dhillon" />
            <meta name="og:description"
                content="Vansh ~ Die with Memories, not Dreams!" />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="http://vanshdhillon.ml/" />
            <meta name="og:site_name" content="Vansh's Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
