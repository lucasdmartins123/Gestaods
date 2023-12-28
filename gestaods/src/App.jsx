import { Route, Routes } from "react-router-dom";
import PatientsPage from "./pages/PatientsPage";
import DeletePatient from "./pages/DeletePatient";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PatientsPage />} />
        <Route path="/delete" element={<DeletePatient />} />
      </Routes>
    </>
  );
}

export default App;
