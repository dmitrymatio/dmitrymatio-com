import React from "react";
import Link from "next/link"
import Query from "../components/query";
import TAGS_QUERY from "../apollo/queries/tag/tags";

const Nav = () => {
    return (
        <div className="uk-section-primary uk-preserve-color" style={{background:"#243d68"}}>
            <div uk-sticky="animation: uk-animation-slide-top; sel-target: uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent ; top: 100">
                <nav className="uk-navbar-container">
                    <div className="uk-container uk-container-expand">
                        <div className="uk-navbar-left uk-flex-row uk-flex-between" >
                            <a href="/"><img src="./website-styleguide-logos_export-yellow.png" width="200" alt="logo" uk-img /></a>
                            <ul className="uk-navbar-nav" >
                                <li><a href="/" style={{ color: "white" }}>Home</a></li>
                                <li><a href="/about" style={{ color: "white" }}>About</a></li>
                                <li><a href="/connect" style={{ color: "white" }}>Connect</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default Nav;