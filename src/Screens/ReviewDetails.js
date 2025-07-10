import React, { useState, useRef } from 'react'
import { useReactToPrint } from "react-to-print"

import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'

const ReviewDetails = ({ formData, printRef }) => {

    
    return (
        <Box ref={printRef}>
            <Typography variant="h4">Review Shipper Details</Typography>
            <Alert severity="info" className='my-3'>Review the details before submitting / Printing.</Alert>
            {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
            <Row className='mt-3'>
                <Col md={6}>
                    <h5>Country</h5>
                    <h5 className='text-decoration-underline fw-bold text-danger'>Shipper</h5>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td className='table_headbold'>Account ID</td>
                                <td>8293120</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Shipper Name</td>
                                <td>{formData.shipperName}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Country</td>
                                <td>{formData.shipperCountry}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Address</td>
                                <td>{formData.shipperAddress}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>City / Zip Code</td>
                                <td>{formData.shipperCityZip}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Tel / Mobile No.</td>
                                <td>{formData.shipperCellNo}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>CNIC / NTN</td>
                                <td>{formData.shipperCNICNTN}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Email Address</td>
                                <td>{formData.shipperEmail}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Reference</td>
                                <td>{formData.shipperReference}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Alternate Reference</td>
                                <td>{formData.shipperAlternateRef}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Shipment Details</td>
                                <td>{formData.shipperDetails}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Pieces / Dimentional Weight</td>
                                <td>{formData.PiecesDimensionalWeight}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Content</td>
                                <td>{formData.Content}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Booking Date</td>
                                <td>{formData.BookingDate}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md={6}>
                    <h5 className='text-end'>{formData.shipperCountry}</h5>
                    <h5 className='text-decoration-underline fw-bold text-danger'>Consignee</h5>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td className='table_headbold'>Company Name</td>
                                <td>{formData.consigneeCompanyName}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Attention</td>
                                <td>{formData.consigneeAttention}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Country</td>
                                <td>{formData.consigneeCountry}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Address</td>
                                <td>{formData.consigneeAddress}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>City / Zip Code</td>
                                <td>{formData.consigneeStateZipCode}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Tel / Mobile No.</td>
                                <td>{formData.consigneePhoneNumber}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Email Address</td>
                                <td>{formData.consigneeEmailAddress}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Service Type</td>
                                <td>{formData.ServiceType}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>IS INT'L Standard</td>
                                <td>{formData.IsINTLStandard}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Received By</td>
                                <td>{formData.ReceivedBy}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Value / Currency</td>
                                <td>{formData.ValueCurrency}</td>
                            </tr>
                            <tr>
                                <td className='table_headbold'>Reference Number</td>
                                <td>{formData.ReferenceNumber}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            < hr className='my-4 w-50 m-auto' />
            <Row>
                <Typography variant="h5">Performa Invoice</Typography>
                <Col md={6}>
                    <h6 className='text-danger text-decoration-underline'>Shipper</h6>
                    <Row>
                        <Col md={6}>
                            Company Name
                        </Col>
                        <Col md={6}>
                            {formData.invoiceShipperCompanyName}
                        </Col>
                        <Col md={6}>
                            Address
                        </Col>
                        <Col md={6}>
                            {formData.invoiceShipperAddress}
                        </Col>
                        <Col md={6}>
                            City / State
                        </Col>
                        <Col md={6}>
                            {formData.invoiceShipperState}
                        </Col>
                        <Col md={6}>
                            Contact Name
                        </Col>
                        <Col md={6}>
                            {formData.invoiceShipperContactName}
                        </Col>
                        <Col md={6}>
                            Phone No.
                        </Col>
                        <Col md={6}>
                            {formData.invoiceShipperPhoneNumber}
                        </Col>
                        <Col md={6}>
                            <h6>CNIC/NTN No:</h6>
                        </Col>
                        <Col md={6}>
                            <h6>{formData.invoiceShipperCNICNTNNumber}</h6>
                        </Col>
                        <Col md={6}>
                            <h6>Consignment No</h6>
                        </Col>
                        <Col md={6}>
                            <h6>2384912099</h6>
                        </Col>
                        <Col md={6}>
                            No of Pieces
                        </Col>
                        <Col md={6}>
                            {formData.invoiceShipperPieces}
                        </Col>
                        <Col md={6}>
                            Weight
                        </Col>
                        <Col md={6}>
                            {formData.invoiceShipperWeight} KGS
                        </Col>
                    </Row>
                </Col>


                <Col md={6}>
                    <h6 className='text-danger text-decoration-underline'>Receiver</h6>
                    <Row>
                        <Col md={6}>
                            Company Name
                        </Col>
                        <Col md={6}>
                            {formData.invoiceReceiversCompanyName}
                        </Col>
                        <Col md={6}>
                            Address
                        </Col>
                        <Col md={6}>
                            {formData.invoiceReceiversAddress}
                        </Col>
                        <Col md={6}>
                            City / State
                        </Col>
                        <Col md={6}>
                            {formData.invoiceReceiversCityState}
                        </Col>
                        <Col md={6}>
                            Country / Postal Code
                        </Col>
                        <Col md={6}>
                            {formData.invoiceReceiversContactName}
                        </Col>
                        <Col md={6}>
                            Contact Name
                        </Col>
                        <Col md={6}>
                            {formData.invoiceReceiversContactName}
                        </Col>
                        <Col md={6}>
                            Phone No.
                        </Col>
                        <Col md={6}>
                            {formData.invoiceReceiversPhoneNumber}
                        </Col>
                        <Col md={6}>
                            Booking Date
                        </Col>
                        <Col md={6}>
                            {formData.invoiceReceiversBookingDate}
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>DESCRIPTION</th>
                        <th>QTY</th>
                        <th>UNIT VALUE</th>
                        <th>COD</th>
                        <th>HS CODE</th>
                        <th>AMOUNT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{formData.invoiceDescription}</td>
                        <td>{formData.invoiceDescriptionQTY}</td>
                        <td>{formData.invoiceDescriptionUnitValue}</td>
                        <td>{formData.invoiceDescriptionCOD}</td>
                        <td>{formData.invoiceDescriptionHSCode}</td>
                        <td>{formData.invoiceDescriptionAmount}</td>
                    </tr>
                    <tr>
                        <td colspan={3}>Total</td>
                        <td colspan={6} className='text-end '>{formData.invoiceDescriptionTotal}</td>
                    </tr>
                </tbody>
            </Table>

        </Box>
    );
}
export default ReviewDetails;
