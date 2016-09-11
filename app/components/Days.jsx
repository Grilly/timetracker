import React from 'react';

import Day from './Day.jsx';

class Days extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.days.map((day, index) =>
            <Day {...this.props} key={index} index={index} day={day} />)
        }
      </div>
    );
  }
}

export default Days;
