export default function ConfirmPassword({confirmChange}){
    return(
        <>
        <label id="confirm-password-label" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            className="input"
            id="confirm-password"
            type="password"
            name="confirmPassword"
            required
            onChange={confirmChange}
          />
        </>
    )
}