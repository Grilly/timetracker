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
    const { date, tracks } = day;
    return (
      <div>
        <h2>{date}</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Start</th>
              <th>End</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(tracks).map(this.renderTrack)}
            <tr>
              <td>&nbsp;</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tracks;
