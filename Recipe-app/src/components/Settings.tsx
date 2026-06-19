import {useState} from "react";
import LoginInputField from "./InputField";
import NotFoundPage from "./NotFoundPage";

/**Implements the settings of the user
 * 
 * @returns The Settings component
 */
function Settings(){

    let [email, setEmail] = useState(localStorage.getItem("email") || "");
    let [newPassword, setNewPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [name, setName] = useState(localStorage.getItem("displayName") || "");
    let [confirmError, setConfirmError] = useState(false);

    const submit = (e:any) => {
        e.preventDefault();
        
        if (confirmPassword == localStorage.getItem("password")) {
            setConfirmError(false);
            localStorage.setItem("password", newPassword);
            localStorage.setItem("email", email);
            localStorage.setItem("displayName", name);
            setConfirmPassword("");
            setNewPassword("");
            window.location.reload();
        }
        else{
            setConfirmError(true);
        }
      }

    return(
        <>
        {sessionStorage.getItem("validLogin") == "true" && <div className="container" style={{marginTop: 100}}>
             <form onSubmit={submit}>
            <h1 className="title">User Settings</h1>
            <LoginInputField inputValue= {name} labelString="Display name:" inputType="text" label= "Name" inputIcon= "@" inputName= "display_name" color="normal" onSetInput={(text: string) => setName(text)}/>
            <LoginInputField inputValue= {email} labelString="Email address:" inputType="email" label= "Email" inputIcon= "@" inputName= "email_to" color="normal" onSetInput={(text: string) => setEmail(text)}/>
            {!confirmError && <LoginInputField inputValue= {confirmPassword} labelString="Confirm Password:" inputType="password" label= "Confirm Password" inputIcon= "@" inputName= "password" color="normal" onSetInput={(text: string) => setConfirmPassword(text)}/>}
            {confirmError && <LoginInputField inputValue= {confirmPassword} labelString="Confirm Password:" inputType="password" label= "Confirm Password" inputIcon= "@" inputName= "password" color="error" onSetInput={(text: string) => setConfirmPassword(text)}/>}
            {confirmError && <p className="inputError">Password do not match!</p>}
            <LoginInputField inputValue= {newPassword} labelString="New Password:" inputType="newPassword" label= "New Password" inputIcon= "@" inputName= "newpassword" color="normal" onSetInput={(text: string) => setNewPassword(text)}/>
            <button type="submit" className="submitBtn">Save</button>
            </form>
        </div>}
        {sessionStorage.getItem("validLogin") != "true" && <NotFoundPage/>}
        </>
    );
}

export default Settings;