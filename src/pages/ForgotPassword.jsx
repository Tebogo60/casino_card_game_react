import { useState } from "react";
import { forgotPassword } from "../api/auth";

function ForgotPassword() {
    const [form, setForm] = useState({
        email: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await forgotPassword({
                email: form.email,
            });

            console.log("Forgot Password:", res.data);

            alert("Email successfully sent to: ", res.data.email);
        } catch (err) {
            console.error(err);
            alert("Failed to send email.");
        }
    };

    return (
        <div className="form">
            <h1>Forgot Password</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
}

export default ForgotPassword;
