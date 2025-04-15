import { Route, Routes } from "react-router-dom";
import { CreateItem, Dashboard, Settings } from "./pages";
import IndividualTask from "./pages/individual-task/individual-task";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/create-item" element={<CreateItem />} />
      <Route path="/settings" element={<Settings />} />
      <Route path={`/task/:id`} element={<IndividualTask />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
