import logo from '../assets/logo.jpg';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js'
import Login from '../Login/Login.js';
import React from 'react';
import Notifications from '../Notifications/Notifications';

function App() {
  return (
	  <React.Fragment>
	  	<Notifications />
	  	<div className="App">
	  		<Header />
	  		<Login />
	  		<Footer />
	  	</div>
	  </React.Fragment>
  );
}

export default App;
