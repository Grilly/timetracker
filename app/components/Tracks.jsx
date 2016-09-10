import React from 'react';

import Track from './Track.jsx';

class Tracks extends React.Component {
  constructor(props) {
    super(props);
    this.renderTrack = this.renderTrack.bind(this);
  }
  renderTrack(index) {
    return <Track track={this.props.day.tracks[index]} key={index} />;
  }
  render() {
    const { day } = this.props;
    console.log(this.props);
    const { date, tracks } = day;
    return (
      <div>
        <h2>{date}</h2>
        <table>
          <tbody>
            {Object.keys(tracks).map(this.renderTrack)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tracks;
