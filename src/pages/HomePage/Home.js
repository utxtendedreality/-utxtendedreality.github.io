import React, { useEffect, useRef } from "react";
import "./HomePage.css"
import { Application, GameHandle } from '@icon-park/react';
import {useNavigate, useLocation} from 'react-router-dom';


export default function Home() {
 
  const workshopIntro = "Learn about XR technologies and techniques such as AR/VR development, 3D modeling, Unity, and Oculus from fellow XR Club members."
  const gameNightIntro = "Gain hands-on experience with XR equipment and challenge each other in immersive games. Also provide board games and other seasonal activities."
  const projectsIntro = "Collaborate with peers to develop personal projects, build immersive installations, and compete in external XR challenges."
  const joinUsIntro = "You are more than welcomed if you decide to become of a core member of UTXR! You may do so by filling out the form, and talk to the club leaders directly."

  const navigate = useNavigate();
  const location = useLocation();
  const goTo = (path) => () => {
    navigate(path);
  }

  useEffect(() => {
    document.body.style.backgroundColor = "white";

    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);


    return (
      <div>
        <section className='homepage-banner'>
          <div className='homepage-title'>Cover Go Here</div>
        </section>

        <section className='event-section'>
            <p className="section-title">01 - XR Club Events </p>
            <p className="introduction">For Future XR Builders. Drop in and Have Fun! </p>
        </section> 
  
        <div className="container">
          <div className="event-container">
            <div className="event-box">
              <Application theme="two-tone" size="52" fill={['#000000' ,'#ffffff']}/>        
              <p className="event-title">WORKSHOPS</p>
              <p className="event-intro">{workshopIntro}</p>
              <a className="workshops-button" onClick={goTo("/event")}>EXPLORE</a>
            </div>
  
            <div className="event-box workshops-box">
              <GameHandle theme="two-tone" size="52" fill={['#000000' ,'#ffffff']}/>        
              <p className="event-title">GAME-NIGHT</p>
              <p className="event-intro">{gameNightIntro}</p>
              <a className="workshops-button" onClick={goTo("/event")}>PLAY</a>
            </div>
  
            <p className="event-description">*Everyone is welcomed for Workshops and Game-Nights! Drop in and say Hi at any time!</p>
          </div>
        </div>

        
        <section className='event-section'>
            <p className="section-title">02 - XR Club Projects </p>
            <p className="introduction">IMAGINE. DESIGN. EXPERIENCE. </p>
        </section> 
        <div className="container">
          <div className="event-container">
            <div className="event-box workshops-box">
              <Application theme="two-tone" size="52" fill={['#000000' ,'#ffffff']}/>        
              <p className="event-title">PROJECTS</p>
              <span className="core-member">(*Available to core members only)</span>
              <p className="event-intro">{projectsIntro}</p>
              <a className="workshops-button" onClick={goTo("/project")}>BUILD</a>
            </div>
  
            <div className="event-box join-us-box">
              <GameHandle theme="two-tone" size="52" fill={['#000000' ,'#ffffff']}/>        
              <p className="event-title">JOIN US</p>
              <p className="event-intro">{joinUsIntro}</p>
              <a className="workshops-button" onClick={goTo("/form")}>FORM</a>
            </div>
            </div>
        </div>
      </div> 
    );
    }