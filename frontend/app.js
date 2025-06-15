const apiBase = '/api';

function App() {
  const [holdings, setHoldings] = React.useState([]);
  const [ticker, setTicker] = React.useState('');
  const [shares, setShares] = React.useState('');
  const [price, setPrice] = React.useState('');

  React.useEffect(() => {
    fetchHoldings();
  }, []);

  const fetchHoldings = async () => {
    const res = await fetch(`${apiBase}/holdings`);
    const data = await res.json();
    setHoldings(data);
  };

  const addHolding = async () => {
    const payload = {
      ticker,
      shares: parseFloat(shares),
      purchase_price: parseFloat(price)
    };
    await fetch(`${apiBase}/holdings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    setTicker('');
    setShares('');
    setPrice('');
    fetchHoldings();
  };

  return (
    <div>
      <header>
        <h1>ClearTrack</h1>
      </header>
      <div className="container">
        <div>
          <input placeholder="Ticker" value={ticker} onChange={e => setTicker(e.target.value)} />
          <input placeholder="Shares" value={shares} onChange={e => setShares(e.target.value)} type="number" />
          <input placeholder="Purchase Price" value={price} onChange={e => setPrice(e.target.value)} type="number" />
          <button onClick={addHolding}>Add Holding</button>
        </div>
        <div>
          {holdings.map((h, i) => (
            <div key={i} className="holding">
              {h.ticker} - {h.shares} @ ${h.purchase_price}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
