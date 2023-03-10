import React from "react";
import styled from "styled-components";

const DiscoverMore = () => {
  return (
    <Section data-aos="fade-up" data-aos-duration="2000">
      <div className="container">
        <h2>Want to learn more </h2>
      </div>
    </Section>
  );
};

export default DiscoverMore;

const Section = styled.section`
  .container {
    h2 {
      font-family: "Sora";
      font-style: normal;
      font-weight: 800;
      font-size: 134px;
      line-height: 140%;
      -webkit-text-stroke: 1px black;
      -webkit-text-fill-color: white;
    }
  }
`;
