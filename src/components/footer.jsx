import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);


const StyledFooter = styled.footer`
    margin-top: 200px;
    position: relative;

    .modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        width: 50%;
        left: 50%;
        bottom : 350px;
        transform : translate(-50%,-50%);
        padding: 70px 50px 50px 50px;
        box-shadow: 0 0 15px rgba(0,0,0,.07);
        border-radius: 20px;
        background-color: white;
        color: black;
    }

    .modal h2 {
        color: black;
        font-size: 32px;
        margin-bottom: 40px;
    }

    .modal button {
        background-color: #FE52C0;
        padding: 25px 100px;
        color: white;
        font-size: 20px;
        font-weight: 700;
        border: none;
        border-radius: 50px;
        box-shadow: 0 0 3px #FE52C0 ;
    }

    .footer {
        padding: 200px 100px 80px 100px;
        background-color: #00252E;
    }

    .logo {
        background-color: white;
        height:40px;
        margin-bottom: 50px;
    }

    .info-container {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .info_col {
        display: flex;
        flex-direction:column;
        margin-right: 50px;
    }

    .info {
        width: 500px;
        padding-right: 100px;
    }

    .info-item {
        display: flex;
    }

    .link {
        width: 20%;
    }

    .sns {
        width: 20%;
        display:flex; 
        flex-direction: row;
    }

    span {
        color: white;
    }

    img{
        height: 18px;
        margin-right: 10px;
    }

    .info-container span {
        margin-bottom: 15px;
        color: white;
    }

    .info span {
        margin-bottom: 20px;
        font-size: 16px;
    }

    .sns span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        border: 1px solid white;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        color: white;
    }

    .copyright {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        font-size: 12px;
    }



    
`



export default function Footer() {
    return (
        <StyledFooter>
            <div className="modal">
                <h2>Ready To Build Your Community?</h2>
                <button>Get Started For Free</button>
            </div>
            <div className="footer">
                <img  className="logo" src="img/logo.svg" alt="" />
                <div className="info-container">
                    <div className="info_col info">
                        <div className="info-item">
                            <img src="img/icon-location.svg" alt="" />
                            <span>]Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua</span>
                        </div>
                        <div className="info-item">
                            <img src="img/icon-phone.svg" alt="location-icon" />
                            <span>+1-543-123-4567</span>
                        </div>
                        <div className="info-item">
                            <img src="img/icon-email.svg" alt="location-icon" />
                            <span>example@huddle.com</span>
                        </div>
                    </div>

                    <div className="info_col link">
                        <span>About Us</span>
                        <span>What We Do</span>
                        <span>FAQ</span>
                    </div>

                    <div className="info_col link">
                        <span>Career</span>
                        <span>Blog</span>
                        <span>Contact Us</span>
                    </div>

                    <div className="info_col sns">
                        <span><FontAwesomeIcon icon={["fab", "facebook"]} /></span>
                        <span><FontAwesomeIcon icon={["fab", "twitter"]} /></span>
                        <span><FontAwesomeIcon icon={["fab", "instagram"]} /></span>
                    </div>
                </div>
                <span className="copyright">© Copyright 2018 Huddle. All rights reserved.</span>
            </div>
        </StyledFooter>
    )
}
