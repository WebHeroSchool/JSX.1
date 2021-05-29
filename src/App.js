import logo from './logo.svg';
import './App.css';

const number = 22;
const far = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color:'red'
        }}>
          Hello World!
        </p>
        <p>
        {number}
        </p>
        <p>
        {10}
        </p>
        <p>
        {10+10}
        </p>
        <p>
        {far && 'far is true'}
        </p>
        <p>
        {far ? 'far is true' : 'far is false'}
        </p>
         <p>
          {null}
          {undefined}
          {true}
          {false}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
