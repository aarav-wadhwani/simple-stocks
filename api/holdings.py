from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import requests

app = FastAPI()

class Holding(BaseModel):
    ticker: str
    shares: float
    purchase_price: float

holdings: List[Holding] = []


def get_current_price(ticker: str) -> float:
    """Fetch current price from Yahoo Finance API. Returns 0.0 on failure."""
    try:
        url = f"https://query1.finance.yahoo.com/v7/finance/quote?symbols={ticker}"
        r = requests.get(url, timeout=5)
        quote = r.json()['quoteResponse']['result'][0]
        return quote['regularMarketPrice']
    except Exception:
        return 0.0

@app.get('/api/holdings')
async def list_holdings():
    return [h.dict() for h in holdings]

@app.post('/api/holdings')
async def add_holding(holding: Holding):
    holdings.append(holding)
    return {"status": "ok"}

@app.get('/api/summary')
async def summary():
    invested = sum(h.shares * h.purchase_price for h in holdings)
    current = 0.0
    for h in holdings:
        current += h.shares * get_current_price(h.ticker)
    profit = current - invested
    return {
        "invested": invested,
        "current": current,
        "profit": profit
    }
