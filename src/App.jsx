import { useState } from "react";
import location from "./assets/location.svg";
import InputBox from "./InputBox";

import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setUrl(value);
  };

  const validateUrl = (url) => {
    const regEx =
      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    return regEx.test(url);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const isValid = validateUrl(url);
    if (isValid) {
      setMessage("Valid");
    } else {
      setMessage("Not Valid");
    }
    setIsValid(isValid);
  };

  return (
    <div className='app-container'>
      <form className='app-form' onSubmit={handleOnSubmit}>
        <div className='app-input-group'>
          <img className='app-img' src={location} alt='location' />
          <InputBox
            id='url'
            type='text'
            value={url}
            label='URL'
            onChange={handleOnChange}
          />
        </div>
        {message && (
          <p style={isValid ? { color: "#446A46" } : { color: "#990000" }}>
            {message}
          </p>
        )}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
