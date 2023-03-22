import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataList from './components/DataList'
import Bar from './components/Bar'
import Statistic from './components/Statistic'

const API_KEY = import.meta.env.VITE_API_KEY
const HASH_KEY = import.meta.env.VITE_HASH_KEY

function App() {
  const [data, setData] = useState()
  const [params, setParams] = useState("NULL")
  const [count, setCount] = useState(0)

  useEffect( () => {
    

  const fetchAllData = async () => {
    let query = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey="
    const response = await fetch(
      query + API_KEY + "&hash=" + HASH_KEY
    );
    const json = await response.json();
    setData(json.data.results);
  };

  fetchAllData().catch(console.error)
  }, [])

  const filterData = (param) => {
    setParams(param)
    setCount(count + 1)
  }

  return (
    <div className="App">

        <Statistic/>
        <Bar filter={filterData}/>
        {data && <DataList list={data} filterParams={params} key={count} /> }


    </div>  
  )
}

export default App
