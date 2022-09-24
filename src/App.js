import { useState } from 'react';
import SimpleNotification from './components/notification-component';
import NotificationCount from './components/notification-count';

import data from './data/data.json';

import './App.css';

function App() {
  const [testCount, setTestCount] = useState(3);
  const [readMessageState, setReadMessageState] = useState(false);

  const clickHandler = () => {
    setReadMessageState(true);
    setTestCount(0)
  };

  // function to count unread notifications
  /*
  const notificationSearch = () => {
    let count = 0;
    
    for (let i=0; i < data.length; i++) {
        if (data[i].readMessage === true) {
          count += 1;
        }
    }
    return count;
  }
  */

  return (
    <div className="App">
      <div className="container">
        <NotificationCount testCount={testCount} clickHandler={clickHandler}/>
        {data.map((item) => (
        <SimpleNotification
          readMessageState={readMessageState}
          avatar={item.avatar}
          name={item.name}
          text={item.text}
          activity_post={item.activity_post}
          activity_game={item.activity_game}
          message={item.message}
          picture={item.picture}
          timeStamp={item.time_stamp}
          readMessage={item.readMessage}
          key={item.name}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
