import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";



export default function Login({ setToken }) {
  const history = useHistory();
  const [phoneNumber, setPhoneNumber] = useState();
  const [isValueTrue,setIsValueTrue] = useState(false)
  var  test = JSON.parse(localStorage.getItem(phoneNumber));
  console.log(test,'test.phoneNumber')
    const handleSubmit = (e) => {
  e.preventDefault();

  if(test?.phoneNumber === phoneNumber){
    history.push('./dashboard')
 } else {
     return setIsValueTrue(true) }
  };



  const submitHistory = () => {
    history.push("/register");
  };
  const SubmitEnd = ()=>{
  
  }
  console.log(phoneNumber, "phoneNumber");
  return (
    <div className="container-main-login">
      <div className="container-content-login">
        <form onSubmit={()=> SubmitEnd()}>
          <label>
            <p>
              {" "}
              <span className="star-main">*</span> نام و نام خانوادگی{" "}
            </p>

            <input
              className="input-main"
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          { isValueTrue ? <div className="col-12" style={{color:'red'}}>لطفا ثبت نام کنید</div> : null}
          <div className="btn-act-main">
            <button type="submit" className="btn-act" onClick={handleSubmit}>
              ورود{" "}
            </button>
            <button className="btn-act" onClick={submitHistory}>
              ثبت نام{" "}
            </button>
          </div>
        </form>
      </div>
     
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
