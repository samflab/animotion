import {Link} from "react-router-dom"

export const Signup = () => {
    return(
        <div>
            <div className="login-container">
                <form action="" className="login-form">
                    <div className="form-element">
                    <div>
                            <label htmlFor="firstname" className="form-label">
                                First Name <span className="asterick">*</span>
                            </label>
                        </div>

                        <div>
                            <input type="text" name="firstname" className="firstname" autoComplete="off" required />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="form-label">
                                Last Name <span className="asterick">*</span>
                            </label>
                        </div>
                        <div>
                            <input type="text" name="lastname" className="lastname" autoComplete="off"/>
                        </div>
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
                    <button className="auth-btn login-btn">Signup</button>
                    <div className="form-links">
                        <div className="auth-form-links">Already have an account?
                            <Link className="signup-link-login" to="/login">Login</Link>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}