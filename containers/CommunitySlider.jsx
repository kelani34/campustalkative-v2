import styled from "styled-components";
import slides from "@/constants/slides";
import Button from "@/shared/Button";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Link from "next/link";
import Image from "next/image";

const CommunitySlider = () => {
  const sliders = [
    { img: slides.slide2 },
    { img: slides.slide3 },
    { img: slides.slide4 },
    { img: slides.slide5 },
    { img: slides.slide6 },
    { img: slides.slide7 },
    { img: slides.slide8 },
    { img: slides.slide9 },
  ];
  return (
    <Section data-aos="fade-up" data-aos-duration="2000">
      <Slider autoplay={5} infinite={true}>
        {sliders.map((slide, index) => (
          <div key={index}>
            <Image
              src={slide.img}
              alt={`Community slide ${index + 2}`}
              width="auto"
              height={600}
            />
          </div>
        ))}
      </Slider>
      <div className="btn">
        <Link href="/community">
          <Button text="Be a part of this community" />
        </Link>
      </div>
    </Section>
  );
};

export default CommunitySlider;

const Section = styled.section`
  max-width: 900px;
  margin: 89px auto;
  display: flex;
  flex-direction: column;
  .btn {
    display: flex;
    justify-content: center;
    margin-top: 90px;
  }
  .slider {
    height: 600px;
  }
  @media screen and (max-width: 768px) {
    .slider {
      height: 600px;
    }
  }
  @media screen and (max-width: 480px) {
    .slider {
      height: 300px;
    }
  }
`;
