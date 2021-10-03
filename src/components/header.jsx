import React from 'react';
import {ReactComponent as HeaderLogo} from '../static/images/logo.svg';
import {ReactComponent as HeaderImage} from '../static/images/illustration-mockups.svg';


export default function Header() {
    return (
        <header>
            <nav>
                <HeaderLogo />
                <button>Try if free</button>
            </nav>
            <div>
                <div>
                    <h1>Build The Community Your Fans Will Love</h1>
                    <p>Huddle re-imagines the wy we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                    <button>Get Started For Free</button>
                </div>
                <HeaderImage />
            </div>
        </header>
    )
}
