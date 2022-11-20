import { useState } from "react";
import NavBar from "./components/navigation/NavBar";
import UseMediaQuery from "./hooks/useMediaQuery";

function App() {

  const [selectedPage, setSelectedPage] = useState("home")
  const isAboveMediaScreen = UseMediaQuery("(min-width: 1060px)")

  return (
    <div className="App bg-deep-blue">
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
