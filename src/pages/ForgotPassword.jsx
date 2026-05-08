import { useState } from "react";
import { forgotPassword } from "../api/auth";
import { toast } from "sonner";

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

            toast.success("Email successfully sent to: ", res.data.email);
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to send email.");
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
