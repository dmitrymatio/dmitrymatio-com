import React from "react";
import Link from "next/link"
import Query from "../components/query";
import TAGS_QUERY from "../apollo/queries/tag/tags";

const Nav = () => {
    return (
        <div class="uk-section-primary uk-preserve-color">

            <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent ; top: 200">

                <nav class="uk-navbar-container">
                    <div class="uk-container uk-container-expand">
                        <div class="uk-navbar-left uk-flex-row uk-flex-between" >
                            <a href="/"><img src="./website-styleguide-logos-10.png" width="200" alt="logo" uk-img /></a>
                            <ul class="uk-navbar-nav">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default Nav;