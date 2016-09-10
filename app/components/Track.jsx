import React from 'react';

class Track extends React.Component {
  render() {
    const { id, startTime, endTime, description } = this.props.track;
    return (
      <tr>
        <td>{id}</td>
        <td>{startTime}</td>
        <td>{endTime}</td>
        <td>{description}</td>
      </tr>
    );
  }
}

export default Track;
