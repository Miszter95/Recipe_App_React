import Login from "./Login";
import "../less/App.less";
import ForgotPassword from "./ForgotPassword";
import AppBody from "./AppBody";
import Registration from "./Registration";
import NavBar from "./NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import Settings from "./Settings";
import RecipeSearch from "./RecipeSearch";
import DetailedRecipe from "./DetailedRecipe";

/**The function that implements routing and returns the App main body.
 * 
 * @returns The App main body
 */
function App() {

  const urlRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <NotFoundPage />,
    },

    {
      path: "/forgottenPassword",
      element: <ForgotPassword />,
    },

    {
      path: "/registration",
      element: <Registration />,
    },

    {
      path: "/home",
      element: (
        <>
          <NavBar />
          <AppBody />
        </>
      ),
    },

    {
      path:"/recipes/:recipeKey",
      element: (<>
        <NavBar />
        <DetailedRecipe />
      </> )

    },

    {
      path: "/settings",

      element: (
        <>
          <NavBar />
          <Settings />
        </>
      ),
    },

    {
      path: "/recipeSearch",

      element: (
        <>
          <NavBar />
          <RecipeSearch />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={urlRouter} />
    </div>
  );
}

export default App;
