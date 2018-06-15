import React from 'react';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager
} from 'react-notifications';

class Notification extends React.Component {
  createNotification = type => {
    return () => {
      NotificationManager.info('Info message');
    };
  };

  render() {
    return (
      <div>
        <NotificationContainer />
      </div>
    );
  }
}

export default Notification;
