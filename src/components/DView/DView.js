import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Card, Icon } from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import styles from './DView.scss'

class DView extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      movie: props.location.query.info,
      img: props.location.query.imageUrl,
      results: props.location.query.results,
      id: props.location.query.id,
    }
    this.update = this.update.bind(this);
    this.updatePre = this.updatePre.bind(this);

  }
  //



  update({idn, movieNext}) {
    let imageUrl = "https://image.tmdb.org/t/p/w300" + movieNext.poster_path || movieNext.backdrop_path;

        this.setState({
        movie:movieNext,
        id: idn,
        img: imageUrl,
      })
    }

    updatePre({idp, moviePre}) {
      let imageUrl = "https://image.tmdb.org/t/p/w300" + moviePre.poster_path || moviePre.backdrop_path;

          this.setState({
          movie:moviePre,
          id: idp,
          img: imageUrl,
        })
      }

  // let title = this.state.movie.title;
  // let overview = this.state.overview;
  // let rd = this.state.release_date;
  // let vc = this.state.movie.vote_count;
  // let va = this.state.movie.vote_average;
  // let id = this.state.movie.id;
  // let popularity = this.state.movie.popularity;

    render() {
      let extra = (
      <a>
      <Icon name='user' />
      movie id: {this.state.movie.id}
     </a>
   )
     let popularity = (
       <a>
       <p>rease date: {this.state.movie.release_date}</p>
       <p>popularity: {this.state.movie.popularity}</p>
      </a>
    )
    let idn = 0;
    let idp = 0;
    if (this.state.id == this.state.results.length) {
      idn = 1;
      idp = this.state.id - 1;
    }
    else if (this.state.id == 1) {
      idp = this.state.results.length;
      idn = this.state.id + 1;
    }
    else {
      idn = this.state.id + 1;
      idp = this.state.id - 1;
    }


     let movieNext = this.state.results[idn - 1];
     console.log(movieNext);

     let moviePre = this.state.results[idp - 1];
     let imageUrl = this.state.img;
     let results = this.state.results;


        return(
        <div className = "outer">

        <div className="DView">

         <Card
         image={this.state.img}
         header={this.state.movie.title}
         meta= {popularity}
         description={this.state.movie.overview}
         extra={extra}
        />
        </div>

       <div className = "next">
        <Button positive onClick={() => this.update({idn, movieNext})}> next </Button>
      {/* remember: must use ()=>yhis.funciton-name!!!!!!!!!!!!!!!! */}
       </div>
       <div className = "prev">
       <Button positive onClick={() =>this.updatePre({idp, moviePre})}>previous</Button> {/* remember: must use ()=>yhis.funciton-name!!!!!!!!!!!!!!!! */}
       </div>

        </div>


        )
    }
}

export default DView
