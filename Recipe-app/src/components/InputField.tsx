import "../less/InputField.less";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useId } from "react";

interface LoginInputFieldProps {
  inputValue: string;
  labelString: string;
  inputType: string;
  label: string;
  inputIcon: string;
  inputName: string;
  color: string;
  onSetInput: (text: string) => void;
}

/**Implements all input fields of the app.
 * 
 * @param inputValue  The value of the input field
 * @param labelString  The label' text of the input field
 * @param inputType  The type of the input field
 * @param label  The placeholder of the input field
 * @param inputIcon  The icon of the input field
 * @param color  The error of the input field
 * @param inputName  The name's value of the input field
 * @param onSetInput  The function that returns the value of the input field
 * @returns 
 */
function LoginInputField({
  inputValue,
  labelString,
  inputType,
  label,
  inputIcon,
  color,
  inputName,
  onSetInput,
}: LoginInputFieldProps) {
  let uID = useId();

  return (
    <>
      <label className="label" htmlFor={uID}>
        {labelString}
      </label>

      <div className="containerDiv">
        <InputGroup className="input-group mb-3">
          <InputGroup.Text id="basic-addon1">{inputIcon}</InputGroup.Text>
          <Form.Control
            className={`form-control ${color}`}
            placeholder={label}
            aria-label={label}
            aria-describedby="basic-addon1"
            type={inputType}
            onInput={(t) => onSetInput(t.currentTarget.value)}
            value={inputValue}
            id={uID}
            name={inputName}
          />
        </InputGroup>
      </div>
    </>
  );
}

export default LoginInputField;
