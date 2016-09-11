import React from 'react';

import Tracks from './Tracks.jsx';
import Statistics from './Statistics.jsx';

class Day extends React.Component {
  render() {
    return (
      <div className="day">
        <h2 className="day__headline">{this.props.day.date}</h2>
        <div>
          <Tracks day={this.props.day} addTrack={this.props.addTrack} />
          <Statistics day={this.props.day} />
        </div>
      </div>
    );
  }
}

export default Day;
