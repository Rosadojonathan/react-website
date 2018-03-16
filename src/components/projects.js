import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Tabs, Tab,Grid,Cell,Card,CardTitle,Button,CardMenu,IconButton, CardText, CardActions} from 'react-mdl';

import machineLearningIcon from '../img/machinelearningicon.svg';
import facebookIcon from '../img/facebookicon.svg';
import slackIcon from '../img/slackicon.png';
import reactIcon from '../img/reacticon.png'

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab:0};
  }


  toggleCategories(){
    if (this.state.activeTab === 0){
      return (
      <div className="projects-grid">

        <Helmet>
          <meta charSet="utf-8" />
          <title>Projets Tech-Market - Tech-Marketer</title>
        </Helmet>

        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color:'#fff',height:'176px',background:`url(${reactIcon}) center / cover`}}></CardTitle>
          <CardTitle style={{color:'black', fontWeight:'bold'}}>Création d'un site internet sous React</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nostrum id quasi et, provident veniam porro consectetur molestias atque voluptatibus ipsa dolorum, asperiores quibusdam quidem nesciunt mollitia numquam ipsam. Quidem.</CardText>
           <CardActions border>
             <Button colored style={{textAlign:'center'}}>GitHub</Button>

           </CardActions>
           <CardMenu style={{color:'#fff'}}>
             <IconButton name="share"/>
           </CardMenu>
        </Card>
      </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:`url(${machineLearningIcon}) center / cover`}}></CardTitle>
            <CardTitle style={{color:'black', fontWeight:'bold'}}>Projet Machine Learning: Prédiction de pertinence d'un produit sur les canaux publicitaires</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nostrum id quasi et, provident veniam porro consectetur molestias atque voluptatibus ipsa dolorum, asperiores quibusdam quidem nesciunt mollitia numquam ipsam. Quidem.</CardText>
             <CardActions border>
               <Button colored style={{textAlign:'center'}}>GitHub</Button>

             </CardActions>
             <CardMenu style={{color:'#fff'}}>
               <IconButton name="share"/>
             </CardMenu>
          </Card>
        </div>

      )
    }
    else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth:'450',margin:'auto',marginBottom:'25px'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:`url(${facebookIcon}) center / cover`}}></CardTitle>
            <CardTitle style={{color:'black', fontWeight:'bold'}}>Automatisation de la création de Facebook Ads</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nostrum id quasi et, provident veniam porro consectetur molestias atque voluptatibus ipsa dolorum, asperiores quibusdam quidem nesciunt mollitia numquam ipsam. Quidem.</CardText>
             <CardActions border>
               <Button colored style={{textAlign:'center'}}>GitHub</Button>
             </CardActions>
             <CardMenu style={{color:'#fff'}}>
               <IconButton name="share"/>
             </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth:'450',margin:'auto',marginBottom:'25px'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:`url(${facebookIcon}) center / cover`}}></CardTitle>
            <CardTitle style={{color:'black', fontWeight:'bold'}}>Automatisation de la sponsorisation de posts Facebook</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nostrum id quasi et, provident veniam porro consectetur molestias atque voluptatibus ipsa dolorum, asperiores quibusdam quidem nesciunt mollitia numquam ipsam. Quidem.</CardText>
             <CardActions border>
               <Button colored style={{textAlign:'center'}}>GitHub</Button>
             </CardActions>
             <CardMenu style={{color:'#fff'}}>
               <IconButton name="share"/>
             </CardMenu>
          </Card>
        </div>
      )
    }
    else if (this.state.activeTab === 3){
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth:'450',margin:'auto',marginBottom:'25px'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:`url(${slackIcon}) center / cover`}}></CardTitle>
            <CardTitle style={{color:'black', fontWeight:'bold'}}>Slackbot d'alerte CPA Facebook Ads</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nostrum id quasi et, provident veniam porro consectetur molestias atque voluptatibus ipsa dolorum, asperiores quibusdam quidem nesciunt mollitia numquam ipsam. Quidem.</CardText>
             <CardActions border>
               <Button colored style={{textAlign:'center'}}>GitHub</Button>
             </CardActions>
             <CardMenu style={{color:'#fff'}}>
               <IconButton name="share"/>
             </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth:'450',margin:'auto',marginBottom:'25px'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:`url(${slackIcon}) center / cover`}}></CardTitle>
            <CardTitle style={{color:'black', fontWeight:'bold', fontWeight:'bold'}}>Slackbot d'alerte CPA Adwords</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nostrum id quasi et, provident veniam porro consectetur molestias atque voluptatibus ipsa dolorum, asperiores quibusdam quidem nesciunt mollitia numquam ipsam. Quidem.</CardText>
             <CardActions border>
               <Button colored style={{textAlign:'center'}}>GitHub</Button>
             </CardActions>
             <CardMenu style={{color:'#fff'}}>
               <IconButton name="share"/>
             </CardMenu>
          </Card>

            <Card shadow={5} style={{minWidth:'450',margin:'auto',marginBottom:'25px'}}>
              <CardTitle style={{color:'#fff',height:'176px',background:`url(${slackIcon}) center / cover`}}></CardTitle>
              <CardTitle style={{color:'black', fontWeight:'bold'}}>Slackbot d'alerte absence de stocks sur fiche produit</CardTitle>
              <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nostrum id quasi et, provident veniam porro consectetur molestias atque voluptatibus ipsa dolorum, asperiores quibusdam quidem nesciunt mollitia numquam ipsam. Quidem.</CardText>
               <CardActions border>
                 <Button colored style={{textAlign:'center'}}>GitHub</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
                 <IconButton name="share"/>
               </CardMenu>
            </Card>

          </div>

      )
    }
  }


  render() {
    return (
      <div className="category-tabs">
        <Tabs style={{padding:'0px 10px',width:"100%"}}activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab style={{width:'25%'}}><p>React</p></Tab>
          <Tab style={{width:'25%'}}> <p>Machine Learning</p></Tab>
          <Tab style={{width:'25%'}}><p>Ads Automation</p></Tab>
          <Tab style={{width:'25%'}}><p>Slackbots</p></Tab>

        </Tabs>


          <Grid col={12}>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    );
  }

}

export default Projects;
