import logo from './logo.svg';
import './App.css';
import './styles/style_index.css'
import './Chat';
import './ChatList';
import Chat from './Chat';
import ChatList from './ChatList';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div class="container">
      <div class="row clearfix">
        <div class="col-lg-12">
          <div class="card chat-app">
            <ChatList/>
            <Chat/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
