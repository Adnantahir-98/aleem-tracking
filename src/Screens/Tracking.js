import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Paper from '@mui/material/Paper';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';

import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaRegClock } from "react-icons/fa";
import { RiLock2Line } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

import { useState } from 'react';

const Tracking = () => {

  // Alert 83% Off State...
  const [open, setOpen] = useState(true);

  // Pop-up Modal React-Bootstrap
  const [show, setShow] = useState(false);
  const [showProof, setShowProof] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowProof = () => setShowProof(true);
  // Pop-up Modal Ends here...

  // Tracking Steps Completion Code...
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = [
    {
      label: 'Label Created',
      description: `Germany`,
      datetime: `10/30/2024, 3:32 P.M.`,
    },
    {
      label: 'We Have Your Package',
      description:
        'Frankfurt, Germany',
      datetime: `10/31/2024, 5:28 P.M.`,
    },
    {
      label: 'On the Way',
      description: `Northampton, United Kingdom`,
      datetime: `11/2/2024, 10:16 P.M.`,
    },
    {
      label: 'Out for Delivery',
      description: `Northampton, United Kingdom`,
      datetime: `11/3/2024, 6:54 P.M.`,
    },
    {
      label: 'Delivered',
      description: `Congrats your package has been delivered successfully, Thanks for choosing us.`,
      datetime: `11/5/2024, 1:05 P.M.`,
    },
  ];
  // Steps Completion Code ends here...

  return (
    <>
      <section className='track-search-bg'>
        <Container>
          {/* Alert Box 83% Off Offer */}
          <Box sx={{ width: '100%' }} className="mb-4">
            <Collapse in={open}>
              <Alert
                className='position-relative'
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
                <a href="#" className='position-absolute end-0 text-decoration-none ms-2 me-5'>Activate your offer!</a>
              </Alert>
            </Collapse>
          </Box>

          <Row>
            <Col md={8} lg={8} className='mb-3'>
              <Card className='p-4 shadow-sm border-0'>
                <p className='p-0 m-0'>Your shipment</p>
                <p className='fw-bold m-0'>1ZH9R543034239798920</p>
                <a href="!#" className='text-decoration-none my-2'>1 of 2 Piece Shipment</a>
                <small>
                  <FaCheckCircle className='me-2 text-success' />
                  Delivered On
                </small>
                <h5 className='text-secondary fw-bold'>Wednesday, November 06 at 11:24 A.M. at Residential</h5>
                <hr className='w-100 text-secondary' />

                <Row>
                  <Col md={6}>
                    <p className='m-0 fw-bold'>Delivered To</p>
                    <p>NORTHAMPTON GB</p>
                  </Col>
                  <Col md={6}>
                    <p className='m-0 fw-bold'>Received By:</p>
                    <p>MOHAMMED ALI</p>
                    <a href="#" className='text-decoration-none' onClick={handleShowProof}>Proof of Delivery <FaAngleRight /> </a>

                    <Modal
                      show={showProof}
                      size="lg"
                      id="printable-modal-content"
                      onHide={() => setShowProof(false)}
                      aria-labelledby="example-custom-modal-styling-title"
                    >
                      <Modal.Header closeButton className='fw-bold'>
                        Proof of Delivery
                      </Modal.Header>
                      <Modal.Body>
                        <p className='mb-3'>Dear Customer, <br />
                          This notice serves as proof of delivery for the shipment listed below.
                        </p>
                        <Row>
                          <Col md={6} lg={6} xl={6}>
                            <h6 className='m-0'>Tracking Number</h6>
                            <p>1ZH9R5430435079162</p>
                          </Col>
                          <Col md={6} lg={6} xl={6}>
                            <h6 className='m-0'>Weight</h6>
                            <p>16.00 KGS</p>
                          </Col>
                          <Col md={6} lg={6} xl={6}>
                            <h6 className='m-0'>Service</h6>
                            <p>THC EXPRESS SAVER &#174;</p>
                          </Col>
                          <Col md={6} lg={6} xl={6}>
                            <h6 className='m-0'>Shipped / Billed On</h6>
                            <p>10/30/2024</p>
                          </Col>
                          <Col md={6} lg={6} xl={6}>
                            <h6 className='m-0'>Delivered On</h6>
                            <p>10/30/2024 11:24 A.M.</p>
                          </Col>
                          <Col md={6} lg={6} xl={6}>
                            <h6 className='m-0'>Received By</h6>
                            <p>SEGAL MUHAMMAD</p>
                          </Col>
                          <Col md={6} lg={6} xl={6}>
                            <h6 className='m-0'>Delivered To</h6>
                            <p>NORTHHAMPTON, GB</p>
                          </Col>
                          <Col md={6} lg={6} xl={6}>
                            <h6 className='m-0'>Left At</h6>
                            <p>Residential</p>
                          </Col>

                          <p className='my-2'>
                            Please print for your records as photo and details are only available for a limited time. <br />
                            Sincerely, <br />
                            THC <br />
                            Tracking results provided by THC: 11/25/2024 1:01 P.M. EST
                          </p>
                          {/* <a href="#" className='mb-4 mt-2' onClick={(e) => {window.print();}}>Print this page</a> */}
                          <a
                            href="#"
                            className="mb-4 mt-2"
                            onClick={(e) => {
                              e.preventDefault();
                              window.print();
                            }}
                          >
                            Print this page
                          </a>
                        </Row>
                      </Modal.Body>
                    </Modal>

                  </Col>
                </Row>

                <Box sx={{ maxWidth: 400 }}>
                  <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          optional={
                            index === steps.length - 1 ? (
                              <Typography variant="caption">Last step</Typography>
                            ) : null
                          }
                        >
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          <Typography>{step.description}</Typography>
                          <Typography>{step.datetime}</Typography>
                          <Box sx={{ mb: 2 }}>
                            <Button
                              variant="contained"
                              onClick={handleNext}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              {index === steps.length - 1 ? 'Finish' : 'Continue'}
                            </Button>
                            <Button
                              disabled={index === 0}
                              onClick={handleBack}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              Back
                            </Button>
                          </Box>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                  {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                      <Typography>All steps completed.</Typography>
                      <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                      </Button>
                    </Paper>
                  )}
                </Box>

                <a href="#" className='text-decoration-none' onClick={handleShow}>View all Shipping Details <FaAngleRight /> </a>

                <Modal
                  show={show}
                  size="lg"
                  onHide={() => setShow(false)}
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <Modal.Header closeButton>
                    <small>Last Updated: 11/24/2024 1:25 P.M. EST</small>
                  </Modal.Header>
                  <Modal.Body>
                    <Tabs
                      defaultActiveKey="SProgress"
                      id="fill-tab-example"
                      className="mb-3 px-5"
                      fill
                    >
                      <Tab eventKey="SProgress" title="Shipping Progress" className='p-4'>
                        <Container>
                          <Card className='border border-primary border-2 rounded-4 my-3 p-0 m-0'>
                            <Card.Body>
                              <h6>You've Got the Details</h6>
                              <p>You're seeing what customer service agents would share with you. If you need more support, use the <a href="#">Virtual Assistant</a>  or contact your shipper.</p>
                            </Card.Body>
                          </Card>

                          <Row>
                            <Col md={6} lg={6} xl={6}>
                              <p>
                                <FaRegClock className='me-2' />
                                Times shown are in local time <a href="#" className='ms-3'>Change</a>
                              </p>
                            </Col>
                          </Row>

                          <Row className='my-4'>
                            <Col md={3} lg={3} xl={3}>
                              <p>
                                11/06/2024 <br />
                                11:24 A.M.
                              </p>
                            </Col>
                            <Col md={9} lg={9} xl={9}>
                              <h6 className='m-0'>Delivered</h6>
                              <p className='m-0'>DELIVERED</p>
                              <p className='m-0'>NORTHHAMPTON, GB</p>
                            </Col>
                          </Row>
                          <Row className='mb-4'>
                            <Col md={3} lg={3} xl={3}>
                              <p>
                                12/09/2024 <br />
                                10:30 A.M.
                              </p>
                            </Col>
                            <Col md={9} lg={9} xl={9}>
                              <h6 className='m-0'>Out for Delivery</h6>
                              <p className='m-0'>Out For Delivery Today</p>
                              <p className='m-0'>Northampton, United Kingdom</p>
                            </Col>
                          </Row>
                          <Row className='mb-4'>
                            <Col md={3} lg={3} xl={3}>
                              <p>
                                19/08/2024 <br />
                                1:43 A.M.
                              </p>
                            </Col>
                            <Col md={9} lg={9} xl={9}>
                              <h6 className='m-0'>On the Way</h6>
                              <p className='m-0'>Arrived at Facility</p>
                              <p className='m-0'>Northampton, United Kingdom</p>
                            </Col>
                          </Row>
                          <Row className='mb-4'>
                            <Col md={3} lg={3} xl={3}>
                              <p>
                                19/08/2024 <br />
                                1:43 A.M.
                              </p>
                            </Col>
                            <Col md={9} lg={9} xl={9}>
                              <h6 className='m-0'>We Have Your Package</h6>
                              <p className='m-0'>Arrived at Facility</p>
                              <p className='m-0'>Northampton, United Kingdom</p>
                            </Col>
                          </Row>
                          <Row className='mb-4'>
                            <Col md={3} lg={3} xl={3}>
                              <p>
                                19/08/2024 <br />
                                1:43 A.M.
                              </p>
                            </Col>
                            <Col md={9} lg={9} xl={9}>
                              <h6 className='m-0'>Label Created</h6>
                              <p className='m-0'>Shipper created a label, THC has not received the package yet.</p>
                              <p className='m-0'>Frankfurt, Germany</p>
                            </Col>
                          </Row>
                        </Container>
                      </Tab>
                      <Tab eventKey="SDetails" title="Shipping Details" className='p-4'>
                        <Container>
                          <Card className='border border-primary border-2 rounded-4 my-3 p-0 m-0'>
                            <Card.Body>
                              <h6>You've Got the Details</h6>
                              <p>You're seeing what customer service agents would share with you. If you need more support, use the <a href="#">Virtual Assistant</a>  or contact your shipper.</p>
                            </Card.Body>
                          </Card>

                          <Row>
                            <Col sm={12} md={6} lg={6} xl={6}>
                              <div>
                                <h6 className='m-0'>Tracking Number</h6>
                                <p>1ZH9R5430891279289</p>
                              </div>
                              <div>
                                <h6 className='m-0'>Service</h6>
                                <p>THC EXPRESS Saver &#174;</p>
                              </div>
                              <div>
                                <h6 className='m-0'>Weight</h6>
                                <p>16.00 KGS</p>
                              </div>
                              <div>
                                <h6 className='m-0'>Shipment Category</h6>
                                <p>Package</p>
                              </div>
                            </Col>
                            <Col md={6} lg={6} xl={6}>
                              <div>
                                <h6 className='m-0'>Shipped / Billed On</h6>
                                <p>10/30/2024</p>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </Tab>
                    </Tabs>
                  </Modal.Body>
                </Modal>

                <hr className='text-secondary' />

                <Button variant="danger" size="lg" className='rounded-pill w-50' type="submit">
                  Get Updates <FaAngleRight className='mx-1' />
                </Button>
              </Card>
            </Col>


            <Col md={4} lg={4} className='mb-3'>
              <Card className='shadow-sm border-0 p-3 mb-3'>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Track another package</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Button variant="outline-danger" className='rounded-pill px-4 fw-' type="submit">
                    Track
                  </Button>
                </Form>
              </Card>

              <Card className='shadow-sm border-0'>
                <Card.Body>
                  <Card.Title className='mb-2'>
                    <RiLock2Line className='me-2 h1 fw-light' />
                    <span className='h2 fw-normal'>Stay Safe - Avoid Fraud and Scams</span>
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


      <Card className='container-fluid border-0 my-5 w-75'>
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Other Packages in this Shippment</Accordion.Header>
            <Accordion.Body>

              <Accordion>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <FaCheckCircle className='text-success m-3' />
                    1ZH9R8923892379892 <br />
                    Delivered <br />
                    Delivered On: Wednesday, November 06 at 11:24 A.M. at Residential

                  </Accordion.Header>
                  <Accordion.Body>

                    <h6>
                      <IoLocationOutline />
                      Ship To
                    </h6>
                    <p>NORTHAMPTON GB</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>

    </>
  );
}


export default Tracking;
