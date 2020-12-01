import React from "react";
import Head from "next/head";
import "../assets/css/style.css";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo";
import Nav from "../components/nav";
// UIKit import
import 'uikit/dist/css/uikit.min.css'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

const App = ({ Component, pageProps, apollo }) => {

  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Dmitry Matiouchenko | Portfolio</title>
        <link rel="shortcut icon" href="./favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <footer className="uk-section uk-section-medium" style={{ width: "100vw", height: "150px", background: "#4d4d4d" }}>
        <div className="uk-container uk-container-xlarge uk-flex uk-flex-between">
          <h3 style={{ color: "#e5e5e5", margin: "0" }}>Copyright © 2020 Dmitry Matiouchenko</h3>
          <ul className="uk-iconnav">
            <li><a href="https://www.linkedin.com/in/dmitrymatio/" target="_blank" uk-icon="icon: linkedin; ratio: 2.5"></a></li>
            <li><a href="https://github.com/dmitrymatio" target="_blank" uk-icon="icon: github-alt; ratio: 2.5"></a></li>
          </ul>
        </div>
      </footer>
      { UIkit.use(Icons)}
    </ApolloProvider>
  )
};

// Wraps all components in the tree with the data provider
export default withData(App);