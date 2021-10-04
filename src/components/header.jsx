import React from 'react';
import styled from "styled-components";
import logo from '../static/images/logo.svg';
import pattern from '../static/images/bg-hero-desktop.svg';
import mockups from '../static/images/illustration-mockups.svg';


const StyledHeader = styled.header`
    padding: 30px 70px;
    background-color:hsl(193, 100%, 96%);
    background-image: url(${pattern});
    

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            border: 1px solid light-gray;
            background-color: white;
            padding: 10px 40px;
            border-radius: 30px;
        }
        img {
            width: 200px;
        }
    }
    
    section {
        display: flex;
        align-items: center;
        margin: 50px 0;

        img {
            width: 60%;
        }

        div {
            position: relative;
            bottom: 30px;

            h1 {
                font-size: 40px;
                padding-right: 100px;
                line-height: 55px;
            }

            p {
                margin: 30px 50px 30px 0;
                font-size: 18px;
                line-height: 25px;
            }

            button {
                border: none;
                background-color: hotpink;
                color: white;
                border-radius: 30px;
                padding:20px 70px;
            }

        }
    }



`

export default function Header() {
    return (
        <StyledHeader>
            <nav>
                <img src={logo} alt="" />
                <button>Try if free</button>
            </nav>
            <section>
                <div>
                    <h1>Build The Community Your Fans Will Love</h1>
                    <p>Huddle re-imagines the wy we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                    <button>Get Started For Free</button>
                </div>
                <img src={mockups} alt="" />
            </section>
        </StyledHeader>
    )
}
