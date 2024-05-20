
from fastapi import FastAPI

app = FastAPI()

@app.get("/add")
async def add(num1: float, num2: float):
  """
  Add two numbers
  """
  return {"result": num1 + num2}

@app.get("/subtract")
async def subtract(num1: float, num2: float):
  """
  Subtract two numbers
  """
  return {"result": num1 - num2}

@app.get("/multiply")
async def multiply(num1: float, num2: float):
  """
  Multiply two numbers
  """
  return {"result": num1 * num2}

@app.get("/divide")
async def divide(num1: float, num2: float):
  """
  Divide two numbers (handles division by zero)
  """
  if num2 == 0:
    return {"error": "Division by zero"}
  return {"result": num1 / num2}
