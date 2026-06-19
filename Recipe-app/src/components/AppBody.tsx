import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import "../less/AppBody.less";
import NotFoundPage from "./NotFoundPage";

type dataResultProps = {
    title: string,
    ingredients: string,
    servings: string,
    instructions: string
}

/**The home page of the app, which displays 9 recipes and returns the home page.
 * 
 * @returns The home page of the app
 */
function AppBody(){

    let [data, setData] = useState<dataResultProps[]>([]);

    let options = {
        method: 'GET',
        headers: { 'x-api-key': '/i3xOQKpAzTCv9q/1uAmQA==pP9s0IepJTWQXFpX' }
      }
    
    let apiUrl = 'https://api.api-ninjas.com/v1/recipe?offset=0';

    useEffect(() => {
        fetch(apiUrl, options)
        .then(response => response.json())
        .then(json => {setData(json); console.log(json);})
      }, []);

    return (
    <>
       {sessionStorage.getItem("validLogin") == "true" && <Table striped bordered hover variant="dark" style={{marginTop: 100}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Food name</th>
          <th>Servings</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) =>(
            <tr key={d.title}>
                <td className="text">{i+1}</td>
                <td><Link  className="text" to={`/recipes/${d.title}`}>{d.title}</Link></td>
                <td className="text">{d.servings}</td>
            </tr>
        ))}
      </tbody>
    </Table>
    }
    {sessionStorage.getItem("validLogin") != "true" && <NotFoundPage/>}
    </>
);
}

export default AppBody;