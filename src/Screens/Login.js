import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <>
            <Card style={{ width: '18rem' }} className='m-auto my-5'>
                <Card.Body>
                    <Card.Title className='text-center'>Login</Card.Title>
                    <Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted small">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-1" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Text className="text-muted">
                                Don't have an account? <Link to="#">Sign up</Link>
                            </Form.Text>
                            <Button variant="danger" type="submit" className='mt-3'>
                                Login
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Login


