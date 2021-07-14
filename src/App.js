import { useState, useEffect } from "react"
import ProgressBar from "./components/ProgressBar"


const App = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldValue) => {
        const newValue = oldValue + 10;

        if(newValue === 100) {
          clearInterval(interval)
        }
        return newValue;
      })
    }, 1000);
  }, [])
  return (
    <div>
      <ProgressBar value={progress} max={100} />
      
     
    </div>
  )
}

export default App

  
 
  
   
    
