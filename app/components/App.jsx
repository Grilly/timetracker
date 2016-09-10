import React from 'react';

class App extends React.PureComponent {
  render() {
    const { name, age, bio, tracks } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <h4>{age}</h4>
        <h4>{bio}</h4>
        <br />
        <div>Id of track 0: "{tracks[0].id}"</div>
      </div>
    );
  }
}

export default App;
