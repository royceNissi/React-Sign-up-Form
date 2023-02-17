import { useState } from "react";
import Display from "./Display";
import Name from "./Name";
import Recommend from './Recommendations';
import Profession from './Proffession';
import Improve from "./Improvements";
import Email from "./Email";
import Password from "./Password";
import ConfirmPassword from "./ConfirmPassword";
import Phone from "./Phone";

export default function Form(){
  const [error,setError] = useState({});
  const [count,setCount] =useState(false);
  const[data,setData]= useState({});
  const[improve,setImp]= useState([]);
  const handleCount = () => {
    setCount(false)
  }  
  const submit =(e)=>{
    let dataArray = Object.keys(data);
    if(dataArray.length>6){
      setCount(true);
      e.preventDefault();
    }
    else{
      setCount(false);
      e.preventDefault();
    }
  }
  const professionChange = (e)=>{
    e.target.value === ""?delete data.profession:setData({...data,[e.target.name]
      :e.target.value})
  }
  const recommendChange =(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const improveChange =(e)=>{
    if(e.target.checked && improve.indexOf(e.target.value)===-1){
      setImp([...improve,e.target.value]);
    }
    else if(!e.target.checked){
      improve.splice(improve.indexOf(e.target.value),1);
    }
  }
  const nameChange = (e)=>{
    if(e.target.value === ''){
      e.target.className = 'input';
      delete data.name;
      delete error.nameError;
      setError({...error,blankName:'blank-name'});
    }
    else if(!e.target.value.match(/^[A-Za-z][A-Za-z ]{2,30}$/)){
      e.target.className = 'invalid';
      delete data.name;
      setError({...error,nameError:'name-error'});
    }
    else{
      delete error.nameError;
      delete error.blankName;
      e.target.className = 'valid';
      setData({
        ...data,
        [e.target.name]:e.target.value
      })
    }
  }
  const emailChange = (e)=>{
    if(e.target.value === ''){
      e.target.className = 'input';
      delete data.email;
      delete error.emailError;
      setError({...error,blankEmail:'blank-email'});
    }
    else if(!e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      e.target.className = 'invalid';
      delete data.email;
      setError({...error,emailError:'email-error'});
    }
    else{
      delete error.emailError;
      delete error.blankEmail;
      e.target.className = 'valid';
      setData({
        ...data,
        [e.target.name]:e.target.value
      })
    }
  }
  const passwordChange = (e)=>{
    if(e.target.value.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/g)){
      delete error.passwordError;
      delete error.blankPass;
      e.target.className = 'valid';
      setData({
        ...data,
        [e.target.name]:e.target.value
      })
    }
    else if(e.target.value === ''){
      e.target.className = 'input';
      delete data.password;
      delete error.passwordError;
      setError({...error,blankPass:'pass-blank'})
    }
    else{
      delete data.password;
      e.target.className = 'invalid';
      setError({...error,passwordError:'pass-error'})
    }
  }

  const confirmChange = (e) =>{
    if(data.password === e.target.value){
      delete error.confirmError;
      delete error.blankConfirm;
      setData({
        ...data,
        [e.target.name]:e.target.value
      })
      e.target.className = 'valid';
    }
    else if(e.target.value === ''){
      e.target.className = 'input'
      delete data.confirmPassword;
      delete error.confirmError;
      setError({...error,blankConfirm:'cnf-blank'});
    }
    else{
      delete data.confirmPassword;
      e.target.className = 'invalid';
      setError({...error,confirmError:'cnf-error'});
    }
  }
  const phoneChange = (e) =>{
    if(e.target.value === ''){
      e.target.className = 'input';
      delete data.phone;
      delete error.phoneError;
      setError({...error,blankPhone:'blank-phone'})
    }
    else if (!e.target.value.match(/^\d{10}$/)){
      delete data.phone;
      e.target.className = 'invalid';
      setError({...error,phoneError:'phone'})
    }
    else{
      delete error.phoneError;
      delete error.blankPhone;
      e.target.className = 'valid';
      setData({
        ...data,
        [e.target.name]:e.target.value
      })
    }
  }

  return(
    <>
      <h3 className="signup-form__heading">Sign Up</h3>
      <div className="signup-form-container">
        <div className="signup-form" id="form">
          <Name nameChange={nameChange}/>
          {
          error.hasOwnProperty('nameError')?<span className="error">Enter valid name</span>
          :error.hasOwnProperty('blankName')?<span className="error">Name can't be blank</span>
          :<span className="no-error">nothing</span>}
          <Email emailChange={emailChange}/>
          {
            error.hasOwnProperty('emailError')?<span id="email-error" className="error">
              Enter valid Email
            </span>
            :error.hasOwnProperty('blankEmail')?<span className="error">Email can't be blank</span>
            :<span className="no-error">nothing</span>
          }
          <Password passwordChange={passwordChange}/>
          {
            error.hasOwnProperty('passwordError')?<span id="password-error" className="error">minimun 6 characters with 1 Upper Case letter,1 lower case letter, 1 number, 1 special character
            </span>
            :error.hasOwnProperty('blankPass')?<span className="error">Password can't be blank</span>
            :<span className="no-error">nothing</span>
          }
          <ConfirmPassword confirmChange={confirmChange}/>
          {
            error.hasOwnProperty('confirmError')?<span id="confirm-password-error" className="error">Must be same as Password
            </span>
            :error.hasOwnProperty('blankConfirm')?<span className="error">Confirm Password can't be blank</span>
            :<span className="no-error">nothing</span>
          }
          <Phone phoneChange={phoneChange}/>
          {
            error.hasOwnProperty('phoneError')?<span id="phone-error" className="error">Enter valid Phone number
            </span>
            :error.hasOwnProperty('blankPhone')?<span className="error">Phone can't be blank</span>
            :<span className="no-error">nothing</span>
          }
          <label id="dropdown-label">
            Which option best describes your current role?
          </label>
          <select className="drop-down" name="profession" onChange={professionChange}>
            <option value="">--choose a option --</option>
            <Profession />
          </select>
          <label id="recommend">Would you recommend sealtabs to a friend?</label>
          <Recommend recommendChange={recommendChange} />
          <label id="changes">
            What would you like to see improved? (Check all that apply)
          </label>
          <Improve improveChange={improveChange}/>
          <label className="comment-label"> additional comments</label>
          <textarea
            className="comments"
            rows={5}
            columns={30}
          />
          <input
            className="submit"
            id="submit"
            type="submit"
            defaultValue="submit"
            onClick={submit}
          />
        </div>
      </div>
      {count?<Display data={data} improve={improve} handleCount={handleCount}/>
      :null}
    </>
  )
}