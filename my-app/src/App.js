import React, {Component} from 'react';
import './App.css';
import Copenhagen from './pictures/Copenhagen.jpg';
import Hello from './pictures/Hello.gif';
import SkillAdvanced from './pictures/SkillAdvanced.PNG';
import SkillModerate from './pictures/SkillModerate.PNG';
import SkillVeryAdvanced from './pictures/SkillVeryAdvanced.PNG';
import SkillAverage from './pictures/SkillAverage.PNG';
import LanguageSymbol from './pictures/LanguageSymbol.PNG';
import SkillMastery from './pictures/SkillMastery.PNG';
import SkillIntermediate from './pictures/SkillIntermediate.PNG';
import SkillLevel from './components/SkillLevel';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";



function App() {
  return (
    <div>
    <img className="hello" src={Hello} alt='Hello' />
    <h1 className="name">I am Zara!</h1>
    <div>
        <img className="image" src={Copenhagen} alt='Copenhagen' />
        </div>

        <section id="aboutMe">
        <div>
            <h1 className=" shortAboutMe">A student, nature-enthusiast, painter and a life-long lover of exciting journeys and adventures! </h1>
            <h2 className=" shortAboutMe"> Making the decision to change my path and begin studying programming has been a great journey for me to embark on. 
            I am continuously learning and growing and I really hope that my knowledge and skills would allow me to make the world a better place! </h2>
            <img src="https://video-public.canva.com/VAEJygkAa0g/v/3b7d5005c7.gif" 
        className="bookAnimation-size"></img>
        </div>
        
        <div>
            <div className="col bar-height bg-warning"></div>
            <div className="col bar d-none d-md-block"></div>
        </div>

    </section>

   
    <div>
    <h1 className="mySkills">My Skills</h1> 
     <img src="https://media-public.canva.com/MADoheTQTsg/1/screen.svg" className="puzzle"></img>         
    </div>

    <section id="skills" className="d-flex flex-column justify-content-center mx-auto">
  
    
    
    <div className="d-flex flex-column px-3 skill"> 
      <SkillLevel className="skillLevel mb-2 d-flex flex-column px-3 skill" skillPercentage="70" skillText="C#"></SkillLevel>
      </div>

    <div className="d-flex flex-column px-3 skill"> 
      <SkillLevel className="skillLevel mb-2 d-flex flex-column px-3 skill " skillPercentage="75" skillText="HTML/CSS"></SkillLevel>
      </div>

    <div className="d-flex flex-column px-3 skill"> 
      <SkillLevel className="skillLevel mb-2 d-flex flex-column px-3 skill" skillPercentage="50" skillText="JavaScript"></SkillLevel>
      </div>

    <div className="d-flex flex-column px-3 skill"> 
      <SkillLevel className="skillLevel mb-2 d-flex flex-column px-3 skill" skillPercentage="70" skillText="MVC/API"></SkillLevel>
      </div>

    <div className="d-flex flex-column px-3 skill"> 
      <SkillLevel className="skillLevel mb-2 d-flex flex-column px-3 skill" skillPercentage="80" skillText="SQL"></SkillLevel>
      </div>
      
    <div className="d-flex flex-column px-3 skill"> 
      <SkillLevel className="skillLevel mb-2 d-flex flex-column px-3 skill" skillPercentage="90" skillText="Scrum"></SkillLevel>
      </div>


      

    {/* <div className="d-flex flex-column">
    <div className="d-flex flex-column px-3 skill">C#</div>
     <img className="skillLevel mb-2" src={SkillAdvanced} alt='SkillAdvanced' />
    </div>

    <div className="d-flex flex-column">
    <div className="d-flex flex-column px-3 skill">HTML/CSS</div>
     <img className="skillLevel mb-2" src={SkillVeryAdvanced} alt='SkillAdvanced' />
    </div>

    <div className="d-flex flex-column">
    <div className="d-flex flex-column px-3 skill">JavaScript/React</div>
     <img className="skillLevel mb-2" src={SkillModerate} alt='SkillAdvanced' />
    </div> 
    
    <div className="d-flex flex-column">
    <div className="d-flex flex-column px-3 skill"> MVC/Web API</div>
     <img className="skillLevel mb-2" src={SkillAdvanced} alt='SkillAdvanced' />
    </div> 
    
    <div className="d-flex flex-column">
    <div className="d-flex flex-column px-3 skill">SQL</div>
     <img className="skillLevel mb-2" src={SkillVeryAdvanced} alt='SkillAdvanced' />
    </div>

    <div className="d-flex flex-column">
    <div className="d-flex flex-column px-3 skill">Scrum</div>
     <img className="skillLevel mb-2" src={SkillVeryAdvanced} alt='SkillAdvanced' />
    </div> */}
    
    </section>

        <div>
            <div className="col bar-height bg-warning"></div>
            <div className="col bar d-none d-md-block"></div>
        </div>

    <section id="education" className="d-flex flex-column justify-content-center mx-auto">

    <div>
    <h1 className=" shortAboutMe  mt-2">Education</h1>
    <img  src="https://media-public.canva.com/gwac8/MADQD-gwac8/2/s.svg"  className="academicCap mt-2"></img>        
    </div>

    <div className="d-flex flex-column">
    <div className="d-flex flex-column px-3 skill">BA Arabic studies</div>
      <img src="https://media-public.canva.com/VMEGg/MAEFh4VMEGg/1/s.svg" className="degreeSymbol mx-auto"></img> 
    </div>

    <div className="d-flex flex-column">
    <div className="d-flex flex-column px-3 skill">MA International Relations</div>
      <img src="https://media-public.canva.com/MADpjk0Vloo/1/screen.svg" className="degreeSymbol mx-auto"></img> 
    </div>

    <div className="d-flex flex-column">
    <div className="d-flex flex-column px-3 skill">MA Middle Eastern Studies</div>
      <img src="https://media-public.canva.com/9neeA/MAEFrj9neeA/1/s.svg" className="degreeSymbol mx-auto"></img> 
    </div>

    <div className="d-flex flex-column">
    <div className="d-flex flex-column px-3 skill">Systems development</div>
      <img src="https://media-public.canva.com/17BTA/MAC2wu17BTA/2/s.svg" className="degreeSymbol mx-auto"></img> 
    </div>

    <div className="d-flex flex-column">
    <div className="d-flex flex-column px-3 skill">.Net Web-development</div>
      <img src="https://media-public.canva.com/MADrPJixUcs/1/screen.svg" className="degreeSymbol mx-auto"></img> 
    </div>
  
    </section>

       <div>
            <div className="col bar-height bg-warning"></div>
            <div className="col bar d-none d-md-block"></div>
        </div>

    <section id="languages" className="d-flex flex-column justify-content-center mx-auto">
    <div>
    <h1 className=" shortAboutMe mt-2">Languages</h1>
    <img className="languageSymbol mb-2" src={LanguageSymbol} alt='LanguageSymbol' />
    </div>

    <div className="d-flex flex-column ">
    <div className="d-flex flex-column px-3 skill">English
      </div>
      <img className="skillLevel mb-2" src={SkillMastery} alt='SkillMastery' />
    </div>

    <div className="d-flex flex-column ">
    <div className="d-flex flex-column px-3 skill">Armenian
      </div>
      <img className="skillLevel mb-2" src={SkillMastery} alt='SkillMastery' />
    </div>

    <div className="d-flex flex-column ">
    <div className="d-flex flex-column px-3 skill">Russian
      </div>
      <img className="skillLevel mb-2" src={SkillMastery} alt='SkillMastery' />
    </div>

    <div className="d-flex flex-column ">
    <div className="d-flex flex-column px-3 skill">Swedish
      </div>
      <img className="skillLevel mb-2" src={SkillVeryAdvanced} alt='SkillMastery' />
    </div>

    <div className="d-flex flex-column ">
    <div className="d-flex flex-column px-3 skill">Arabic
      </div>
      <img className="skillLevel mb-2" src={SkillAverage} alt='SkillMastery' />
    </div>

    <div className="d-flex flex-column ">
    <div className="d-flex flex-column px-3 skill">Hebrew
      </div>
      <img className="skillLevel mb-2" src={SkillIntermediate} alt='SkillMastery' />
    </div>
    </section>

       <div>
            <div className="col bar-height bg-warning"></div>
            <div className="col bar d-none d-md-block"></div>
        </div>

    <section id="contactForm">
    <div>
    <h1 className=" shortAboutMe  mt-2">Contact me</h1>
    <img src="https://media-public.canva.com/MADpjiV7Gpc/1/screen.svg" className="contact"></img> 
    <div className="display-6">
            <h1 className="contactForm mt-2"> Contact me on LinkedIn or send an email to zara.baghdasaryan@yahoo.com! </h1>
        </div> 
        <img src="https://media-public.canva.com/up1_Y/MABojNup1_Y/2/s.svg" className="contact"></img> 
       </div>
       <div className="social-container shortAboutMe">
            <a href="https://github.com/ZaraBaghdasaryan"
            className="gitHub social"
            >
              <FontAwesomeIcon icon={faGithub} size="2x"/>  
            </a>
            <a href="https://www.linkedin.com/in/zara-baghdasaryan-269062b3/"
            className="linkedIn social"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x"/>  
            </a>

        </div>
    </section>

    


</div>

  );
}

export default App;


