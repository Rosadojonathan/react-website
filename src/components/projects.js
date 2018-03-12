import React, { Component } from 'react';
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
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color:'#fff',height:'176px',background:`url(${reactIcon}) center / cover`}}></CardTitle>
          <CardTitle style={{color:'black'}}>Création d'un site internet sous React</CardTitle>
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
            <CardTitle style={{color:'black'}}>Projet Machine Learning: Prédiction de pertinence d'un produit sur les canaux publicitaires</CardTitle>
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
          <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:`url(${facebookIcon}) center / cover`}}></CardTitle>
            <CardTitle style={{color:'black'}}>Automatisation de la création de Facebook Ads</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nostrum id quasi et, provident veniam porro consectetur molestias atque voluptatibus ipsa dolorum, asperiores quibusdam quidem nesciunt mollitia numquam ipsam. Quidem.</CardText>
             <CardActions border>
               <Button colored style={{textAlign:'center'}}>GitHub</Button>
             </CardActions>
             <CardMenu style={{color:'#fff'}}>
               <IconButton name="share"/>
             </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:`url(${facebookIcon}) center / cover`}}></CardTitle>
            <CardTitle style={{color:'black'}}>Automatisation de la sponsorisation de posts Facebook</CardTitle>
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
          <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:`url(${slackIcon}) center / cover`}}></CardTitle>
            <CardTitle style={{color:'black'}}>Slackbot d'alerte CPA Facebook Ads</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nostrum id quasi et, provident veniam porro consectetur molestias atque voluptatibus ipsa dolorum, asperiores quibusdam quidem nesciunt mollitia numquam ipsam. Quidem.</CardText>
             <CardActions border>
               <Button colored style={{textAlign:'center'}}>GitHub</Button>
             </CardActions>
             <CardMenu style={{color:'#fff'}}>
               <IconButton name="share"/>
             </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:`url(${slackIcon}) center / cover`}}></CardTitle>
            <CardTitle style={{color:'black'}}>Slackbot d'alerte CPA Adwords</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nostrum id quasi et, provident veniam porro consectetur molestias atque voluptatibus ipsa dolorum, asperiores quibusdam quidem nesciunt mollitia numquam ipsam. Quidem.</CardText>
             <CardActions border>
               <Button colored style={{textAlign:'center'}}>GitHub</Button>
             </CardActions>
             <CardMenu style={{color:'#fff'}}>
               <IconButton name="share"/>
             </CardMenu>
          </Card>

            <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
              <CardTitle style={{color:'#fff',height:'176px',background:`url(${slackIcon}) center / cover`}}></CardTitle>
              <CardTitle style={{color:'black'}}>Slackbot d'alerte absence de stocks sur fiche produit</CardTitle>
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
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Machine Learning</Tab>
          <Tab>Ads Automation</Tab>
          <Tab>Slackbots</Tab>

        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    );
  }

}

export default Projects;
