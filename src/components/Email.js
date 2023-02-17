export default function Email({emailChange}){
    return(
        <>
          <label id="email-label" htmlFor="email">
            Email
          </label>
          <input className="input" 
            name="email"
            id="email" 
            type="email" 
            required 
            onChange={emailChange} />
        </>
    )
}