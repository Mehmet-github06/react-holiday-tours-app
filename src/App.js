import "./App.css";
import Loading from "./Loading"
import Tours from "./Tours"
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
    setloading(false);
    console.log(error)
  }
}
useEffect(()=>{
  fecthTours()
},[])

if(loading){
  return(
    <Loading/>
  )

}

  return (
    <div className="App">
    <Tours/>
    </div>
  );
}

export default App;
