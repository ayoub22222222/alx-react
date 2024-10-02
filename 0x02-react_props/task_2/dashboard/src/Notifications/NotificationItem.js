import React from 'react';
import './Notification.css';




function NotificationItem({type, html, value}) {
	return (
		<>
			{type && value ? <li data-notification-type={type}></li> : null}
			{html ? (
				<li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>
			) : null}
		</>
	);
};

export default NotificationItem;
