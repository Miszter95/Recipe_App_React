import LoginInputField from "./InputField";
import Header from "./Header";
import "../less/ForgotPassword.less";
import emailjs from "@emailjs/browser";
import {useState} from "react";
import { Link } from "react-router-dom";

/**The forgotten password page of the app, which sends the user's password by email.
 * 
 * @returns The ForgotPassword component
 */
function ForgotPassword(){

    let [email, setEmail] = useState("");
    
    var emailTemplateParams = {
        eamil_to: email,
        display_name: localStorage.getItem("displayName"),
        message: localStorage.getItem("password")
      };
    
    const sendEmail = (e: any) => {
        e.preventDefault();
    
        if(email == localStorage.getItem("email")){
            
            emailjs.send("service_h3xiff2", "template_3yehveg", emailTemplateParams, "OymlmgipKwWaBTME8").then(
                () => {
                    alert("Email sent successfully!");
                },
                (error) => {
                    alert("Email sending failed because of this problem:\n" + error.text);
                }
            );
        } else{
            alert("This email address doesn't exist!");
        }
      };

    return(
        <>
            <Header cimsor2="Forgotten Password"/>
            <form onSubmit={sendEmail}>
                <LoginInputField inputValue= {email} labelString="Email address:" inputType="email" label= "Email" inputIcon= "@" inputName= "email_to" color="normal" onSetInput={(text: string) => setEmail(text)}/>
                <button type="submit" className="submitBtn">Send Email</button>
                <Link className="link" to="/">Go back</Link>
            </form>
        </>
    );
}

export default ForgotPassword;