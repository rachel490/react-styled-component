import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);


const StyledFooter = styled.footer`
    padding: 150px 100px 100px;
    background-color: #00252E;
    color: white;

    .logo {
        color: white;
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

    img{
        height: 18px;
        margin-right: 10px;
    }

    .info-item span {
        margin-bottom: 15px;
    }

    .info span {
        margin-bottom: 20px;
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
    }

    .copyright {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
    }

`



export default function Footer() {
    return (
        <StyledFooter>
            <img  className="logo" src="img/logo.svg" alt="" />
            <div className="info-container">
                <div className="info_col info">
                    <div className="info-item">
                        <img src="img/icon-location.svg" alt="" />
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, minus aut similique maxime quas facere animi! Libero, dolorem omnis officia facilis tempora, neque doloribus corporis saepe, asperiores exercitationem rem laboriosam.</span>
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
        </StyledFooter>
    )
}
