import "./App.css";
import Index from "./layouts/Index";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Index />
      </div>
    </BrowserRouter>
  );
}

export default App;
