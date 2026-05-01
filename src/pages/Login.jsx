function Login() {
    return (
        <div className="form">
            <h1>Login</h1>

            <form>
                <input
                    type="text"
                    name="username"
                    placeholder="Username or Email"
                />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
                <div className="link">
                    Don't have an account? <a href="/register">Sign Up</a>
                </div>
                <div className="link">
                    <a href="/forgot-password">Forgot Password?</a>
                </div>
            </form>
        </div>
    );
}

export default Login;
