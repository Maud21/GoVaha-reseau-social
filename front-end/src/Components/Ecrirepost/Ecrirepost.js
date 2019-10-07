/* Modules imports */
import React, { Component } from 'react';

/* Styles imports */
import './Ecrirepost.css';


/* Posts component */
class Ecrire-post extends Component {
 constructor(props) {
   super(props);
   this.state = {
   }
 }

 render() {
    return(
      <div><input type="text"size="80" placeholder="Titre"/></div>
      <div><input type="text"size="80" placeholder="Contenu"/></div>
    )
  }
 }
 export default Ecrire-posts;