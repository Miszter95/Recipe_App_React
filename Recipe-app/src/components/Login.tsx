import LoginInputField from "./InputField";
import Header from "./Header";
import {useState} from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import "../less/Login.less";

/**The login page of the app, which implements the login functions
 * 
 * @returns The Login component
 */
function Login() {

    let [password, setPassword] = useState(localStorage.getItem("switchChecked") == "true"? localStorage.getItem("password") || "": "");
    let [email, setEmail] = useState(localStorage.getItem("switchChecked") == "true"? localStorage.getItem("email") || "": "");
    let [emailError, setEmailError] = useState(false);
    let [passwordError, setPasswordlError] = useState(false);
    let [checked, setChecked] = useState(localStorage.getItem("switchChecked") == "true"? true : false);
    let nav = useNavigate();

    const submit = (e:any) => {
      e.preventDefault();

      if (checked) {
        localStorage.setItem("switchChecked", "true");
      }
      else{
        localStorage.setItem("switchChecked", "false");
      }
      
      if (email == localStorage.getItem("email")) {
        setEmailError(false);
        if (password == localStorage.getItem("password")) {
          setPasswordlError(false);
          sessionStorage.setItem("validLogin", "true");
          nav("/home");
        }
        else{
          setPasswordlError(true);
        }
      }
      else{
        setEmailError(true);
      }
    }

  return (
    <>
        <Header cimsor2="User Login"/>
        <form onSubmit={submit}>
        {!emailError && <LoginInputField inputValue= {email} labelString="Email address:" inputType="email" label= "Email" inputIcon= "@" inputName= "email_to" color="normal" onSetInput={(text: string) => setEmail(text)}/>}
        {emailError && <LoginInputField inputValue= {email} labelString="Email address:" inputType="email" label= "Email" inputIcon= "@" inputName= "email_to" color="error" onSetInput={(text: string) => setEmail(text)}/>}
        {emailError && <p className="inputError">Email do not match!</p>}
        {!passwordError && <LoginInputField inputValue= {password} labelString="Password:" inputType="password" label= "Password" inputIcon= "•" inputName= "password" color="normal" onSetInput={(text: string) => setPassword(text)}/>}
        {passwordError && <LoginInputField inputValue= {password} labelString="Password:" inputType="password" label= "Password" inputIcon= "•" inputName= "password" color="error" onSetInput={(text: string) => setPassword(text)}/>}
        {passwordError && <p className="inputError">Password do not match!</p>}
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Remember me"
          className="switch-check"
          checked = {checked}
          onChange= {() => setChecked(!checked)}
        />
        <button type="submit" className="submitBtn">Sign in</button>
        </form>

        <p>
          <Link className="link" to="/forgottenPassword">Forgot your password?</Link>
        </p>
        <p>
          <Link className="link" to="/registration">Don't have an account? Sign up now!</Link>
        </p>
      
    </>
  );
}

export default Login;
