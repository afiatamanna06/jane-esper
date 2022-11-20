import { useState } from "react";
import UseMediaQuery from "./hooks/useMediaQuery";

function App() {

  const [selectedPage, setSelectedPage] = useState("home")
  const isAboveMediaScreen = UseMediaQuery("(min-width: 1060px)")

  return (
    <div className="App bg-deep-blue">
      
    </div>
  );
}

export default App;
