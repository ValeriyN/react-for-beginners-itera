import './App.css';
import { Footer } from './Footer';

const user = {username: "Valerii"};

const App = () => (
  <div className="App">
    <h1>Hello world {user.username}</h1>
    <Footer copyright="C"/>
  </div>
)

export default App;
