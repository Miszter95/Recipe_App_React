import appLogo from "/App-logo.png";
import "../less/Header.less";

interface HeaderProps {
    cimsor2: string
}

/**Header of the login, forgotten password and registration pages.
 * 
 * @param cimsor2 The text of the second heading 
 * @returns Tthe Header component
 */
function Header({cimsor2}: HeaderProps){
    return (
        <>
            <img src={appLogo} className="rounded" alt="App logo"/>
            <h1>Recipe App</h1>
            <h2>{cimsor2}</h2>
        </>
    );
}

export default Header;