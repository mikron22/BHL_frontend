import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../actions";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const validateForm = () => {
        return username.length > 0 && password.length > 0;
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className="card border-primary col-4 p-0 mt-5 mx-auto">
            <div
                className="card-header"
                style={{ textAlign: "center", fontWeight: 700 }}
            >
                Sign in
        </div>
            <Form className="card-body px-4 pb-1" onSubmit={(e) => handleSubmit(e)}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="pb-4" size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button
                    block
                    size="lg"
                    type="submit"
                    disabled={!validateForm()}
                    onClick={() => login(username, password, dispatch)}
                >
                    Login
          </Button>
            </Form>
            <h1>{console.log(password)}</h1>
            <h1>{console.log(username)}</h1>
        </div>
    )
}

export default Login
