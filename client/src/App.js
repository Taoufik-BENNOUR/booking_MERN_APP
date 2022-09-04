import { Routes , Route} from "react-router-dom"
import './App.css';
import Hotel from "./hotel/Hotel";
import List from "./list/List";
import Home from "./pages/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
        <Routes>
           <Route path="/"  element={<Home />} />
           <Route path="/hotels"  element={<List />} />
           <Route path="/hotel/:id"  element={<Hotel />} />
           <Route path="/login"  element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
