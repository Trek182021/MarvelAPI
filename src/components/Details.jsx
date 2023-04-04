import { useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_API_KEY
const HASH_KEY = import.meta.env.VITE_HASH_KEY

export default function Details() {
    const [list , setList] = useState([]);
    let params = useParams();


    useEffect( () => {
        const fetchAllData = async () => {
          let query = `http://gateway.marvel.com/v1/public/characters/${params.id}?ts=1&apikey=`
          const response = await fetch(
            query + API_KEY + "&hash=" + HASH_KEY
          );
          const json = await response.json();
      
          setList(json.data.results);
        };
      
        fetchAllData().catch(console.error)
        }, [])


    return(
        <div className="detail-wrapper">
            
            { list[0] &&
            <>
                <h1>{list[0].name} 🦸</h1>
                <img src={`${list[0].thumbnail.path}/portrait_xlarge.jpg`}/>
                <h3>Date Modified: {list[0].modified.slice(0,10)}</h3>
                
                <h3>Number of Comics: {list[0].comics.available}</h3>
                <h3>Number of Series: {list[0].series.available}</h3>
                {list[0].description && <h3> Description: <p>{list[0].description}</p></h3>}
            </>
            }
            <Link to="/"><button className="btn btn-success"> Back </button></Link>
        </div>
    )
}