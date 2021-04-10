import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// Async validation function

var phoneRegExp = new RegExp("^(\\+98|0)?9\\d{9}$");

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [userNmame, setUserName] = useState();
  const [idUserUnic , setIdUserUnic] = useState(0)
  const [isValueTrue,setIsValueTrue] = useState(false)
  const [inputValidation,setInputValidation] = useState({})
  const [isValid , setIsValid] = useState(true)
  const [errorValidation , setErrorValidation] = useState('')

const handleChangeInput = (e)=>{
  setInputValidation([e.target.name] = e.target.value);
  setPhoneNumber(e.target.value)
}
  const users = {
    userNmame: userNmame,
    phoneNumber: phoneNumber,
    id : idUserUnic 
  };
  console.log(idUserUnic,'idUserUnic')
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
  
   
   
    const localset = localStorage.setItem(phoneNumber, JSON.stringify(users));
    setIdUserUnic(idUserUnic + 1)
    if(userNmame &&phoneNumber){
      history.push("/dashboard");
   } else {
       return setIsValueTrue(true) }
    };
    

  const submitHistory = () => {
    history.push("/login");
  };
  if(typeof inputValidation["phoneNumber"] !== 'undefined'){
    alert('test')
  }
  return (
    <div className="container-main-login">
      <div className="container-content-login">
        <form onSubmit={handleSubmit}>
          <label>
            <p>
              {" "}
              <span className="star-main">*</span> شماره همراه{" "}
            </p>

            <input
            name="phoneNumber"
              className="input-main"
              onChange={handleChangeInput}
              type="text"
            
            />
          </label>
          {errorValidation}
        
          <label>
            <p>
              {" "}
              <span className="star-main">*</span> نام و نام خانوادگی{" "}
            </p>

            <input
              className="input-main"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>

          <div className="btn-act-main">
            <button type="submit" className="btn-act">
              ثبت نام{" "}
            </button>
            <button type="button" className="btn-act" onClick={submitHistory}>
              ورود{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
