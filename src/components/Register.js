import { useDispatch } from "react-redux"
import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { login } from "../actions"


const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    function validateForm() {
        return username.length > 0 && password.length > 0
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <div className="card border-primary col-4 p-0 mt-5 mx-auto">
            <div
                className="card-header"
                style={{ textAlign: "center", fontWeight: 700 }}
            >
                Create your account
        </div>
            <Form className="card-body px-4 pb-1" onSubmit={handleSubmit}>
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
                    Register
          </Button>
            </Form>
            <h1>{console.log(password)}</h1>
            <h1>{console.log(username)}</h1>
        </div>
    )
}

export default Register
