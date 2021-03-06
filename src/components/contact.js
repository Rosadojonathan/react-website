import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Grid,Cell,Textfield,Button} from 'react-mdl';
import axios from 'axios';

class Contact extends Component {
 state = {
   email: '',
   message:'',
   name:'',
 };

 onSubmit = () => {
   if (this.state.name && this.state.email && this.state.message){
     console.log(this.state);

     this.setState({email: '',message:'',name:'', bgColor:'green',msgSend:true})
     this.handleSubmit();
     setTimeout(()=> this.setState({bgColor:'',msgSend:false}),1200)
   }
   else {
     alert("Remplissez tous les champs s'il vous plaît")
   }
 }

  handleSubmit = async () => {


   const { name, email, message } = this.state;

   const form = await axios.post('/contactform', {
     name,
     email,
     message,
   })


 }

  render() {

    let bgColor = this.state.bgColor ? this.state.bgColor : '';
    let message = this.state.msgSend ? "✔" : "Envoyer";
    return (
  <div style={{width:'100%',margin:'auto'}}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Me contacter - Tech-Marketer </title>
    </Helmet>

    <Grid className="landing-grid" style={{top:'170px'}}>
      <Cell col={12}>

        <h3 style={{}}>Me contacter</h3>
        <Textfield
                onChange={() => {}}
                name="name"
                label="Nom..."
                value={this.state.name}

                onChange={e => this.setState({name: e.target.value})}
                pattern="\S+.*"
                error="Entrez un nom quand même..."
                floatingLabel
                style={{width: '400px'}}
            />
            <br/>
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
        <Button id='contact-form' raised colored ripple style={{backgroundColor:bgColor}} onClick={() => this.onSubmit()} > {message}</Button>

      </Cell>
    </Grid>
  </div>
    );
  }

}

export default Contact;
