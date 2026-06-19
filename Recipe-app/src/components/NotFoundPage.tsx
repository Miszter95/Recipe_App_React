import notFound from "/notFound.png";
import { Link } from "react-router-dom";
import "../less/NotFoundPage.less";

/**Implements an error page if the app encounters any problem loading the page
 * 
 * @returns The NotFoundPage component
 */
function NotFoundPage(){

    return (
        <>
            <img src={notFound} className="notFound rounded" alt="App logo"/>
            <div>
                <Link to="/">Go to login</Link>
            </div>
        </>
    );
}

export default NotFoundPage;