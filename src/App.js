import "./App.css";
import loading from "./loading"
import tours from "./tours"
import React , {useState,useEffect} from "react";

const url = "http://course-api.com/react-tours-project"


function App() {
  const [loading,setloading] = useState(true)
  const [tours,settours] = useState([])

const fecthTours =async()=>{
  setloading(true)
  try {
    const response = await fetch(url);
    const tours =await response.json();
    setloading(false)
    settours(tours)
  } catch (error) {
    
  }
}

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
