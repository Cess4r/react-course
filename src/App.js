import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import TaskListComponent from './components/container/task_list';
import ContactList from './components/container/contactList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name={ "Cesar" }></Greeting> */}
        {/*TODO: <TaskListComponent></TaskListComponent> */}
        <ContactList ></ContactList>
      </header>
    </div>
  );
}

export default App;
