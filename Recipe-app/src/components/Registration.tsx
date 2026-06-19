import Header from "./Header";
import InputField from "./InputField";
import {useState} from "react";
import "../less/Login.less";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

/**Implements the registration page of the app
 * 
 * @returns The Registration component
 */
function Registration(){

    let [password, setPassword] = useState("");
    let [samePassword, setSamePassword] = useState("");
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [same, setSame] = useState(true);
    let [nameError, setNameError] = useState(false);
    let nav = useNavigate();

    const submit = (e:any) => {
        e.preventDefault();
        
        if (samePassword == password) {
          setSame(true);
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);

          if(name != ""){
            setNameError(false);
            localStorage.setItem("displayName", name);
            nav("/");
          }
          else{
            setNameError(true);
          }
        }
        else{
          setSame(false);
        }
      }

    return(
        <>
            <Header cimsor2="User Registration"/>
            
            <form onSubmit={submit}>
            {!nameError && <InputField inputValue= {name} labelString="Display name:" inputType="text" label= "Name" inputIcon= "Aa" inputName= "display_name" color="normal" onSetInput={(text: string) => setName(text)}/>}
            {nameError && <InputField inputValue= {name} labelString="Display name:" inputType="text" label= "Name" inputIcon= "Aa" inputName= "display_name" color="error" onSetInput={(text: string) => setName(text)}/>}
            {nameError && <p className="inputError">Display name is needed!</p>}
            <InputField inputValue= {email} labelString="Email address:" inputType="email" label= "Email" inputIcon= "@" inputName= "email_to" color="normal" onSetInput={(text: string) => setEmail(text)}/>
            <InputField inputValue= {password} labelString="Password:" inputType="password" label= "Password" inputIcon= "•" inputName= "password" color="normal" onSetInput={(text: string) => setPassword(text)}/>
            {same && <InputField inputValue= {samePassword} labelString="Same password:" inputType="password" label= "Same Password" inputIcon= "•" inputName= "samePassword" color="normal" onSetInput={(text: string) => setSamePassword(text)}/>}
            {!same && <InputField inputValue= {samePassword} labelString="Same password:" inputType="password" label= "Same Password" inputIcon= "•" inputName= "samePassword" color="error" onSetInput={(text: string) => setSamePassword(text)}/>}
            {!same && <p className="inputError">Passwords do not match!</p>}
            <button type="submit" className="submitBtn">Sign up</button>
            <Link className="link" to="/">Go back</Link>
            </form>
        </>
    );
}

export default Registration;