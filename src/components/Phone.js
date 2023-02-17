export default function Phone({phoneChange}){
    return(
        <>
        <label id="phone-number" htmlFor="phone">
            Phone Number
          </label>
          <input className="input" type="tel" name="phone" id="phone" required onChange={phoneChange}/>
        </>
    )
}