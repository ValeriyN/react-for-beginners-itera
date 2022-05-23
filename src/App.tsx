import './App.css';
import { Footer } from './Footer';

const user = {
  firstname: "Valerii",
  lastname: "Negriiko",
  biography: "Born 1978, kindergardern, school, university, work. Married, two children",
  address: {street: "Gradinskaya", house: 7, app: "13"},
  contacts: {email: "negriyko@gmail.com", mob: "+380674055264"}
};

const App = () => (
  <div className="App">
    <h1>Short info about {user.firstname} {user.lastname}</h1>
    <h2>Biography</h2>
    <p>{user.biography}</p>
    <h2>Contacts</h2>
    <p><b>address: </b>{user.address.street}, {user.address.house}, app. {user.address.app}</p>
    <p><b>e-mail: </b>{user.contacts.email}</p>
    <p><b>phone: </b>{user.contacts.mob}</p>
    <Footer copyright="C"/>
  </div>
)

export default App;
