import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { MainHeader } from "./cmps/MainHeader";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { StayDetails } from "./pages/StayDetails";
import { StayEdit } from "./pages/StayEdit";
import { StaysApp } from "./pages/StaysApp";
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <Router>
      <section className="app-root">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stay" element={<StaysApp />} />
          <Route path="/stay/:id" element={<StayDetails />} />
          <Route path="/stay/edit/" element={<StayEdit />} />
          <Route path="/stay/edit/:id" element={<StayEdit />} />
          <Route path="/counter-redux-exemple" element={<Counter />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
