import React from 'react';

import Track from './Track.jsx';

class Tracks extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderTrack = this.renderTrack.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const startTime = this.inputStartTime.value;
    const endTime = this.inputEndTime.value;
    const description = this.inputDescription.value;
    this.props.addTrack(this.props.day.date, { startTime, endTime, description });
  }
  renderTrack(track, index) {
    return <Track {...this.props} track={track} key={index} />;
  }
  render() {
    return (
      <div className="day__tracks">
        <form onSubmit={this.handleSubmit}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Start</th>
                <th>End</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.tracks[this.props.day.code].map(this.renderTrack)}
              <tr>
                <td>&nbsp;</td>
                <td>
                  <input
                    type="text"
                    ref={(ref) => { this.inputStartTime = ref; }}
                    placeholder="start time"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    ref={(ref) => { this.inputEndTime = ref; }}
                    placeholder="end time"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    ref={(ref) => { this.inputDescription = ref; }}
                    placeholder="description"
                  />
                </td>
                <td>
                  <input
                    type="submit"
                    value="Add"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default Tracks;
