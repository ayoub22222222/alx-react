import './Login.css';
import logo from '../assets/logo.jpg';


function Login() {
  return (
      <div className="App-body">
	  <p>Login to access the full dashboard</p>
	  <label for="email">Email: </label>
	  <input type="email" id="email" name="email" required/>
	  <label for="password"> Password: </label>
	  <input type="password"/>
	  <button>OK</button>
      </div>
  );
}

export default Login;
