export default function Character({dat}) {
    return(
        <tr>
            {/* <th scope="row">{dat.modified.slice(0,10)}</th> */}
            <td>{dat.modified.slice(0,10)}</td>
              <td>{dat.name}</td>
              <td>{dat.comics.available}</td>
              <td>{dat.series.available}</td>
        </tr>
    )
}