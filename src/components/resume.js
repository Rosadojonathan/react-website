import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Education from './education';
import Experience from "./experience";
import Skills from './skills';

import adwordsLogo from '../img/adwords-logo-website.png';
import googleAnalyticsLogo from '../img/google-analytics.png';
import datacampLogo from '../img/datacamp.png';
import hubspotLogo from '../img/hubspot-logo.jpg';
import freecodecampLogo from '../img/freecodecamp.jpeg';

class Resume extends Component {

  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>

            <div style={{textAlign:'center'}}>
              <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" alt="avatar" style={{height:'200px'}}/>
            </div>
            <h2 style={{paddingTop:'2em'}}>Jonathan Rosado</h2>
            <h4 style={{color:'grey'}}>Tech-Marketer</h4>
            <hr style={{borderTop:'3px solid #3E2723',width:'50%'}}/>
            <p>Autodidacte e</p>
            <hr style={{borderTop:'3px solid #3E2723',width:'50%'}}/>
            <h5>Addresse</h5>
            <p>Toulouse, Occitanie</p>
            <h5>Téléphone</h5>
            <p>123-456-768</p>
            <h5>Email</h5>
            <p>jonathan@jonathanrosado.fr</p>
            <h5>LinkedIn</h5>
            <a style={{textDecoration:'none',color:'blue'}} href="https://www.linkedin.com/in/jonathan-rosado-967067130/">https://www.linkedin.com/jonathanrosado/</a>
            <hr style={{borderTop:'3px solid #3E2723',width:'50%'}}/>
            <h5>Certifications</h5>
            <img src={adwordsLogo} style={{height:'100px',width:'100px'}}alt="adwords logo"/>
            <img src={googleAnalyticsLogo} style={{height:'100px',width:'100px'}}alt="google analytics logo"/>
            <img src={datacampLogo} style={{height:'100px',width:'100px'}}alt="datacamp logo"/>
            <br/>
            <img src={hubspotLogo} style={{height:'100px',width:'200px'}}alt="hubspot logo"/>
            <img src={freecodecampLogo} style={{height:'100px',width:'100px'}}alt="free code camp logo"/>








          </Cell>
          <Cell className="resume-right-col" col={8}>

            <h3>Experience</h3>

            <Experience
              startYear="Février 2017"
              endYear="Maintenant"
              jobName="SEA Manager & Market-Tech"
              jobDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dolor dignissimos omnis maxime culpa quod nulla quasi fugit aliquid? Architecto molestiae dolorum magni culpa! Aperiam obcaecati vel hic porro adipisci."
            />



            <hr style={{borderTop:"3px solid white"}}/>
            <h3>Formation</h3>
            <Education
            startYear={2017}
            endYear={2018}
            schoolName="Université Capitole - IAE Toulouse"
            schoolDescription="Cette formation m'a permit de consolider mes connaissances en Marketing Digital acquises lors de mon expérience professionnelle en alternance, notamment en SEO et en stratégie Marketing. Mon mémoire traite de l'automatisation du SEA et Social Media Advertising: quelle réalisation, enjeux et bénéfices pour le Marketeur."
            schoolDegree="Master 2 - Marketing Digital"
            />

            <Education
            startYear={2016}
            endYear={2017}
            schoolName="Université Toulouse - Jean Jaurès "
            schoolDescription=""
            schoolDegree="Master 1 - Commerce International"
            />
            <Education
            startYear={2013}
            endYear={2016}
            schoolName="Université Perpignan Via Domitia"
            schoolDescription=""
            schoolDegree="Licence Langues Etrangères Appliquées"
            />

            <hr style={{borderTop:"3px solid white"}}/>

            <h3>Compétences</h3>
              <Skills
              skill="SEA"
              progress={85}
              />
              <Skills
              skill="Data Analysis"
              progress={85}
              />
              <Skills
              skill="SEO"
              progress={70}
              />
              <Skills
              skill="Python"
              progress={65}
              />
              <Skills
              skill="JavaScript"
              progress={60}
              />
              <Skills
              skill="Machine Learning"
              progress={60}
              />
              <hr style={{borderTop:"3px solid white"}}/>
              <h3>Langues</h3>

          </Cell>
        </Grid>
      </div>
    );
  }

}

export default Resume;
