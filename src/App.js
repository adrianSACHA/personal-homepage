import logo from './logo.svg';
import './App.css';
import Header from './App/Header';

function App() {
  return (
    <div className="App">
      <Header title={"Adrian"} />
    
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Learn React
      
    </div>
  );
}

export default App;
