import React from "react";
import Profileimage from "../../../Assets/Profile/Parsa.png";
import "./Profile.css";
export default function Profile() {
  return (
    <div>
      <section className="aboutme-container-section1">
        <div className="profile-container">
          <img src={Profileimage} alt="Profile" className="profile-pic" />
          <div className="profile-info">
            <h1>
              Parsa <span className="green">Kazemi</span>
            </h1>
            <p>
              DOB: 1999/06/12 <br />
              POB: Ghazvin,Iran <br />
              Gender: Male
              <br />
              Phone: +39 351 377 0836 <br />
              Currently in: Messina,Italy <br />
              Email: Wixloop.contact@gmail.com <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
