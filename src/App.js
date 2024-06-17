import React, { useEffect, useState } from 'react';
import Products from './Products';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "dcdfa370";
  const YOUR_APP_KEY = "84f78e5fa999f216898448388ff41009";

  useEffect( (submitHandler) =>{
    submitHandler = ""
} )
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=15&calories=591-722&health=alcohol-free`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.hits);
        setSearch('');
      })
      .catch((error) => console.error('Error fetching the recipes:', error));
  }

  return (
    <div className="blurred-background">
      <div className="content">
        <h2 style={{
          fontFamily: '"Merienda", cursive',
          fontOpticalSizing: 'auto', fontWeight: '<weight>',
          fontSize: "40px",
          color: "rgb(11, 12, 82)",
        }}> Food Recipes</h2>
        <br />
        <form onSubmit={submitHandler}>
          <input className='forms'
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for recipes..."
            style={{
              padding: '10px', width: '400px', borderRadius: '5px', border: 'none',
              borderStyle: 'none', fontFamily: 'monospace'
            }}
          />
          <br />
          <input type="submit" className="btn btn-primary" value="Search" style={{ marginTop: '20px', marginBottom: '20px' }} />
        </form>
        {data.length >= 1 ? <Products data={data} /> : null}
      </div>
    </div>
  );
}

export default App;
