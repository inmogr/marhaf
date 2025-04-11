import React from "react";
import { Helmet } from "react-helmet";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Helmet>
                <title>Marhaf Chamie - Senior AI & Software Engineer</title>
                <meta name="description" content="Marhaf Chamie's personal portfolio..." />
                <meta property="og:title" content="Marhaf Chamie - Senior AI & Software Engineer" />
                <meta property="og:description" content="..." />
                <meta property="og:image" content="https://marhaf-syed.com/og.jpg" />
                <meta property="og:url" content="https://marhaf-syed.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="..." />
                <meta name="robots" content="index,follow" />
            </Helmet>
            <body className="antialiased">{children}</body>
        </html>
    );
}
