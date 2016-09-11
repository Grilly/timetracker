import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log(...props);
    this.renderChildren = this.renderChildren.bind(this);

    // this.addTrack = this.addTrack.bind(this);
  }
//   addTrack(date, track) {
//     let dayIndex;
//     for (let index = 0; index < this.state.days.length; index += 1) {
//       if (this.state.days[index].date === date) {
//         dayIndex = index;
//       }
//     }

//     const newDays = this.state.days;
//     days[dayIndex].date = date;
//     days[dayIndex].tracks.push(track);

//     this.setState(newDays);
//   }
  // <Days days={this.state.days} addTrack={this.addTrack} />
  renderChildren(props) {
    return React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, props)
    );
  }
  render() {
    return (
      <div>
        <h1>Timetracker</h1>
        <Link to={'/days'}>All Days</Link><br />
        {this.renderChildren(this.props)}
      </div>
    );
  }
}

export default App;
