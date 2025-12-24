import { useState } from "react";
import "./App.css";

function App() {
  const [area, setArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [age, setAge] = useState("");
  const [predictedPrice, setPredictedPrice] = useState(null);

  const handlePredict = async (e) => {
    e.preventDefault(); // prevent page reload

    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        area: Number(area),
        bedrooms: Number(bedrooms),
        age: Number(age),
      }),
    });

    const data = await response.json();
    setPredictedPrice(data.predicted_price);
  };

  return (
    <>
      <h1>HOUSE--P PREDICTION</h1>

      <form onSubmit={handlePredict}>
        <label>AREA</label>
        <input
          type="number"
          placeholder="Enter Area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />

        <br />

        <label>BEDROOMS</label>
        <input
          type="number"
          placeholder="Enter Bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        />

        <br />

        <label>AGE</label>
        <input
          type="number"
          placeholder="Enter House Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <br />

        <button type="submit">Predict Price</button>
      </form>

      {predictedPrice !== null && (
        <h2>Predicted Price: ₹ {predictedPrice}</h2>
      )}
    </>
  );
}

export default App;
