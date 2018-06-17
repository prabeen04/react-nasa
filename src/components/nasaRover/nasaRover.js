import React, { Component } from 'react';
import { NASA_API_KEY } from '../../config/index';
import axios from 'axios';

const apiURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_API_KEY}`;

class NasaRover extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }
    componentDidMount(){
        axios.get(apiURL)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
  render() {
    return (
      <div>
        <h1>NasaRover Component</h1>
      </div>
    )
  }
}
export default NasaRover;