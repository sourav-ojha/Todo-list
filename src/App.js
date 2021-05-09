import './App.css';
import List from './List'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.PUBLIC_URL}/logo/logo.png`} className="App-logo" alt="logo" />
        <h2>ToDo List</h2>
      </header>
        <List />
    </div>
  );
}

export default App;
