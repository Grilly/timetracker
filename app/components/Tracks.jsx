import React from 'react';

import Track from './Track.jsx';

class Tracks extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
              {
                this.props.tracks[this.props.day.code].map((track, index) =>
                  <Track track={track} key={index} />)
              }
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
