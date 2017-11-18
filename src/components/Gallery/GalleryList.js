import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import styles from './GalleryList.scss'

class GalleryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movie: props.movie,
        id: props.id,
        results: props.results,
    };
    // this.handleButtonClick = this.handleButtonClick.bind(this);
  }



 //  handleButtonClick(event){
 //
 //   //calculate your data here
 //   //then redirect:
 //   this.context.router.push({ //browserHistory.push should also work here
 //     pathname: "/DView",
 //    state: {movie: this.state.movie},
 //   });
 //
 // }

 render() {

     //const video = props.video;


    let imageUrl = "https://image.tmdb.org/t/p/w300" + this.state.movie.poster_path || this.state.movie.backdrop_path;
    // let title = this.state.movie.title;
    // let overview = this.state.overview;
    // let rd = this.state.release_date;
    // let vc = this.state.movie.vote_count;
    // let va = this.state.movie.vote_average;
    // let id = this.state.movie.id;
    // let popularity = this.state.movie.popularity;
    let info = this.state.movie;
    let results = this.state.results;
    let idd = this.state.id;
     return(
       <li className = "list">
         <div className = "ele">
           <Link to={{ pathname: '/DView', query: {info: info, imageUrl: imageUrl, results: results, id: idd} }}>  <img className = "img" src = {imageUrl}/> </Link>
         </div>
       </li>
     );
   };

 }
//
// const MovieList = ({movie}) => {
//   //const video = props.video;
//
//     let imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path || movie.backdrop_path;
//
//   return(
//     <li className = "list-group-item">
//     <div className = "ele">
//         <button onClick={this._handleButtonClick}>Click me</button>
//         <h2 >{'Name: ' + movie.title }</h2>
//         <img className = "media-object" src = {imageUrl}/>
//
//
//
//
//     </div>
//     </li>
//   );
// };

export default GalleryList;
