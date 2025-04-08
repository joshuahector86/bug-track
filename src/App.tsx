import { Route, Routes } from "react-router-dom";
import { CreateItem, Dashboard } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/create-item" element={<CreateItem />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
