import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import TestComponent from "./TestComponent";
import NavLinks from "./shared/components/Navigation/NavLinks";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavLinks />
      <div className="App">
        <TestComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
