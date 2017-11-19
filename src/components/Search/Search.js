import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import _ from 'lodash';



import SearchBar from './SearchBar.js'
import Detail from './Detail.js'
// import TypeList from './TypeList.js'


import styles from './Search.css'

const URL = 'https://api.themoviedb.org/3/search/movie?api_key=1e29783360b2b328137f396283e0de37&language=en-US&query=titanic&page=1&include_adult=false';
//const baseURL = 'https://pokeapi.co/api/v2/type/';


class Search extends Component {
    constructor(props) {
       super(props);

       this.state = {
             error: false,
             errMsg: '',
             sending: false,
             name: null,
            //  pokemonInfo: null,
            //  pokemon:null,
            results: null,
            prop1: 0,
            prop2: 0,
            visible1: true,
            visible2: false,
            visible3: false,
            visible4: false,
            len: 0,



       }
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleSearchTerm = this.handleSearchTerm.bind(this);
    // this.searchType = this.searchType.bind(this);


}

      handleChange1(event) {
        this.setState({prop1:event.target.value});
      }
      handleChange2(event) {
        this.setState({prop2:event.target.value});
      }

      handleSubmit(event){
        if (this.state.prop1 == 1 && this.state.prop2 == 1) {
        //event.preventDefault();
        this.state.visible1 = true;
        this.state.visible2 = false;
        this.state.visible3 = false;
        this.state.visible4 = false;
        this.VoteAverageAsc(this.state.name);
        //event.preventDefault();
        }
       if (this.state.prop1 == 1 && this.state.prop2 == 2){
          //event.preventDefault();
          this.VoteAverageDesc(this.state.name);
          this.state.visible1 = false;
          this.state.visible2 = true;
          this.state.visible3 = false;
          this.state.visible4 = false;
          //event.preventDefault();
        }
        if (this.state.prop1 == 2 && this.state.prop2 == 1){
          //event.preventDefault();
          this.VoteCountAsc(this.state.name);
          this.state.visible1 = false;
          this.state.visible2 = false;
          this.state.visible3 = true;
          this.state.visible4 = false;
          //event.preventDefault();
        }
        if (this.state.prop1 == 2 && this.state.prop2 == 2){
          //event.preventDefault();
          this.VoteCountDesc(this.state.name);
          this.state.visible1 = false;
          this.state.visible2 = false;
          this.state.visible3 = false;
          this.state.visible4 = true;
          //event.preventDefault();
        }

         event.preventDefault();
      }

      VoteAverageAsc(term) {
       this.setState({
         sending: true,
         name: term,
        });

       axios.get(URL.replace(/titanic/, term))
           .then(res => {
               const { results } = res.data;
               results.sort(function (a, b) {
                   return a.vote_average - b.vote_average;
                     });
               this.setState({
                   sending: false,
                   results: results,
                   len: results.length,

               });
               //console.log(this.state.len);
              // this.searchType(this.state.pokemonInfo.type);

             })
             .catch(err => {
                  //console.log('ERROR:', err)
                  this.setState({
                      sending: false,
                      error: true,
                      errMsg: err,
                  });
              })
      }

      VoteAverageDesc(term) {
       this.setState({ sending: true });

       axios.get(URL.replace(/titanic/, term))
           .then(res => {
               const { results } = res.data;
               results.sort(function (a, b) {
                   return b.vote_average - a.vote_average;
                     });
               this.setState({
                   sending: false,
                   results: results,
                   len: results.length,

               });

              // this.searchType(this.state.pokemonInfo.type);

             })
             .catch(err => {
                  //console.log('ERROR:', err)
                  this.setState({
                      sending: false,
                      error: true,
                      errMsg: err,
                  });
              })
      }

      VoteCountAsc(term) {
       this.setState({ sending: true });

       axios.get(URL.replace(/titanic/, term))
           .then(res => {
               const { results } = res.data;
               results.sort(function (a, b) {
                   return a.vote_count - b.vote_count;
                     });
               this.setState({
                   sending: false,
                   results: results,
                   len: results.length,

               });
              // this.searchType(this.state.pokemonInfo.type);

             })
             .catch(err => {
                  //console.log('ERROR:', err)
                  this.setState({
                      sending: false,
                      error: true,
                      errMsg: err,
                  });
              })
      }

      VoteCountDesc(term) {
       this.setState({ sending: true });

       axios.get(URL.replace(/titanic/, term))
           .then(res => {
               const { results } = res.data;
               results.sort(function (a, b) {
                   return b.vote_count - a.vote_count;
                     });
               this.setState({
                   sending: false,
                   results: results,
                   len: results.length,

               });
              // this.searchType(this.state.pokemonInfo.type);

             })
             .catch(err => {
                  //console.log('ERROR:', err)
                  this.setState({
                      sending: false,
                      error: true,
                      errMsg: err,
                  });
              })
      }
      // searchType(t){
      //   console.log(t);
      // this.setState({ sending: true });
      // axios.get(baseURL + t)
      //      .then(res => {
      //             const {name, pokemon} = res.data;
      //             this.setState({
      //               sending: false,
      //               tname: name,
      //               pokemon:pokemon,
      //             });
      //             console.log(2)
      //         })
      //       }




     render() {
         //console.log('STATE', this.state)

       const results = this.state.results;
       const sending = this.state.sending;
       const debounceSearch = _.debounce(term => this.VoteAverageAsc(term), 800);
       const len = this.state.len;
        return(

          <div>
             <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
               <SearchBar handleSearch={debounceSearch} />

               <div className = "formMovie">
               <form onSubmit={this.handleSubmit}>
                <label>
                   Search movie based on:
                       <select value={this.state.prop1} onChange={this.handleChange1}>
                           <option value="1">Vote Average</option>
                           <option value="2">Vote Count</option>
                      </select>
                      <select value={this.state.prop2} onChange={this.handleChange2}>
                          <option value="1">Ascending Order</option>
                          <option value="2">Descending Order</option>
                     </select>
                </label>
               <input type="submit" value="Submit" />
              </form>
              </div>





                {
                    this.state.visible1
                    ? <Detail results={results} sending={sending} len={len} />
                     : null
                 }
                 {
                     this.state.visible2
                     ? <Detail results={results} sending={sending} len={len}/>
                      : null
                  }
                  {
                      this.state.visible3
                      ? <Detail results={results} sending={sending} len={len}/>
                       : null
                   }
                   {
                       this.state.visible4
                       ? <Detail results={results} sending={sending} len={len}/>
                        : null
                    }




             </div>



          </div>

       );

     }


}

export default Search
