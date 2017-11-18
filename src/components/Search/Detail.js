import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styles from './Detail.scss'
import MovieList from './MovieList.js'

const Detail = (props) => {
    if (props.results === null){
        return <div className="trans">Please search a Movie!...</div>
    }

    if (props.sending === true ){
        return <div className="trans">Spinning cogs....We will find that pokemon!</div>
    }


    let i = 0;
    const MovieItems = props.results.map((movie) => {
      i = i + 1

      return (
        <MovieList
         key = {movie.id}
         movie = {movie}
         id = {i}
         results = {props.results}
         />
      )
    });
    return (
      <ul className = "col-md-4 list-group list">
        {MovieItems}
      </ul>
    );




};







export default Detail;
