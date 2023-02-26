import React from "react";
import styled from "styled-components";
import logo from "@/assets/app_logo.png";
import logo169 from "../assets/logo169.png";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { IconContext } from "react-icons";
import Button from "../shared/Button";
import Link from "next/link";
import Image from "next/image";

const Navbar = (props) => {
  return (
    <Nav>
      <div className="container">
        <Link href="/" className="cta__navbar-img-container__large">
          <a>
            <Image
              src={logo}
              alt="CampusTalkative logo"
              width={195}
              height={36}
            />
          </a>
        </Link>
        <Link href="/" className="cta__navbar-img-container__small">
          <a>
            <Image
              src={logo169}
              alt="CampusTalkative logo"
              width={40}
              height={40}
            />
          </a>
        </Link>
        <div className="cta__navbar-items-container">
          <IconContext.Provider value={{ color: "#666056", size: "18px" }}>
            <div className="cta__navbar-items-icons">
              <a
                href="https://instagram.com/campustalkative"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram aria-label="Instagram" />
              </a>
              <a
                href="https://twitter.com/campustalkative"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterCircle aria-label="Twitter" />
              </a>
              <a
                href="https://www.tiktok.com/@campustalkative?_t=8ZDKhEhZNP3&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                <FaTiktok aria-label="TikTok" />
              </a>
              <a
                href="https://www.linkedin.com/company/campustalkative/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin aria-label="LinkedIn" />
              </a>
            </div>
          </IconContext.Provider>
          <div className="cta__navbar-items-btn">
            <Link href="/join-us">
              <a>
                <Button text="Join community" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  max-width: 1128px;
  margin: 20px auto;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 24px;

    .cta__navbar-img-container__large {
      @media screen and (max-width: 650px) {
        display: none;
      }
    }
    .cta__navbar-img-container__small {
      display: none;
      @media screen and (max-width: 650px) {
        display: block;
      }
    }
  }
  .cta__navbar-img-container {
    margin-right: 30px;
  }
  .cta__navbar-items-container {
    display: flex;
    align-items: center;

    .cta__navbar-items-icons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 23px;
      @media screen and (max-width: 650px) {
        gap: 15px;
      }
    }
    .cta__navbar-items-btn {
      margin-left: 51px;

      @media screen and (max-width: 650px) {
        display: none;
      }
    }
  }
`;
