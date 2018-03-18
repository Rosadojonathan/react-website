import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Grid, Cell } from 'react-mdl';

class ArticlePost extends Component {
  constructor(props){
    super(props)

    this.state = {
      article: {},
      loaded:false
    }

  }



componentDidMount(){

 let  handle = this.props.match.params.article;

  console.log(handle);

  fetch(`/articles/${handle}`)
  .then(res => res.json())
  .then(article => this.setState({article,loaded:true}))
  .catch(function(error){

    console.log(error);
  });

}




  render() {
    console.log(this.state.article);
    if (this.state.loaded){
      return (

        <div style={{width:'80%',margin:'auto'}}>

          <Helmet>
            <meta charSet="utf-8" />
            <title>{this.state.article[0].title} - Tech-Marketer</title>
          </Helmet>

          <Grid className="article-post">
            <Cell col={9}>
              <h1 style={{fontSize:'1.8em',fontWeight:'bold'}}>{this.state.article[0].title}</h1>
              
              <p style={{textIndent:'2em'}} dangerouslySetInnerHTML={{__html: this.state.article[0].content}} />
            </Cell>

          </Grid>
        </div>
  )  }
    else{
      return (
        <div>
          <h3>Loading...</h3>


        </div>
      )
    }

  }

}

export default ArticlePost;
