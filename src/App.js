
import './App.css';
import {Routes, Route} from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<RegistrationPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/user" element={<UserPage/>}/>
      </Routes>
  );
}

export default App;
