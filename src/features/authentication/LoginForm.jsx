import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import SpinnerMini from "../../ui/FormRow";
import { useLogin } from "./useLogin";

function LoginForm() {
    const [email, setEmail] = useState("pomagi7357@rdluxe.com");
    const [password, setPassword] = useState("pomagi7357");
    const { login, isLoading } = useLogin();

    function handleSubmit(e) {
        e.preventDefault();

        if (!email || !password) return;
        login({ email, password }, {
            onSettled: () => {
                setEmail("");
                setPassword("");
            }
        });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div style={{color: "red"}}>This is an example email! </div>
            <FormRow label="Email address">
                <Input
                    type="email"
                    id="email"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                />
            </FormRow>

            <FormRow label="Password">
                <Input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}

                />
            </FormRow>
            <FormRow>
                <Button
                    size="large"
                    disabled={isLoading}
                >
                    {!isLoading ? "Login" : <SpinnerMini />}
                </Button>
            </FormRow>
        </Form>
    );
}

export default LoginForm;