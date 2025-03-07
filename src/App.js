import logo from './logo.svg';
import './App.css';
import './styles/style_index.css'
import './Chat';
import './ChatList';
import Chat from './Chat';
import ChatList from './ChatList';

function App() {
  return (
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
