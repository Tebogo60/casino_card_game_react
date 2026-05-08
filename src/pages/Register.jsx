import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import { toast } from "sonner";

function Register() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
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

        if (form.password !== form.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const res = await register({
                username: form.username,
                email: form.email,
                password: form.password,
            });
            toast.success("Account created successfully.");

            navigate("/login", {
                state: res.data,
            });
        } catch (err) {
            toast.error(
                err.response?.data?.message ||
                    "Registration failed. Try again.",
            );
        }
    };

    return (
        <div className="form">
            <h1>Create Account</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                />

                <input
                    type="email"
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

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Repeat Password"
                    onChange={handleChange}
                />

                <button type="submit">Create Account +</button>

                <div className="link">
                    Already have an account? <a href="/login">Login</a>
                </div>
            </form>
        </div>
    );
}

export default Register;
