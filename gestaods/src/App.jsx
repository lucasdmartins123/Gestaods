import { Route, Routes } from "react-router-dom";
import PatientsPage from "./pages/PatientsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PatientsPage />} />
      </Routes>
    </>
  );
}

export default App;
