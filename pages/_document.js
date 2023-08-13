import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script
          async
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCf6DZtHkKBCud3eSyfUzqIdJSP2bOW3pk&libraries=places&callback=initMap"
        ></script>
      <body>
        <Main />
        <NextScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />
       
      </body>
    </Html>
  );
}
