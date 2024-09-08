import './App.css';
import logo from './logo.jpg';
import {getFullYear} from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
	<h1>School dashboard</h1>
      </div>
      <div className="App-body">
	  <p>Login to access the full dashboard</p>
	  <label for="email">Email: </label>
	  <input type="email" id="email" name="email" required/>
	  <label for="password"> Password: </label>
	  <input type="password"/>
	  <button>OK</button>
      </div>
      <div className="App-footer">
	  <p>Copyright {getFullYear()} - holberton School</p>
      </div>
    </div>
  );
}

export default App;
