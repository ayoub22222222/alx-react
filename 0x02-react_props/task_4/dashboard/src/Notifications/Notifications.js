import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close_image  from '../assets/close_image.png';
import NotificationItem from './NotificationItem';

function Notification() {
	return (<div className="Notifications">
			<p>
				Here is the list of notifications
			</p>
		        <button  arial-label="Close">
				<img src={ close_image } alt="close emoji" width="5" height="7"/>
		        </button>
		        <ul>
				<NotificationItem type='defaut' value='New course availabale' />
				<NotificationItem type='urgent' value='New resume avaiable' />
				<NotificationItem type='urgent' html={getLatestNotification()} />
		        </ul>
		</div>);
}

export default Notification;
