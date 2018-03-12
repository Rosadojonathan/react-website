import React, { Component } from 'react';
import { Grid,Cell,Textfield,Button} from 'react-mdl';


class Contact extends Component {
 state = {
   email: '',
   message:'',
 };

 onSubmit = () => {
   if (this.state.email && this.state.message){
     console.log(this.state);

     this.setState({email: '',message:'',bgColor:'green'})
   }
   else {
     alert('Please fill both input fields')
   }
 }

  render() {
    return (
  <div style={{width:'100%',margin:'auto'}}>
    <Grid className="landing-grid" style={{top:'170px'}}>
      <Cell col={12}>

        <h3 style={{}}>Me contacter</h3>
        <Textfield
                onChange={() => {}}
                name="email"
                label="Email..."
                value={this.state.email}

                onChange={e => this.setState({email: e.target.value})}
                pattern="\S+@\S+\.\S+"
                error="L'adresse email n'est pas valide"
                floatingLabel
                style={{width: '400px'}}
            />
            <br/>
        <Textfield
                onChange={() => {}}
                name="message"
                label="Message..."
                value={this.state.message}

                onChange={e => this.setState({message:e.target.value})}
                floatingLabel
                rows={3}
                style={{width: '400px'}}
            />

            <br/>
        <Button raised colored ripple onClick={() => this.onSubmit()} >Envoyer</Button>

      </Cell>
    </Grid>
  </div>
    );
  }

}

export default Contact;
