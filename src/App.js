import './App.scss';
import StudentsTable from "./components/StudentsTable/StudentsTable";
import { Students } from "./data/data";

function App() {
  return (
    <div className="app-wrapper">
        <StudentsTable students={Students} />
    </div>
  );
}

export default App;
