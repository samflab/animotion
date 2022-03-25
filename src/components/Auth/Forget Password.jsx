import {Link} from "react-router-dom"

export const ForgetPassword = () => {
    return(
        <div>
            <div className="login-container">
                <form action="" className="login-form">
                    <div className="form-element">
                        <div>
                            <label htmlFor="email" className="form-label">
                                Email <span className="asterick">*</span>
                            </label>
                        </div>
                        <div>
                            <input type="email" name="email" className="email" autoComplete="off" required />
                        </div>
                    </div>
                    <button className="auth-btn login-btn">Forget Password</button>
                    <div className="form-links">
                        <div className="auth-form-links">Don't have an account?
                            <Link className="signup-link-login" to="/signup">Create an account</Link>
                        </div>
                        <div className="auth-form-links">Already have an account?
                            <Link className="signup-link-login" to="/login">Login</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}