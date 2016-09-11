import React from 'react';

class Statistics extends React.Component {
  render() {
    return (
      <div className="day__statistics">
        <h2>Statistics</h2>
        <p>Number of tracks: {this.props.tracks[this.props.day.code].length}</p>
      </div>
    );
  }
}

export default Statistics;
