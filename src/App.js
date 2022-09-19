import './App.css';

import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h1>My To Do's</h1>
      <Todo title="Learn React"/>
      <Todo title="Master React"/>
      <Todo title="Create own site"/>
    </div>
  );
}

export default App;
