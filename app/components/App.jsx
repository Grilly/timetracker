import React from 'react';

import Tracks from './Tracks.jsx';

import days from '../data/data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days,
    };
    this.addTrack = this.addTrack.bind(this);
  }
  getDayByDate(date) {
    return this.state.days.filter((day) => {
      if (day.date === date) return day;
      return undefined;
    });
  }
  addTrack(date, track) {
    let dayIndex;
    for (let index = 0; index < this.state.days.length; index += 1) {
      if (this.state.days[index].date === date) {
        dayIndex = index;
      }
    }

    const newDays = this.state.days;
    days[dayIndex].date = date;
    days[dayIndex].tracks.push(track);

    this.setState(newDays);
  }
  renderDay(date) {
    const day = this.getDayByDate(date);
    if (typeof day[0] !== 'undefined') {
      return <Tracks day={day[0]} addTrack={this.addTrack} />;
    }
    return '';
  }
  render() {
    return (
      <div>
        <h1>Timetracker</h1>
        <h2>All Days</h2>
        { this.renderDay(20160908) }
      </div>
    );
  }
}

export default App;
