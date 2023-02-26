import { motion } from "framer-motion";
import styled from "styled-components";

const Community = () => {
  return (
    <Section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Container>
        <Content>
          <h2>
            We care about our community and bring the best resources and
            opportunity to meet and network
          </h2>
          <p>
            At CampusTalkative, we understand the importance of building and
            maintaining a strong community. That's why we are dedicated to
            providing the best resources and opportunities for our members to
            connect, network, and grow together. Whether it's through events,
            online resources, or other initiatives, we are committed to
            fostering a vibrant and supportive community for all.
          </p>
        </Content>
      </Container>
    </Section>
  );
};

export default Community;

const Section = styled(motion.section)`
  max-width: 1128px;
  margin: auto;
`;
const Container = styled.div`
  max-width: 788px;
  margin: 80px auto;
  @media screen and (max-width: 650px) {
    margin: 45px auto;
  }
`;

const Content = styled.div`
  margin: 20px;
  h2 {
    font-family: "Sora";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 140%;
    color: #050300;
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
    line-height: 160%;
    color: #3f392c;
    @media screen and (max-width: 650px) {
      margin-top: 16px;
      font-size: 14px;
      line-height: 22px;
    }
  }
`;
