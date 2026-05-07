import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { toast } from "sonner";

function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await login({
                email: form.email,
                password: form.password,
            });

            toast.success("Logged in successfully.");
            navigate("/home", {
                state: res.data,
            });
        } catch (err) {
            console.log("err: ", err);
            toast.error(
                err.response?.data?.message ||
                    "Login failed. Please try again.",
            );
        }
    };

    return (
        <div className="form">
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
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
