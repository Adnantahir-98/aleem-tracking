import * as React from 'react';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { RiPhoneFindLine } from "react-icons/ri";
import { RiLock2Line } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { VscLinkExternal } from "react-icons/vsc";


export default function Home() {
    const [open, setOpen] = React.useState(true);

    return (
        <>
            <section className='track-search-bg'>
                <Container>
                    <Box sx={{ width: '100%' }} className="mb-4">
                        <Collapse in={open}>
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        <IoCloseOutline />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >
                                Save upto 83%* on Shipping
                            </Alert>
                        </Collapse>
                    </Box>

                    <Row>
                        <Col md={8} lg={8} className='mb-3'>
                            <Card className='p-4 shadow-sm border-0'>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='h1 fw-normal'>
                                            <RiPhoneFindLine />
                                            Track
                                        </Form.Label> <br />
                                        <Form.Text className="text-muted">
                                            Enter upto 25 tacking numbers, one per line.
                                            <a href="#" className='position-relative float-end text-decoration-none'>
                                                Help
                                                <VscLinkExternal className='ms-1' />
                                            </a>
                                        </Form.Text>
                                        <Form.Control type="email" />

                                    </Form.Group>

                                    <Button variant="danger" size="lg" className='rounded-pill' type="submit">
                                        Track <FaAngleRight className='mx-1' />
                                    </Button>
                                </Form>
                            </Card>
                        </Col>

                        <Col md={4} lg={4} className='mb-3'>
                            <Card className='shadow-sm border-0'>
                                <Card.Body>
                                    <Card.Title className='mb-2'>
                                        <RiLock2Line className='me-2 h1 fw-light' />
                                        <span className='h2 fw-normal'>Safe - Avoid Fraud and Scams</span>
                                    </Card.Title>
                                    <Card.Text>
                                        Received a text, calls, or email that seems suspicious? 
                                        Don't respond to it.
                                    </Card.Text>
                                    <Card.Link href="#">
                                        <Button variant="outline-primary" className='rounded-pill'>
                                            Tips to Avoid Fraud
                                        </Button>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>


            <Card className='container border-0 my-5'>
                <h5>Recently Tracked</h5>
                <p>
                    <a href="#">Log in</a> or <a href="#">Sign up</a> to view your recently tracked shipments.
                </p>
            </Card>

        </>
    );
}
