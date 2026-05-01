import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../api/auth";

function ResetPassword() {
    const [form, setForm] = useState({
        token: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.targe.name]: e.target.value,
        });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const res = await resetPassword({
                token: form.token,
                password: form.password,
            });

            console.log("Password Resetted: ", res.data);

            alert("Password Resetted successfully!");

            navigate("/login");
        } catch (err) {
            console.error(err);
            alert("Password Reset failed. Try again.");
        }
    };

    return (
        <div className="form">
            <h1>Reset Password</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="password"
                    placeholder="Repeat Password"
                    onChange={handleChange}
                />

                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
}

export default ResetPassword;
