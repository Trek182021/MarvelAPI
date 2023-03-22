import { useState } from "react"

export default function Bar({filter}) {
    const [filter1, setFilter1] = useState(["Name", "name"])
    const [filter2, setFilter2] = useState(["Choose Operator", "NULL"])
    const [filter3, setFilter3] = useState("")
    
    return(
        <div className="searchBar ">
            <div className="filterWrapper">
            <div className="searchBarTitle">Filter by:</div>
            
            <div className="dropdown">
                        <a className="one btn btn-warning dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            {filter1[0]}
                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button" value={"Name"} onClick={(e)=>setFilter1([e.target.value, "name"])}>Name</button>
                            <button className="dropdown-item" type="button" value={"Number of comics"} onClick={(e)=>setFilter1([e.target.value, "comics"])}>Number of comics</button>
                            <button className="dropdown-item" type="button" value={"Number of series"} onClick={(e)=>setFilter1([e.target.value, "series"])}>Number of series</button>
                        </div>
            </div>
            {filter1[1] != "name" ?
            <>
                <div className="dropdown ">
                    <a className="two btn btn-warning dropdown-toggle " href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                        {filter2[0]}
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button" value={"less than"} onClick={(e)=>setFilter2([e.target.value, "<"])}>less than</button>
                        <button className="dropdown-item" type="button" value={"greater than"} onClick={(e)=>setFilter2([e.target.value, ">"])}>greater than</button>
                        <button className="dropdown-item" type="button" value={"equal to"} onClick={(e)=>setFilter2([e.target.value, "=="])}>equal to</button>
                    </div>
                </div>
                <input type="text" aria-label="First name" className="customInput form-control" onChange={(e)=> setFilter3(e.target.value)}></input>
                

            </>
            : <input type="text" aria-label="First name" className="customInput form-control" onChange={(e)=> setFilter3(e.target.value)}></input>}
            </div>
            <button className="btn btn-success submitFilter" onClick={(e)=> filter([filter1[1], filter2[1], filter3])}>Apply Filter</button>

        </div>
    )
}