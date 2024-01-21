import { BudgetProvider } from "./Components/BudgetContext";
import "./App.css";
import Landing from "./Components/Landing";

function App() {
  return (
    <BudgetProvider>
      <Landing />
    </BudgetProvider>
  );
}

export default App;