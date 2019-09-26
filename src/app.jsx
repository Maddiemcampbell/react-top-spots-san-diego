import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        topspots: []
    }
}

componentWillMount() {
  axios
  .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
  .then(response => response.data)
  .then(topspots => this.setState({ topspots }));
}
  render() {
    return (
      <body>
        <div className='app'>
          <div className='contentWrapper'>
            <h1>
              San Diego Top Spots
            </h1>
            <h3>
              A list of the top 30 places to see in San Diego, California.
            </h3>
          </div>
          <div className='contentWrapper'>
            {
            this.state.topspots.map(topspot => (
              <TopSpot
                key={ topspot.id }
                name={ topspot.name }
                description={ topspot.description }
                location={ topspot.location } 
            />
            ))
        }
          </div>
          
        </div>
      </body>
    );
  }
}

export default App;
