
import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import avatar from '../img/thinking.jpeg'
class Landing extends Component {

  render() {
    return (
      <div style={{width:'100%',margin:'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img className="avatar-img img-circle" src={avatar} alt="bitmoji jonathan" />
            <div className="banner-text">
              <h1>Tech-Marketer</h1>
              <hr/>
              <p>SEM - Programming - Data Science</p>

            

            </div>
          </Cell>
        </Grid>
      </div>
    );
  }

}

export default Landing;
