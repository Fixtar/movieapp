import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Test" element={<h1> Test</h1>} />
                <Route path="/movie/:id" element={<Detail />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;