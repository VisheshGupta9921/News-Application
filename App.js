import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import New from './components/New';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
   <>
   <Router>
   <Nav/>
   <Routes>
          <Route exact path="/General" element={<New key="General" country="in" category="General" />}>
          </Route>
          <Route exact path="/Tech" element={<New key="technology"country="in" category="Technology" />}>
          </Route>
          <Route exact path="/Science" element={<New key="Science"country="in" category="Science" />}>
          </Route>
          <Route exact path="/Sports" element={<New key="Sports"country="in" category="Sports" />}>
          </Route>
          <Route exact path="/Health" element={<New key="Heatlh" country="in" category="Health" />}>
          </Route>
          <Route exact path="/Business" element={<New key="Business" country="in" category="Business" />}>
          </Route>
         
           
          </Routes>
   
   </Router>
   </>
  
  );
}

export default App;
