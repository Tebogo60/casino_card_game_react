import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword } from "../api/auth";
import { toast } from "sonner";

function ResetPassword() {
    const [form, setForm] = useState({
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
    const [searchParams] = useSearchParams();

    const isValidUUID = (token) => {
        const uuidPattern =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

        return uuidPattern.test(token);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = searchParams.get("token");

        console.log("Token:", token);

        if (!token || !isValidUUID(token)) {
            toast.error("Invalid or missing token.");
            return;
        }

        if (form.password !== form.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const res = await resetPassword({
                token: token,
                password: form.password,
            });

            toast.success("Password Reset successfully!");

            navigate("/login", {
                state: res.data,
            });
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message);
        }
    };

    return (
        <div className="form">
            <h1>Reset Password</h1>

            <form onSubmit={handleSubmit}>
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

                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
}

export default ResetPassword;
