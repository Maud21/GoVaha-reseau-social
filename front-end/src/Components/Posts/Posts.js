/*
* Component to display a post
*/
/* Modules imports */
import React, { Component } from 'react';

/* Styles imports */
import './Posts.css';


/* Posts component */
class Posts extends Component {
 constructor(props) {
   super(props);
   this.state = {
   }
 }
 render() {
   return(
     <div className="post card">
       <div className="card-body">
         <h5 className="card-title">{this.props.title}</h5>
         <h6 className="card-subtitle mb-2 text-muted">{this.props.author}</h6>
         <p className="card-text">{this.props.text}</p>
         <a href="love.com" className="card-link" alt="love">J'aime</a>
         <a href="hate.com" className="card-link" alt="hate">Je n'aime pas</a>
       </div>
     </div>
   )
 }
}
export default Posts;