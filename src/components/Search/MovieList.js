import React, { Component } from 'react'
import { Card, Rating, Image } from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import styles from './MovieList.css'

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movie: props.movie,
        id: props.id,
        results: props.results,
    };

    //console.log(this.state.id);
    // console.log(this.state.results);
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
    //let id = idd - 1;
    // console.log(this.state.movie.vote_average);
    // const RatingExampleStar = () => (
    //   <Rating icon='star' defaultRating={info.vote_average/2} maxRating={5} />
    // );
    const IndividualCard = (
<Card>
 <Image src={imageUrl} />
 <Card.Content>
   <Card.Header>
     {this.state.movie.title}
   </Card.Header>
   <Card.Meta>
    <Rating icon='star' defaultRating={this.state.movie.vote_average} maxRating={10} />
  </Card.Meta>
 </Card.Content>
</Card>
);

     return(

       <li className = "list-group-item">
       <div className = "ele">
           <Link to={{ pathname: '/DView', query: {info: info, imageUrl: imageUrl, results: results, id: idd} }}> {IndividualCard} </Link>
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

export default MovieList;
