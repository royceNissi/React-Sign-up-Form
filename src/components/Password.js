import { useState } from "react"
export default function Password({passwordChange}){
  const[pass,setPass] = useState(false);
  function show(e){
    if(e.target.checked){
      setPass(true);
    }
    else{
      setPass(false);
    }
  }
    return(
        <>
          <label id="password-label" htmlFor="password">
            Password
          </label>
          <input className="input" 
            name ="password"
            id="password" 
            type={pass===true?'text':'password'} 
            required 
            onChange={passwordChange}
            />
          <label><input type="checkbox" className ="checkbox" onChange={show}/>show password</label>
        </>
    )
}