export default function Name({nameChange}){
    return(
        <>
          <label id="name-label" htmlFor="name">
            Name
          </label>
          <input className="input" name="name" id="name" type="text" required onChange={nameChange}/>
        </>
    )
}