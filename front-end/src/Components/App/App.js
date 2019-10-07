
import './App.css';

/*Modules imports*/
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/*components imports */
import Posts from '../Posts/Posts';
import Header from '../Header/Header';
import Ecrirepost from '../Ecrirepost/Ecrirepost';

/*Main app component */
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: []

    };
  }

  componentDidMount(){
    this._fetchPostdata()
  
  }
  
  /*pour récupérer données depuis le serveur*/
  _fetchPostdata = () => {
  fetch("http://localhost:8080/routage")/*promise*/
    .then(res => res.json()) /*comme Json.parse*/
    .then(
      (result) => {
        console.log(result);
        this.setState({posts : result});
        //succes
      },
      (error) => {
        console.log(error);
        //error
      }
    )
  }
  
  /*Display posts*/
  /*fetch en boucle*/

  _displayPosts(){
    if(this.state.posts.length > 0){
      var postToDisplay = [];

      this.state.posts.forEach((post)=> {
        postToDisplay.push(
          <Posts title={post.title} author={post.userId} Text={post.body} />);
        
      });
      return postToDisplay;
    }
    else {
      return(
        <p>bye</p>
      )
    }
  }

  
    render() {
      return (
        <div id="bloc">{/*bloc principal*/}
          <div className="top">
          <Header/></div>
              <div className="commentaire_du_jour"><input type="text"size="80" placeholder="Mon humeur du jour"/></div>
              <Ecrirepost/></div>
              <div className="colonnes">
                <div className="row">
                  <div className="col-sm-2">
                    Colonne 1
                  </div>
                  <div className="col-sm-6">
  
                    Mes Posts
                    <div className="container">
                    
                {this._displayPosts()}
              
                  </div>
                  <div className="col">Post 2</div> 
  
                  </div>
                  <div className="col-sm-4">
                    Mon profil
                  </div>
                </div>
              </div>
              
        <footer>Ici sera mon footer</footer> 
        </div>
        
      );
    }
  }




export default App;
