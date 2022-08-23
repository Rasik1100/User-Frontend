import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import Token from './components/Token';
function App() {
  console.log('JWT token is availabel in localstorage');
  console.log(`localStorage.getItem('token')`);
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='signUp' element={<SignUp></SignUp>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="token" element={<Token></Token>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
