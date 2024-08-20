import React from 'react';
import './Notifications.css';
import close_image  from './close_image.png';

function Notifucation() {
	return (<div className="Notifications">
			<p>Here is the list of notifications</p>
		        <button  arial-label="Close" onClick={alert('Close button has been clicked')}>
				<img src={ close_image } alt="close emoji" width="5" height="7"/>
		        </button>
		        <ul>
				<li>New course available</li>
				<li>New resume available</li>
				<li></li>
		        </ul>
		</div>);
}

export default Notifucation;
