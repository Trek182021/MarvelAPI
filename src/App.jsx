import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import DataList from './components/DataList'
import Bar from './components/Bar'
import Statistic from './components/Statistic'
import Test from './components/GraphOne'
import Test2 from './components/GraphTwo'
import Details from './components/Details'

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
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/"
              element = {
                <>
              <Statistic/>
              <Bar filter={filterData}/>
              <div className="data-wrapper">
                {data && <DataList list={data} filterParams={params} key={count} /> }
                <div className="detailCharts">
                  {data && <Test list={data}/>}
                  {data && <Test2 list={data}/>}
                </div>
              </div>
              </>
            }/>
           <Route path="/:id" element={<Details/>}/>              
          </Routes>
          

        </BrowserRouter>
        </div>
    </div>  
  )
}

export default App
