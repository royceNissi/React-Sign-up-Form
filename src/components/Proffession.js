export default function DropDownData(){
    const professions =[
        {
            id:'student',
            profession:'Student'
          },
          {
            id:'teacher',
            profession:'Teacher'
          },
          {
            id:'other',
            profession:'Other'
          }
    ]
    return(
      <>
      {
        professions.map(ele=>(
          <option key={ele.id} 
          value={ele.profession}>
              {ele.profession}
          </option>
        ))
      }
      </>
    )
}