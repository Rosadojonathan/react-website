import React, { Component } from 'react';


import {Cell, Card, CardTitle,CardText, Link} from 'react-mdl';



class Article extends Component {

  render() {
    return (
      <Cell col={9} style={{padding:'8px'}}>
        {/* <Link to={`/blog/${this.props.linkTitle}`} > */}
        <a href={`/blog/${this.props.linkTitle}`} style={{textDecoration:'none'}}>
          <Card shadow={5} style={{width:'95%',margin:'auto',maxHeight:'280px'}}>

              <CardTitle style={{color:'black',maxHeight:'90px',marginTop:'15px'}}><h2 style={{fontSize:'1.6em',lineHeight:'1.2em',fontWeight:'bold'}}>{this.props.cardTitle}</h2></CardTitle>
              <CardText style={{maxHeight:'150px'}} >{this.props.cardText}</CardText>

          </Card>
        </a>
      {/* </Link> */}
      </Cell>
    );
  }

}

export default Article;
