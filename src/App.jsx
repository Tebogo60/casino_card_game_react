import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
    return (
        <Routes>
            <Route path="/"></Route>
            <Route path="/home"></Route>
            <Route path="/login"></Route>
            <Route path="/register"></Route>
            <Route path="/forgot-password"></Route>
            <Route path="/reset-password"></Route>
        </Routes>
    );
}

export default App;
