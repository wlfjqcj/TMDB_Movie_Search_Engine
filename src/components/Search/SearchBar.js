import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './SearchBar.scss'

class SearchBar extends Component {

  constructor(props){
         super(props);
         this.state = {
             term: ''
         }
     }


     handleInput(term){
         // Had issues with it not catching first term - Made it a call back
         this.setState({term});
         this.props.handleSearch(term);
     }




render () {


return (
  <div>
        <div className = "search">

            <input
                           type="text"
                           value={this.state.term}
                           onChange={event => this.handleInput(event.target.value)}
                           placeholder="Enter movie name..." />

        </div>


   </div>

        );
    }
}






export default SearchBar;
