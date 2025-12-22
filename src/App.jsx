import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Predicted_Price, getPrice] = useState(0)

  return (
    <>
    <form action="">
      <h1>HOUSE PRICE PREDICTION</h1>
      <div>
        <label >AREA</label>
       <input type="text" placeholder="Enter Area of Your House" />
       <br/>
       <label >BEDROOMS</label>
       <input type="text" placeholder="Enter No. of Bedrooms" />
       <br/>
       <label >AGE</label>
        <input type="text" placeholder="Enter Age Of House" />
      </div>
    
      <div className="card">
        <button onClick={() =>getPrice()}>
          Predicted Price is {Predicted_Price}
        </button>
      </div>
     
      </form>
    </>
  )
}

export default App
