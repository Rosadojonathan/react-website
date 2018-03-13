import React, { Component } from 'react';

import { Grid, Cell, Card, CardTitle, CardMenu,IconButton, CardText, CardActions,Link} from 'react-mdl';

import Article from './article.js';
import '../App.css'

class Blog extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <div className="article-grid">
      <Article
        cardTitle="Comment créer une audience Facebook grâce à l'API"
        cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe perferendis repellendus omnis quae eveniet obcaecati labore voluptatem sequi eos a, nulla, veniam totam tempore sint officiis aut, vero, dignissimos! Nisi."
        linkTitle="créer-audience-fb-api"
      />
      <Article
        cardTitle="Comment configurer une audience Google Analytics pour du retargeting"
        cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, reprehenderit saepe nesciunt facere? Temporibus eius illo obcaecati fuga ut, commodi dolorum corporis libero facere voluptatum fugiat deserunt impedit sapiente voluptates."
        linkTitle="audience-ga-retargeting"
      />
      <Article
        cardTitle="Comment créer des slackbots"
        cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas officia quisquam dolore? Molestias quas est fuga nesciunt possimus totam eius voluptate voluptatum! Recusandae at molestiae, id aut vitae aspernatur."
        linkTitle="comment-créer-des-slackbots"
      />

      <Article
        cardTitle="Comment configurer une audience Google Analytics pour du retargeting"
        cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, reprehenderit saepe nesciunt facere? Temporibus eius illo obcaecati fuga ut, commodi dolorum corporis libero facere voluptatum fugiat deserunt impedit sapiente voluptates."
        linkTitle="audience-ga-retargeting"
      />

      <Article
        cardTitle="Comment créer une audience Facebook grâce à l'API"
        cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe perferendis repellendus omnis quae eveniet obcaecati labore voluptatem sequi eos a, nulla, veniam totam tempore sint officiis aut, vero, dignissimos! Nisi."
        linkTitle="créer-audience-fb-api"
      />


    </div>
    );
  }

}

export default Blog;
