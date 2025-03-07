import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import App from "./App";
import Login from "./Login";

function Navigate() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/chat" element={<App />} />
            </Routes>
        </Router>
    );
}

export default Navigate;