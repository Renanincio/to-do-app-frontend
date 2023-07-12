import { Menu } from "./components/menu";
import "./index.css";
import { CreateTask } from "./pages/create-tasks";
import { Tasks } from "./pages/tasks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UpdateTask } from "./pages/update-task";
import { Completed } from "./pages/completed";
import { Favorites } from "./pages/favorites";

function App() {
  return (
    <>
      <div className="PageContainer">
        <Router>
          <Menu />
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/create-task" element={<CreateTask />} />
            <Route path="/task/:id" element={<UpdateTask />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
