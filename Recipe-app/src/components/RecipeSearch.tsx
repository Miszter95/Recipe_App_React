import { useState } from "react";
import { Button} from "react-bootstrap";
import "../less/RecipeSearch.less";
import InputField from "./InputField";
import NotFoundPage from "./NotFoundPage";
import DetailedRecipe from "./DetailedRecipe";
import { useNavigate } from "react-router-dom";

/**Returns the RecipeSearch component where the user can search a recipe
 * 
 * @returns The RecipeSearch component
 */

function RecipeSearch() {

  let nav = useNavigate();
  let [searchParam, setSearchParam] = useState("");

  const submit = (e: any) => {
    e.preventDefault();

    if (searchParam != "") {
        nav(`/recipes/${searchParam}`);
    }
  };

  return (
    <>
      {sessionStorage.getItem("validLogin") == "true" && (
        <div className="container" style={{ marginTop: 100 }}>
          <h1 className="title">Recipe Search</h1>
          <form onSubmit={submit}>
            <div>
              <InputField
                inputValue={searchParam}
                labelString=""
                inputType="search"
                label="Search"
                inputIcon="🔎︎"
                inputName="search_name"
                color="normal"
                onSetInput={(text: string) => setSearchParam(text)}
              />
            </div>
            <Button type="submit" className="searchBtn">
              Search
            </Button>
          </form>

          {searchParam != "" && (
            <DetailedRecipe/>
          )}
        </div>
      )}
      {sessionStorage.getItem("validLogin") != "true" && <NotFoundPage/>}
    </>
  );
}

export default RecipeSearch;
