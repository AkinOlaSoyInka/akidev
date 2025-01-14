import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Toolbar from '../component/toolbar';
import Skills from './skills';
import ContactForm from './contact';
import Experience from './experience';
import '../App.css';




export default function Start() {
      const [elementIndex, setElementIndex] = useState(0);
      const ref = useRef(null);
      useEffect(() => {
        if (ref?.current) {
           ref.current.focus();
        }
      }, [ref]);
      const infoArray = [
        'Experienced and versatile Software Engineer with 5+ years of experience in web development and cloud solutions,using a variety of technical skills and adept presenting skills to implement and demonstrate solutions to many clients in a variety of sectors. Acquired experience in various industries (Broadcasting, Government, Health and Public Services and Postal). Specialised mostly in web development, but also had roles in automated and manual testing as well as solutions architecture',
        'Most comfortable with React, Vue and Angular. Also experienced with Typescript, Java, Node and SQL. Well acquianted with GCP tools such as Cloud Run, Cloud Functions and DocumentAI. Very comfortable working in an Agile working environment, with years of experience as a member of various scrum teams',
        'My other passions involve playing football, learning languages, listening to music (mostly Afrobeats, Rap and Salsa), reading and playing chess'
      ];
    /*function changeIndex(f: any) {
        infoElementIndex+= f;
        console.log('New Index',infoElementIndex);
        
      }*/
      function increaseIndex(){
        if (elementIndex+1 == infoArray.length) {
          setElementIndex(0)
        } else {
          setElementIndex(elementIndex+1)
        }
        
      }

      function decreaseIndex(){
        if (elementIndex-1 == -1) {
          setElementIndex(infoArray.length-1)
        } else {
          setElementIndex(elementIndex-1)
        }
      }

      function switchFocus(){
        
      }

    function downloadCV (){
      document.getElementById('cvDownload').click();
    }
    function focusContact(){
      document.getElementById("form_name").focus();
  }


     return (
        <div className="App">
          <Toolbar/>
          <h1>Akinola Soyinka</h1>
          <p>A passionate developer with half a decade of experience in web dev. 
            From making Javascript RPG adventures as a teenager to working for some of the most important companies in the UK, 
            being a programmer has taken me on a long journey...
          </p>
          <br/>
          <button className='button-18' onClick={() =>downloadCV()}> See My CV<a id='cvDownload' href='https://docs.google.com/document/d/1RXp4XvjXQM1w3lA1eIpwSygslRIWaR2u/view' target='_blank' hidden></a></button>
          <button className='button-18' onClick={()=> focusContact()}>Contact Me</button>
          <br/>
          <div className='infoContainer'>
            <h3 ref={ref}>About Me</h3>
            {infoArray.map((item,index) => {
              return <div key={index} className={ elementIndex === index ? "infoElementActive" : "infoElementInactive"}>{item}</div>
            })}
            <a className="prev" onClick={() => decreaseIndex()}>&#10094;</a>
            <a className="next" onClick={() => increaseIndex()}>&#10095;</a>
          </div>
          <Skills/>
          <Experience/>
          <ContactForm/>
        </div>
      );
}