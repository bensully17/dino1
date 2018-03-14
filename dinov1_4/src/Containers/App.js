import React, { Component } from 'react';
import './App.css';
import '../Components/Listings/Listing/Listing.css'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Form from '../Components/Form/Form'
import Listing from '../Components/Listings/Listing/Listing'
const api_url = './listings.json'
class App extends Component {
  
  state = {
    listings: []
  }

  componentDidMount() {
    fetch(api_url)
      .then(response => response.json())
      .then(response => this.setState({listings: response}))
  }

  postDataHandler = () => {
    
  }
  render() {
    const listings = this.state.listings.reverse().map(listing => {
      return <Listing key={listing.id} title={listing.title} pay={listing.pay} desc={listing.description} dinos={listing.interested}/>
    })
    return (
      <div className="App">
        <Header />
        <div className='Main'>
          <div>
            <h2 style={{fontSize: '2em', fontFamily: 'sans-serif', margin: '10px'}}>Job Listings</h2>
            <div>
              {listings}
            </div>
          </div>
            
          <Form />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
