import React from 'react';

import Tracks from './Tracks.jsx';

import days from '../data/data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
    };
    this.loadSampleData = this.loadSampleData.bind(this);
  }
  getDayByDate(date) {
    return this.state.days.filter((day) => {
      if (day.date === date) return day;
      return undefined;
    });
  }
  loadSampleData() {
    this.setState({ days });
  }
  renderDay(date) {
    const day = this.getDayByDate(date);
    if (typeof day[0] !== 'undefined') {
      return <Tracks day={day[0]} />;
    }
    return '';
  }
  render() {
    return (
      <div>
        <h1>Timetracker</h1>
        <h2>All Days</h2>
        { this.renderDay(20160908) }
        { this.renderDay(20160909) }
        { this.renderDay(20160910) }
        <button onClick={this.loadSampleData}>loadSampleData</button>
      </div>
    );
  }
}

export default App;
