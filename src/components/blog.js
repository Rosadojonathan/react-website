import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import { Grid, Cell, Card, CardTitle, CardMenu,IconButton, CardText, CardActions,Link} from 'react-mdl';

import Article from './article.js';
import '../App.css'

class Blog extends Component {
  constructor(props){
    super(props);
    this.state={ posts:[]}
  }

  componentDidMount(){
    fetch('/posts')
    .then(res => res.json())
    .then(posts => this.setState({posts}))
    .catch(function(error){
      console.log(error);
    });

  }

  render() {
    return (
    <div className="article-grid">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog - Tech-Marketer</title>
      </Helmet>

      {this.state.posts.map(post=>

        <Article
          style={{width:'80%'}}
          key={post.id}
          cardTitle={post.cardTitle}
          cardText={post.cardText}
          linkTitle={post.linkTitle}
        />

         )}

    </div>
    );
  }

}

export default Blog;
