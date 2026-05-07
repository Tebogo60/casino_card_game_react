import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, getUser, logout } from "../api/auth";

function Home() {
    const navigate = useNavigate();
    const user = getUser();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div>
            <h1>Home</h1>

            {isLoggedIn() && user ? (
                <>
                    <p>Welcome, {user.email}</p>
                    <p>Role: {user.role}</p>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <Link to="/login">Go to Login</Link>
            )}
        </div>
    );
}

export default Home;
