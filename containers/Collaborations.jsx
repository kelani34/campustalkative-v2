import React from "react";
import styled from "styled-components";
import sponsors from "@/assets/company.png";
import Image from "next/image";

const Collaborations = () => {
  return (
    <Section data-aos="fade-up" data-aos-duration="2000">
      <Container>
        <h2>Collaboration and growth</h2>
        <p>
          We believe that a strong community must strive on the backbone of good
          partnership and collaboration. So far we are proud to have the support
          and partnership of these organisations, who share our zeal to continue
          to develop and build the youths of the future
        </p>
        <div className="cta__partnership-containers">
          <div className="max-w-[150px]">
            <Image
              src={sponsors}
              alt="Campustalkative sponsors"
              width={110}
              height={80}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Collaborations;

const Section = styled.section`
  max-width: 1128px;
  margin: auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: "Sora";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 45px;
    text-align: center;
    color: #050300;
    margin-bottom: 16px;
    @media screen and (max-width: 650px) {
      font-size: 20px;
      line-height: 28px;
    }
  }
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #3f392c;
    max-width: 861px;
    @media screen and (max-width: 650px) {
      font-size: 14px;
      line-height: 22px;
    }
  }
  .cta__partnership-containers {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px;
    margin: 38px 0;

    .sm {
      @media screen and (max-width: 650px) {
        display: none;
      }
    }
    img {
      @media screen and (max-width: 650px) {
        width: 48px;
      }
    }
    @media screen and (max-width: 650px) {
      gap: 38px;
    }
  }
`;
