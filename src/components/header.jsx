import React from 'react';
import styled from "styled-components";



const StyledHeader = styled.header`
    padding: 50px 70px;
    background-color:hsl(193, 100%, 96%);
    background-image: url('img/bg-hero-desktop.svg');
    

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            box-shadow: 0 0 15px rgba(0,0,0,.2);
            background-color: white;
            padding: 15px 60px;
            border-radius: 30px;
            border: none;
            font-size: 14px;
            font-weight: 700;
            color: black;
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
            width: 55%;
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
                <img src="img/logo.svg" alt="" />
                <button>Try if Free</button>
            </nav>
            <section>
                <div>
                    <h1>Build The Community Your Fans Will Love</h1>
                    <p>Huddle re-imagines the wy we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                    <button>Get Started For Free</button>
                </div>
                <img src="img/illustration-mockups.svg" alt="" />
            </section>
        </StyledHeader>
    )
}
