import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { Slide } from "react-awesome-reveal";
import Najafi from "../../Assets/refrences Image/Najafi.jpg";
import Hadiseh from "../../Assets/refrences Image/Hadis.jpg";
import Amiri from "../../Assets/refrences Image/AliAmiri.jpg";

let clients = [
  {
    name: "Amir Hossein Najafi",
    position: " CEO of Faviran company",
    img_url: Najafi,
    stars: 5,
    disc: `"I had the pleasure of working with 
    Parsa for three years, and during that time,
    I was consistently impressed by their dedication 
    and work ethic. They tackled every challenge with 
    enthusiasm and a can-do attitude, and I would highly 
    recommend them to any future employer."`,
  },
  {
    name: "Hadiseh Pouesheikh",
    position: "Literary creation expert at KPF ",
    img_url: Hadiseh,
    stars: 5,
    disc: ` "As Parsa's teacher for nearly a decade,
     I can say without reservation that they are one 
     of the most creative, hard-working, and disciplined
     individuals I've had the pleasure of instructing.
     I'm confident that they will be an asset to any team lucky enough to have
     them."`,
  },
  {
    name: "Ali Amiri",
    position: "Associate professor at ZNU ",
    img_url: Amiri,
    stars: 4,
    disc: `"I had the privilege of supervising Parsa 
    during their bachelor's degree, and I was consistently
    impressed by their eagerness to take on new challenges
    and their enthusiasm for learning. They were always
    willing to go above and beyond what was expected of them,
    and their dedication to their work was truly inspiring.
        "`,
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

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="client">
      {/* <Slide direction="left"> */}
        <span className="green">Recommendations</span>
        <h1>what Do my supervisors say</h1>
      {/* </Slide> */}
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>  
          {clientDisc}
         </Slider>  
        {/* <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons> */}
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
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
      rgb(45, 45, 58) 0%,
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

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
// const Buttons = styled.div`
//   position: absolute;
//   right: 0.7rem;
//   bottom: -2rem;

//   button {
//     background-color: transparent;
//     margin-left: 0.5rem;
//     border: none;
//     color: #01be96;
//     cursor: pointer;
//     font-size: 1.1rem;
//   }

//   @media (max-width: 530px) {
//     display: none;
//   }
// `;
