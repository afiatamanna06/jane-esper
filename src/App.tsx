import { useState } from "react";
import NavBar from "./components/navigation/NavBar";
import UseMediaQuery from "./hooks/useMediaQuery";

function App() {

  const [selectedPage, setSelectedPage] = useState("home")
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediaScreen = UseMediaQuery("(min-width: 1060px)")

  return (
    <div className="App bg-deep-blue">
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage} />
    </div>
  );
}

export default App;
