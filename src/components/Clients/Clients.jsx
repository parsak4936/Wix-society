import React, { useRef } from "react";
import Slider from "react-slick";
import ClientSlider from "./ClientSlider";
import Najafi from "../../Assets/refrences Image/Najafi.webp";
import Hadiseh from "../../Assets/refrences Image/Hadis.webp";
import Amiri from "../../Assets/refrences Image/AliAmiri.webp";
import LaRosa from "../../Assets/refrences Image/LaRosa.webp";
import DellAcqua from "../../Assets/refrences Image/DellAcqua.webp";
import Grasso from "../../Assets/refrences Image/Grasso.webp";
import Villari from "../../Assets/refrences Image/Villari.webp";
import Carnevale from "../../Assets/refrences Image/Carnevale.webp";
import Laudani from "../../Assets/refrences Image/Laudani.webp";
import Cinici from "../../Assets/refrences Image/Cinici.webp";
import Buongiorno from "../../Assets/refrences Image/Buongiorno.webp";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation();
  const arrowRef = useRef(null);
  
  let clients = [
    {
      name: t("Francesco La Rosa"),
      position: t("Thesis & Internship Supervisor,FCRLab, University of Messina"),
      email: "francesco.larosa@unime.it",
      img_url: LaRosa,
      stars: 5,
      disc: t(`"Parsa completed both his internship and his Master's thesis under my supervision at FCRLab. His discipline stood out at once,arriving early, staying late, and reporting progress so regularly that the work never lost momentum. His workflow was fast and well-structured and his presentations consistently clear. He has a rare ability to turn ideas into working systems."`),
    },
    {
      name: t("Pierluigi Dell'Acqua"),
      position: t("Thesis Co-Supervisor,FCRLab, University of Messina"),
      email: "pierluigi.dellacqua@unime.it",
      img_url: DellAcqua,
      stars: 5,
      disc: t(`"As co-supervisor of Parsa's thesis at FCRLab, I found him focused, dependable, and well-organized. Even in our more limited exchanges he stood out for the clarity of his presentations and the steady, well-documented progress of his research."`),
    },
    {
      name: t("Giorgio Mario Grasso"),
      position: t("Professor of AI & Director, NISC Lab,University of Messina"),
      email: "giorgio.grasso@unime.it",
      img_url: Grasso,
      stars: 5,
      disc: t(`"Parsa joined the NISC Lab and, within three weeks, finished a project that had been stalled for nearly nine months. His modular approach to configuration and architecture impressed the whole team,the way he built the biofeedback system effectively unblocked three projects at once. He is a real asset to the lab."`),
    },
    {
      name: t("Massimo Villari"),
      position: t("Professor of Data Security, Blockchain and Privacy, University of Messina"),
      email: "massimo.villari@unime.it",
      img_url: Villari,
      stars: 5,
      disc: t(`"Parsa was a student in my Data Security, Blockchain and Privacy course, and his oral exam was one of the most engaging I sat that year. He thinks deeply and explains his reasoning with real clarity. I was the first to encourage him toward a PhD, and I still believe he has exactly the curiosity and rigour that research rewards."`),
    },
    {
      name: t("Lorenzo Carnevale"),
      position: t("Professor of Bio-Inspired Algorithms, University of Messina"),
      email: "lorenzo.carnevale@unime.it",
      img_url: Carnevale,
      stars: 5,
      disc: t(`"I pointed Parsa to a well-known Python book and, honestly, did not expect much so soon. By the next exam session he came back with a complete Bat-algorithm optimisation project and earned a 30 cum laude. Knowing he had started with almost no Python and little formal maths, the result genuinely impressed me. He learns quickly and takes his work seriously."`),
    },
    {
      name: t("Rossella Laudani"),
      position: t("Researcher (PostDoc),University of Messina"),
      email: "rlaudani@unime.it",
      img_url: Laudani,
      stars: 5,
      disc: t(`"Parsa sat the very first oral exam of his Master's with me, and his curiosity was clear from the start,he attended every one of my classes. His statistical analysis predicting World of Warcraft PvP match outcomes was a creative, rigorous piece of work that showed how naturally he connects data to real questions."`),
    },
    {
      name: t("Maria Cristina Cinici"),
      position: t("Professor of Management,University of Messina"),
      email: "mariacristina.cinici@unime.it",
      img_url: Cinici,
      stars: 5,
      disc: t(`"In my Digital Management course, Parsa delivered an ambitious project analysing the annual reports of three companies within one integrated system,well beyond the brief. He later helped, as a favour, on the SIMA research-data project under real deadline pressure, and his commitment and quality were exactly what we needed."`),
    },
    {
      name: t("Alberto Buongiorno"),
      position: t("SIMA Project Collaborator,University of Messina"),
      img_url: Buongiorno,
      stars: 5,
      disc: t(`"I worked side by side with Parsa on the SIMA project, mining and structuring research data from multiple APIs into clean taxonomies. Under a tight deadline he stayed calm and organised and was a genuinely reliable teammate,all the more impressive given the work was a favour rather than a paid job."`),
    },
    {
      name: t("Amir Hossein Najafi"),
      position: t("CEO of EpIran company"),
      img_url: Najafi,
      stars: 5,
      disc: t(`"I had the pleasure of working with Parsa for three years, and during that time, I was consistently impressed by their dedication and work ethic. They tackled every challenge with enthusiasm and a can-do attitude, and I would highly recommend them to any future employer."`),
    },
    {
      name: t("Ali Amiri"),
      position: t("Associate professor at ZNU"),
      email: "a_amiri@znu.ac.ir",
      img_url: Amiri,
      stars: 4,
      disc: t(`"I had the privilege of supervising Parsa during their bachelor's degree, and I was consistently impressed by their eagerness to take on new challenges and their enthusiasm for learning. They were always willing to go above and beyond what was expected of them, and their dedication to their work was truly inspiring."`),
    },
    {
      name: t("Hadiseh Pouesheikh"),
      position: t("Literary creation expert at KPF"),
      email: "Poursheikhhadiseh@gmail.com",
      img_url: Hadiseh,
      stars: 5,
      disc: t(`"As Parsa's teacher for nearly a decade, I can say without reservation that they are one of the most creative, hard-working, and disciplined individuals I've had the pleasure of instructing. I'm confident that they will be an asset to any team lucky enough to have them."`),
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

  /* equal-height slides so cards line up regardless of text length */
  .slick-track {
    display: flex !important;
  }
  .slick-slide {
    height: inherit !important;
  }
  .slick-slide > div {
    height: 100%;
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
    background: #018367;
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
    color: #018367;
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
