export default function RadioButtons({recommendChange}){
    const recommendation = [
    {
      id:'definitely',
      value:'Definitely'
    },
    {
      id:'maybe',
      value:'May Be'
    },
    {
      id:'notsure',
      value:'Not Sure'
    }
    ]
    return(
      <>
      {recommendation.map(user => (
          <label className="radio-label" key={user.id}>
          <input
            className="radio"
            name="recommend"
            type="radio"
            value={user.value}
            onChange={recommendChange}
            required
          />
          {user.value}
          </label>
      ))}
      </>
    );
}