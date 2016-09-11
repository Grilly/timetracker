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
    const newTrack = {
      id: 87,
      startTime: this.inputStartTime.value,
      endTime: this.inputEndTime.value,
      description: this.inputDescription.value,
    };
    const { addTrack } = this.props;
    addTrack(this.props.day.date, newTrack);
    return;
  }
  renderTrack(index) {
    return <Track track={this.props.day.tracks[index]} key={index} />;
  }
  render() {
    const { day } = this.props;
    const { tracks } = day;
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
              {Object.keys(tracks).map(this.renderTrack)}
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
