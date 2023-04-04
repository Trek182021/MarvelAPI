import { useState, useEffect } from "react";
import Character from "./Character";

export default function DataList({list, filterParams}) {
    const [data, setData] = useState(list)
    const [params, setParams] = useState(filterParams)

    const handleFilter = (() => {
        if (params[0] == "name") {
            console.log("NAME")
            return (
                data.filter( (_data) => _data.name.includes(params[2])).map( (dataa, index) => <Character key={index} dat={dataa}/>)
            )
        } else if (params[0] == "comics") {
            return (
                data.filter( (_data) => eval(_data.comics.available + params[1] + params[2] )).map( (dataa, index) => <Character key={index} dat={dataa}/>)
            )
        } else if (params[0] == "series") {
            return (
                data.filter( (_data) => eval(_data.series.available + params[1] + params[2] )).map( (dataa, index) => <Character key={index} dat={dataa}/>)
            )
        }
    })
    

    return(
        <div className="dataList">
            <table className="table table-striped table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Date Modified</th>
                        <th scope="col">Name</th>
                        <th scope="col">Number of Comics </th>
                        <th scope="col">Number of Series</th>
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody className="thead-light">
                    {/* { data.map( (dataa, index) => <Character key={index} dat={dataa}/> ) } */}
                    {/* { params != "NULL" ? data.filter( (_data) => _data.name.includes(params[2])).map( (dataa, index) => <Character key={index} dat={dataa}/>)
                    :  data.map( (dataa, index) => <Character key={index} dat={dataa}/> ) } 
                    {handleFilter()} */}
                    { params != "NULL" ? handleFilter()
                    :  data.map( (dataa, index) => <Character key={index} dat={dataa}/> ) } 
                </tbody>
            </table>
        </div>
    )
}