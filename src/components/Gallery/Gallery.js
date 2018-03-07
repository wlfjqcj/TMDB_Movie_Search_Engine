import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './Gallery.css'
import Genra from './Genra.js'
// import Genra0 from './Genra.js'

class Gallery extends Component {
  constructor(props) {
     super(props);

     this.state = {
       activeItem: null,
       id: 0,
       results:[],
       sending:false,
     }
     this.handleItemClick = this.handleItemClick.bind(this);
    this.handleItemWithoutClick = this.handleItemWithoutClick.bind(this);
    this.handleItemWithoutClick();
   }
  //  handleItemWithoutClick() {
  //    //console.log(id)
   //
  //      let URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=1e29783360b2b328137f396283e0de37&language=en-US&total_items=100&pages=1&page=2';
   //
   //
  //    this.setState({
  //      sending: true,
  //      activeItem: name
  //     })
  //     axios.get(URL)
  //         .then(res => {
  //             const { results } = res.data;
  //             this.setState({
  //                 sending: false,
  //                 results: results,
  //             });
  //            // this.searchType(this.state.pokemonInfo.type);
   //
  //           })
   //
  //  }
   handleItemWithoutClick() {
       //console.log(id)
    let temp = [];
    let idList = ['28', '12', '16', '35', '80', '99', '18', '10751', '14', '36', '27'];
    this.setState({
      sending: true,

     })
    for (let i = 0; i < 11; i++) {
        let URL = 'https://api.themoviedb.org/3/genre/' + idList[i] +'/movies?api_key=1e29783360b2b328137f396283e0de37&language=en-US&include_adult=false&sort_by=created_at.asc';


        axios.get(URL)
            .then(res => {
                const { results } = res.data;
                //console.log(this.state.results);
                // this.setState({
                //     results: results.push(this.state.results)
                // });
               // this.searchType(this.state.pokemonInfo.type);
               temp = temp.concat(results);
               this.setState({
                 sending: false,
                 results: temp
                })
              })


     }





      console.log(this.state.results)
   }


    handleItemClick(e, { name, id }) {
      //console.log(id)

        URL = 'https://api.themoviedb.org/3/genre/' + id +'/movies?api_key=1e29783360b2b328137f396283e0de37&language=en-US&include_adult=false&sort_by=created_at.asc';


      this.setState({
        sending: true,
        activeItem: name,
        id: id
       })
       axios.get(URL)
           .then(res => {
               const { results } = res.data;
               this.setState({
                   sending: false,
                   results: results,
               });
              // this.searchType(this.state.pokemonInfo.type);

             })

    }

    render() {
      const results = this.state.results;
      const sending = this.state.sending;
      const { activeItem } = this.state
        return(
        <div className="Gallery">
        <Menu Menu fluid widths={12}>
        <Menu.Item

          name='All'
          active={activeItem === 'Action'}
          onClick={this.handleItemWithoutClick}
        />
        <Menu.Item
          name='Action'
          id = '28'
          active={activeItem === 'Action'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Adventure'
          id = '12'
          active={activeItem === 'Adventure'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Animation'
          id = '16'
          active={activeItem === 'Animation'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Comedy'
          id = '35'
          active={activeItem === 'Animation'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Crime'
          id = '80'
          active={activeItem === 'Animation'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Documentary'
          id = '99'
          active={activeItem === 'Animation'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Drama'
          id = '18'
          active={activeItem === 'Animation'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Family'
          id = '10751'
          active={activeItem === 'Animation'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Fantasy'
          id = '14'
          active={activeItem === 'Animation'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='History'
          id = '36'
          active={activeItem === 'Animation'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Horror'
          id = '27'
          active={activeItem === 'Animation'}
          onClick={this.handleItemClick}
        />
      </Menu>



          <Genra results={results} sending={sending}/>


        </div>
        )
    }
}

export default Gallery
