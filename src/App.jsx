import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ForgetPassword, Login, Navbar, Signup } from "./components";
import { Home } from "./pages/Home";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forget-password" element={<ForgetPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
