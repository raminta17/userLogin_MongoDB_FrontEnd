
import './App.css';
import {Routes, Route} from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import Nav from "./components/Nav";

function App() {
  return (
      <>
          <Nav/>
          <div className="page">
              <Routes>
                  <Route path="/" element={<RegistrationPage/>}/>
                  <Route path="/login" element={<LoginPage/>}/>
                  <Route path="/user" element={<UserPage/>}/>
              </Routes>
          </div>

      </>

  );
}

export default App;
