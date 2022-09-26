import './App.scss';
import StudentsTable from "./components/StudentsTable/StudentsTable";
import { Students } from "./data/data";
import TableInfo from "./components/TableInfo/TableInfo";

function App() {
  return (
    <div className="app-wrapper">
      <h2>Students list</h2>
      <TableInfo />
      <StudentsTable students={Students} />
    </div>
  );
}

export default App;
