import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
//import './App.css';
import styles from './App.css'


class App extends Component {
  render() {
    const CardExampleGroups = () => (
      <Card.Group>
        <Card>
          <Card.Content>
            <Image floated='right' size='mini' src='https://i.pinimg.com/736x/05/94/c9/0594c9f0ee9bd01dec087f548e03db58--best-movie-posters-classic-movie-posters.jpg' />
            <Card.Header>
              E.T.
            </Card.Header>
            <Card.Meta>
              Steven Spielberg
            </Card.Meta>
            <Card.Description>
  A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>Like</Button>
              <Button basic color='red'>Dislike</Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image floated='right' size='mini' src='http://i0.kym-cdn.com/entries/icons/facebook/000/014/722/honest-movie-posters-40.jpg' />
            <Card.Header>
              Her
            </Card.Header>
            <Card.Meta>
              Spike Jonze
            </Card.Meta>
            <Card.Description>
              In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>Like</Button>
            <Button basic color='red'>Dislike</Button>
          </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image floated='right' size='mini' src='http://www.theshiznit.co.uk/media/2017/Jan/truth/la%20la%20land.png' />
            <Card.Header>
              La La Land
            </Card.Header>
            <Card.Meta>
              Damien Chazelle
            </Card.Meta>
            <Card.Description>
              Waiting for their big breaks, two proper L.A. dreamers attempt to reconcile aspirations and relationship in a magical old-school romance.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>Like</Button>
              <Button basic color='red'>Dislike</Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    )

      return(
      <div>
      <div className="App">
         <h1>Movie Search Browser</h1>
         <br />
          <Link to="/Search">
              <Button>
                  Search
              </Button>
          </Link>
            <Link to="/Gallery">
                <Button>
                    Gallery
                </Button>
            </Link>
        </div>
     <div className = "moviecard">
     {CardExampleGroups()}
     </div>
    </div>
  )
  }
}

export default App;
