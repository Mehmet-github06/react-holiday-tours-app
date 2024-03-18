import "./App.css";
import loading from "./loading"
import tours from "./tours"
import React , {useState,useEffect} from "react";

const url = "http://course-api.com/react-tours-project"


function App() {
  const [loading,setloading] = useState(true)
  const [tours,settours] = useState(true)
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
