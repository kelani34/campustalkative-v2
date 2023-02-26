import React from "react";
import styled from "styled-components";
import Button from "@/shared/Button";
import members from "@/assets/home-img.png";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Section>
      <Container>
        <div className="header-text">
          <h1>
            Join the largest community for youth growth and development in
            Africa
          </h1>
          <div className="btn">
            <Link href="/community">
              <Button text="Join community" />
            </Link>
            <a href="#growth">
              <Button outline text="See our growth" />
            </a>
          </div>
        </div>
        <Img>
          <Image
            src={members}
            alt="campustalkative branding image with comminuty members"
          />
        </Img>
      </Container>
    </Section>
  );
};

export default HeroSection;

const Section = styled.section`
  max-width: 1128px;
  margin: auto;

  img {
    width: 100%;
  }
`;

const Container = styled.div`
  margin-top: 124px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Sora";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    color: #050300;
    max-width: 921px;
    margin: 32px auto;
    @media screen and (max-width: 650px) {
      font-size: 24px;
      line-height: 36px;
    }
  }
  .header-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn {
    display: flex;
    gap: 24px;
    @media screen and (max-width: 650px) {
      flex-direction: column;
      margin-bottom: 64px;
      gap: 8px;
    }
  }
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
`;
