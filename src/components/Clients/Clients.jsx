import React, { useRef } from "react";
import Slider from "react-slick";
import ClientSlider from "./ClientSlider";
import Najafi from "../../Assets/refrences Image/Najafi.jpg";
import Hadiseh from "../../Assets/refrences Image/Hadis.jpg";
import Amiri from "../../Assets/refrences Image/AliAmiri.jpg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation();
  const arrowRef = useRef(null);
  
  let clients = [
    {
      name: t("Amir Hossein Najafi"),
      position: t("CEO of Faviran company"),
      img_url: Najafi,
      stars: 5,
      disc: t(`"I had the pleasure of working with Parsa for three years, and during that time, I was consistently impressed by their dedication and work ethic. They tackled every challenge with enthusiasm and a can-do attitude, and I would highly recommend them to any future employer."`),
    },
    {
      name: t("Hadiseh Pouesheikh"),
      position: t("Literary creation expert at KPF"),
      img_url: Hadiseh,
      stars: 5,
      disc: t(`"As Parsa's teacher for nearly a decade, I can say without reservation that they are one of the most creative, hard-working, and disciplined individuals I've had the pleasure of instructing. I'm confident that they will be an asset to any team lucky enough to have them."`),
    },
    {
      name: t("Ali Amiri"),
      position: t("Associate professor at ZNU"),
      img_url: Amiri,
      stars: 4,
      disc: t(`"I had the privilege of supervising Parsa during their bachelor's degree, and I was consistently impressed by their eagerness to take on new challenges and their enthusiasm for learning. They were always willing to go above and beyond what was expected of them, and their dedication to their work was truly inspiring."`),
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container id="client">
      <TitleContainer>
        <span className="green">{t("Recommendations")}</span>
        <h1>{t("What Do My Supervisors Say")}</h1>
      </TitleContainer>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clients.map((item, i) => (
            <ClientSlider item={item} key={i} />
          ))}
        </Slider>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 0;  /* Increased padding */

  @media (max-width: 840px) {
    width: 95%;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      #6e874b 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #01be96;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  span {
    font-weight: 700;
    text-transform: uppercase;
    color: #01be96;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
    color: #fff;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
