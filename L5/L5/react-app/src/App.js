import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

            {/* <div>
             <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
             <button onClick={this.handelerIncrement} className="btn btn-secondary btn-sm">Increacment</button>
             <div className="container">
             <div className="row">
                 {this.renderTags()}
             </div>
             </div>           
             </div>  */