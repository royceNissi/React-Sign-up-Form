export default function Display(props){
    const data = props.data;
    let key = 0;
    const improvements = props.improve;
    return(
    <div className="form-content">
        <div className="data-container">
            <h3 className="confirm-form__heading">Please Confirm your Data</h3>
            <h6>Name:<p id="form-input__name" className="display-data">
                {data.name}</p>
            </h6>
            <h6>Email:
                <p id="form-input__email" className="display-data">
                {data.email}</p>
            </h6>
            <h6>Phone:
                <p id="form-input__phone" className="display-data">
                {data.phone}
                </p>
            </h6>
            <h6>Profession:
                <p id="form-input__profession" className="display-data">
                {data.profession}
                </p>
            </h6>
            <h6>Recommend:<p id="form-input__recommends" className="display-data">
                {data.recommend}
                </p>
            </h6>
            <h6>Improvements:</h6>
            {improvements.length!==0?improvements.map(ele=>(<p key={key++}>{ele}</p>))
            :<p>no improvements</p>}
            <div className="clearfix">
                <button type="button" id="cancel" className="cancel-btn"
                onClick={props.handleCount}>
                CANCEL
                </button>
                <button type="button" id="confirm" className="confirm-btn"
                onClick={() => window.location.reload(true)}>
                CONFIRM
                </button>
            </div>
        </div>
    </div>
    )
}