
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import {Grid, Cell, Card,CardTitle,Button,CardMenu,IconButton, CardText } from 'react-mdl';

import Article from './article.js';
// import GoogleTagManager from './google-tag-manager';
import '../App.css'

import avatar from '../img/thinking.jpeg';



class Landing extends Component {
  constructor(props){
    super(props);
    this.state={ postsHome:[]}
  }

  componentDidMount(){
    fetch('/posts')
    .then(res => res.json())
    .then(postsHome => this.setState({postsHome}))
    .catch(function(error){
      console.log(error);
    });

  }

  render() {

    const maxCardTextLength = 250;
    return (
      <div style={{width:'100%',margin:'auto'}}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home - Tech-Marketer</title>
          <meta name="google-site-verification" content="a37PJdVoQ82y0OjypAxGBK1T0nPvph736rwCkcivuEk" />

        </Helmet>
        {/* <GoogleTagManager gtmId='GTM-WQ35TQS'> </GoogleTagManager> */}
        <Grid className="landing-grid">
          <Cell col={12}>
            <img className="avatar-img img-circle" src={avatar} alt="bitmoji jonathan" />
            <div className="banner-text">
              <h1>Tech-Marketer</h1>
              <hr/>
              <p>SEM - Programming - Data Science - Analytics</p>



            </div>
          </Cell>
          <Cell col={12}>
          <h3>Articles récents...</h3>
          <br/>
          <div className="projects-grid">

            {this.state.postsHome.slice(-3).map(post=>

                <Card  key={post.id} shadow={5} style={{margin:'auto',marginBottom:'20px',minHeight:'280px'}} className="landing-cards">
                  <a href={`/blog/${post.linkTitle}`} style={{textDecoration:'none'}}>

                  <CardTitle style={{color:'black',fontSize:"1.4em",lineHeight: post.cardTitle.length>70 ? '0.9em':'1em'}}><b>{post.cardTitle}</b></CardTitle>
                  <CardText style={{fontSize:'1em'}}>{ post.cardText.length > maxCardTextLength ? post.cardText.substr(0,247) + '...' : post.cardText}</CardText>
                  </a>
                </Card>



          )}





          </div>


          </Cell>
        </Grid>
      </div>
    );
  }

}

export default Landing;
