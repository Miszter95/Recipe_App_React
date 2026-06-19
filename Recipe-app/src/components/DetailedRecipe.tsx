import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

type dataResultProps = {
  title: string;
  ingredients: string;
  servings: string;
  instructions: string;
};

/**Implements the display of detailed recipe data.
 * 
 * @returns The DetailedRecipe component
 */
function DetailedRecipe() {
  let [data, setData] = useState<dataResultProps[]>([]);
  const { recipeKey } = useParams<{ recipeKey: string }>();
  const apiUrl = "https://api.api-ninjas.com/v1/recipe?query=" + recipeKey;

  let options = {
    method: "GET",
    headers: { "x-api-key": "/i3xOQKpAzTCv9q/1uAmQA==pP9s0IepJTWQXFpX" },
  };

  useEffect(() => {
    fetch(apiUrl, options)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);

  return (
    <>
      {sessionStorage.getItem("validLogin") == "true" && (
        <Table striped bordered hover variant="dark" style={{ marginTop: 100 }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Food name</th>
              <th>Ingredients</th>
              <th>Servings</th>
              <th>Instructions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={d.title}>
                <td className="text">{i + 1}</td>
                <td className="text">{d.title}</td>
                <td className="text">
                  {d.ingredients.split(/[|;]/).map((splitData) => (
                    <p>• {splitData}</p>
                  ))}
                </td>
                <td className="text">{d.servings}</td>
                <td className="text">{d.instructions}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        
      )}
      {sessionStorage.getItem("validLogin") == "true" && <Link className="link" to={"/home"}>Go back</Link>}
      {sessionStorage.getItem("validLogin") != "true" && <NotFoundPage/>}
    </>
  );
}

export default DetailedRecipe;
