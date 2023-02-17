export default function Improve({improveChange}){
    const improvements = [
        {
          id:'features',
          area:'Features'
        },
        {
          id:'productdemo',
          area:'Product Demo'
        },
        {
          id:'videos',
          area:'Videos'
        },
        {
          id:'somethingelse',
          area:'Something Else'
        }
      ]
    return(
        <>
        {improvements.map(ele=>(
            <label className="checkbox-label" key={ele.id}>
            <input
              className="checkbox"
              type="checkbox"
              name="improve"
              id={ele.id}
              value={ele.area}
              onChange={improveChange}
            />
            {ele.area}
            </label>
        ))}
        </>
    )
}