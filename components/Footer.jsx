import React from "react";
import Link from "next/link";
import styled from "styled-components";
import logo from "@/assets/app_logo.png";
import Image from "next/image";

const FooterComponent = () => {
  return (
    <Footer data-aos="fade-up" data-aos-duration="2000">
      <Container>
        <Link href="/">
          <Image
            src={logo}
            width="auto"
            height="auto"
            alt="campustalkative logo"
          />
        </Link>
        <span>&copy; 2023. All rights reserved.</span>
      </Container>
    </Footer>
  );
};

export default FooterComponent;

const Footer = styled.footer`
  height: 120px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  /* margin: 40px; */
  margin: 40px auto;
  span {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #191102;
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;
