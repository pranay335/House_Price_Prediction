from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

# Create app
app = FastAPI()

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:3000"] for React dev
    allow_methods=["*"],
    allow_headers=["*"]
)

# Load saved model
with open("models\house-price-model.pkl", "rb") as f:
    model = pickle.load(f)

# Define input data model
class InputData(BaseModel):
    area: float
    bedrooms: float
    age: float

# Prediction route
@app.post("/predict")
def predict(data: InputData):
    features = np.array([[data.area, data.bedrooms, data.age]])
    prediction = model.predict(features)
    return {"predicted_price": round(prediction[0], 2)}
