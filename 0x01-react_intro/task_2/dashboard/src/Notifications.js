import React from 'react';
import './Notifications.css';
import close_image  from './close_image.png';
import {getLatestNotification}  from './utils'

function Notifucation() {
	return (<div className="Notifications">
			<p>Here is the list of notifications</p>
		        <button  arial-label="Close" onClick={alert('Close button has been clicked')}>
				<img src={ close_image } alt="close emoji" width="5" height="7"/>
		        </button>
		        <ul>
				<li data-priority="high">New course available</li>
				<li data-priority="medium">New resume available</li>
				<li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
		        </ul>
		</div>);
}

export default Notifucation;
