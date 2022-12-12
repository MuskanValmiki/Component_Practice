import {Link,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './component/home';
import Contact from './component/contact';
import Discription from './component/discription';

function App() {
  return (
    <div className="App">
      <Link to="/Home">Home Page</Link><br></br>
      <Link to="/Contact">Contact Page</Link><br></br>
      <Link to="/Discription">Discription Page</Link><br></br>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="Discription" element={<Discription/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
