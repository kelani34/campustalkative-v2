import styled from "styled-components";
import slide2 from "../../../assets/slide2.jpg";
import slide3 from "../../../assets/slide3.jpg";
import slide4 from "../../../assets/slide4.jpg";
import slide5 from "../../../assets/slide5.jpg";
import slide6 from "../../../assets/slide6.jpg";
import slide7 from "../../../assets/slide7.jpg";
import slide8 from "../../../assets/slide8.jpg";
import slide9 from "../../../assets/slide9.jpg";
import Button from "../../../shared/Button";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import Image from "next/image";

const CommunitySlider = () => {
  const slides = [
    { img: slide2 },
    { img: slide3 },
    { img: slide4 },
    { img: slide5 },
    { img: slide6 },
    { img: slide7 },
    { img: slide8 },
    { img: slide9 },
  ];
  return (
    <Main>
      <Section>
        <Slider autoplay={5} infinite={true}>
          {slides.map((slide, index) => (
            <div key={index}>
              <Image src={slide.img} alt={`Community slide ${index + 2}`} />
            </div>
          ))}
        </Slider>
        <div className="btn">
          <Link href="/community">
            <Button text="Be a part of this community" />
          </Link>
        </div>
      </Section>
    </Main>
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
  img {
    height: 100%;
    width: 100%;
  }
`;
