import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import GalleryList from './GalleryList.js'

import styles from './Genra.css'

const Genra = (props) => {
  if (props.results === null){
      return <div className="trans">Please search a Movie!...</div>
  }


  let i = 0;
  const MovieItems = props.results.map((movie) => {
      i = i + 1
    return (
      <GalleryList
       key = {movie.id}
       movie = {movie}
       id = {i}
        results = {props.results}
       />
    )
  });
  return (
    <ul className = "glist">
      {MovieItems}
    </ul>
  );
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

export default Genra;
