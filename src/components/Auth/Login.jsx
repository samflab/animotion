import {Link} from "react-router-dom"
import "../../App.css"
import "./Login.css"
export const Login = () => {
    return (
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
                    <div className="form-element">
                        <div>
                            <label htmlFor="password" className="form-label">Password <span className="asterick">*</span></label>
                        </div>
                        <div>
                            <input type="password" name="password" className="password" required />
                        </div>
                    </div>
                    <button className="auth-btn login-btn">Login</button>
                    <div className="form-links">
                        <div className="auth-form-links">Don't have an account?
                            <Link className="signup-link-login" to="/signup">Create an account</Link>
                        </div>
                        <div className="auth-form-links">Lost Password?
                            <Link className="forgot-password password-link" to="/forget-password">Reset your Password</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}