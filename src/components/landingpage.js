
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import {Grid, Cell, Card,CardTitle,Button,CardMenu,IconButton, CardText } from 'react-mdl';
import Article from './article.js';
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
    return (
      <div style={{width:'100%',margin:'auto'}}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home - Tech-Marketer</title>
        </Helmet>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img className="avatar-img img-circle" src={avatar} alt="bitmoji jonathan" />
            <div className="banner-text">
              <h1>Tech-Marketer</h1>
              <hr/>
              <p>SEM - Programming - Data Science</p>



            </div>
          </Cell>
          <Cell col={12}>
          <h3>Articles récents...</h3>
          <br/>
          <div className="projects-grid">

            {this.state.postsHome.slice(-3).map(post=>

                <Card  key={post.id} shadow={5} style={{margin:'auto',marginBottom:'20px'}} className="landing-cards">
                  <a href={`/blog/${post.linkTitle}`} style={{textDecoration:'none'}}>
                  <CardTitle style={{color:'black',fontSize:"1.4em"}}><b>{post.cardTitle}</b></CardTitle>
                  <CardText style={{fontSize:'1em'}}>{post.cardText}</CardText>
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
