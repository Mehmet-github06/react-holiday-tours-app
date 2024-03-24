import "./App.css";
import Loading from "./Loading";
import Tours from "./Tours";
import React, { useState, useEffect } from "react";

const url = "http://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fecthTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fecthTours();
  }, []);

  if (loading) {
    return <Loading />;
  }
if (tours.length === 0) {
  return (
    <main>
      <div className="refresh-title">  
       <h2>no tours left</h2>
       <button onClick={()=>fecthTours()}>refresh</button>
      </div>
    </main>
  )
}
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
