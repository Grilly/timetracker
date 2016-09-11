import React from 'react';
import { Link } from 'react-router';

import Tracks from './Tracks.jsx';
import Statistics from './Statistics.jsx';

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.getDay = this.getDay.bind(this);
  }
  getDay(date) {
    let dayFound;
    if (typeof this.props.day === 'undefined') {
      const foundDays = this.props.days.filter(day => day.date === parseInt(date, 10));
      dayFound = foundDays.length >= 1 ? foundDays[0] : undefined;
    } else {
      dayFound = this.props.day;
    }
    return dayFound;
  }
  render() {
    const date = (typeof this.props.params === 'undefined' ||
                  typeof this.props.params.date === 'undefined') ?
                  this.props.day.date : this.props.params.date;
    const day = this.getDay(date);
    return (
      <div className="day">
        <h2 className="day__headline">
          <Link to={`/days/${date}`}>{date}</Link>
        </h2>
        <div>
          <Tracks {...this.props} day={day} />
          <Statistics day={day} tracks={this.props.tracks} />
        </div>
      </div>
    );
  }
}

export default Day;
