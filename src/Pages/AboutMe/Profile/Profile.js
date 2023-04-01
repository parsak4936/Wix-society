import React from 'react'
import Profileimage from "../../../Assets/Profile/Parsa.png";
 import './Profile.css'
export default function Profile() {
  return (
    <div>
        
        <section className="aboutme-container-section1">
        <div className="profile-container">
          
          <img src={Profileimage} alt="Profile" className="profile-pic" />
          <div className="profile-info">
            <h2>Parsa Kazemi</h2>
            <p>
              DOB: 1999/06/12 <br />
              POB: Ghazvin,Iran <br />
              Email: Wixloop.contact@gmail.com <br />
              Phone: +98 992 023 2392 <br />
              Gender: Male
              <br />
              Religious: Islam
            </p>
          </div>
        </div>
 
      </section>

    </div>
  )
}
