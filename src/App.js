import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import CusLogin from "./components/CusLogin";
import SelLogin from "./components/SelLogin";
import Login from "./pages/Login";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col items-center bg-primary">
      <Header />
      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4  w-full">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="login" element={<Login/>} />
          <Route path="/cuslogin" element={<CusLogin/>} />
          <Route path="/sellogin" element={<SelLogin/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
