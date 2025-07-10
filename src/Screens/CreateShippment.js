import React, { useState, useRef } from 'react'

import Box from '@mui/material/Box'
import Step from '@mui/material/Step'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import UUIDGenerator from '../Components/UUID_Generator'
import { useReactToPrint } from "react-to-print";


// Step labels
const steps = ['Create Shipper', 'Consignee Details', 'Invoice Details', 'Review'];

// Step 1 Component
const CreateShipperForm = ({ formData, handleChange }) => (
  <Box>
    <Typography variant="h4">Create Shipper's Record</Typography>
    <Form>
      <Row>
        <Form.Group className="mb-3 col">
          <Form.Label>Shipper's Name</Form.Label>
          <Form.Control type="text" placeholder="Please Enter Shipper's Name" name="shipperName"
            value={formData.shipperName}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3 col">
          <Form.Label>Country</Form.Label>
          <Form.Control list="countries" placeholder='Add the Country' name="shipperCountry" id="country" value={formData.shipperCountry} onChange={handleChange} />
          <datalist id="countries">
            <option value="Pakistan" />
            <option value="Germany" />
            <option value="United Kingdom" />
            <option value="United States" />
            <option value="France" />
            <option value="United Arab Emirates" />
            <option value="Saudia Arabia" />
            <option value="Spain" />
            <option value="Canada" />
          </datalist>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="mb-3 col">
          <Form.Label>Street Address</Form.Label>
          <Form.Control type="text" name="shipperAddress" value={formData.shipperAddress} onChange={handleChange} placeholder="Please Add the Shipper's Address" />
        </Form.Group>
        <Form.Group className="mb-3 col">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" name="shipperEmail" value={formData.shipperEmail} onChange={handleChange} placeholder="Enter Email Address" />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="mb-3 col">
          <Form.Label>Tel / Cell No.</Form.Label>
          <Form.Control type="number" name="shipperCellNo" value={formData.shipperCellNo} onChange={handleChange} placeholder="Enter Cell Phone no." />
        </Form.Group>
        <Form.Group className="mb-3 col">
          <Form.Label>CNIC / NTN</Form.Label>
          <Form.Control type="text" name="shipperCNICNTN" value={formData.shipperCNICNTN} onChange={handleChange} placeholder="Enter CNIC or NTN" />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="mb-3 col">
          <Form.Label>City/State/Zip Code</Form.Label>
          <Form.Control type="text" name="shipperCityZip" value={formData.shipperCityZip} onChange={handleChange} placeholder="Enter City/Zip Code" />
        </Form.Group>
        <Form.Group className="mb-3 col">
          <Form.Label>Shipper's Reference</Form.Label>
          <Form.Control type="text" name="shipperReference" value={formData.shipperReference} onChange={handleChange} placeholder="Enter Shipper's Reference" />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="mb-3 col">
          <Form.Label>Shipment Details</Form.Label>
          <Form.Control type="text" name="shipperDetails" value={formData.shipperDetails} onChange={handleChange} placeholder="Enter Shipment Details" />
        </Form.Group>
        <Form.Group className="mb-3 col">
          <Form.Label>Alternate Reference</Form.Label>
          <Form.Control type="text" name="shipperAlternateRef" value={formData.shipperAlternateRef} onChange={handleChange} placeholder="Enter Altername Reference" />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="mb-3 col">
          <Form.Label>Pieces / Dimensional Weight / Chargable Weight</Form.Label>
          <Form.Control type="text" name="PiecesDimensionalWeight" value={formData.PiecesDimensionalWeight} onChange={handleChange} placeholder="Enter Pieces / Dimensional Weight" />
        </Form.Group>
        <Form.Group className="mb-3 col">
          <Form.Label>Contents</Form.Label>
          <Form.Control type="text" name="Content" value={formData.Content} onChange={handleChange} placeholder="Enter the Content" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Booking Date</Form.Label>
        <Form.Control type="date" name='BookingDate' value={formData.BookingDate} onChange={handleChange} placeholder="Enter the Content" />
      </Form.Group>

    </Form>
  </Box>
);

// Step 2 Component
const ConsigneeDetailsForm = ({ formData, handleChange }) => (
  <Box>
    <Typography variant="h4">Consignee Details Form</Typography>
    <Form>
      <Row>
        <Form.Group className="mb-3 col">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" name="consigneeCompanyName" value={formData.consigneeCompanyName} onChange={handleChange} placeholder="Please Enter Consignee's Name" />
        </Form.Group>
        <Form.Group className="mb-3 col">
          <Form.Label>Country</Form.Label>
          <Form.Control list="countries" placeholder='Add the Country' name="consigneeCountry" value={formData.consigneeCountry} onChange={handleChange} id="country" />
          <datalist id="countries">
            <option value="Pakistan" />
            <option value="Germany" />
            <option value="United Kingdom" />
            <option value="United States" />
            <option value="France" />
            <option value="United Arab Emirates" />
            <option value="Saudia Arabia" />
            <option value="Spain" />
            <option value="Canada" />
          </datalist>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="mb-3 col">
          <Form.Label>Street Address</Form.Label>
          <Form.Control type="text" name="consigneeAddress" value={formData.consigneeAddress} onChange={handleChange} placeholder="Please Add the Consignee's Address" />

        </Form.Group>
        <Form.Group className="mb-3 col">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" name="consigneeEmailAddress" value={formData.consigneeEmailAddress} onChange={handleChange} placeholder="Enter Email Address" />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="mb-3 col">
          <Form.Label>Tel / Mobile No.</Form.Label>
          <Form.Control type="number" name="consigneePhoneNumber" value={formData.consigneePhoneNumber} onChange={handleChange} placeholder="Enter Cell Phone no." />
        </Form.Group>
        <Form.Group className="mb-3 col">
          <Form.Label>Service Type</Form.Label>
          <Form.Control type="text" name="ServiceType" value={formData.ServiceType} onChange={handleChange} />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="mb-3 col">
          <Form.Label>Received By</Form.Label>
          <Form.Control type="text" name="ReceivedBy" value={formData.ReceivedBy} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3 col">
          <Form.Label>Value / Currency</Form.Label>
          <Form.Control type="text" name="ValueCurrency" value={formData.ValueCurrency} onChange={handleChange} placeholder="Add Value / Currency" />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="mb-3 col">
          <Form.Label>State / Zip Code</Form.Label>
          <Form.Control type="text" name="consigneeStateZipCode" value={formData.consigneeStateZipCode} onChange={handleChange} placeholder="Enter City/Zip Code" />
        </Form.Group>
        <Form.Group className="mb-3 col">
          <Form.Label>Reference Number</Form.Label>
          <Form.Control type="text" name="ReferenceNumber" value={formData.ReferenceNumber} onChange={handleChange} placeholder="Better if it's Auto-Generated..." />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3 col">
        <Form.Label>IS - INT'L STANDARD?</Form.Label>
        <Form.Control type="text" name="IsINTLStandard" value={formData.IsINTLStandard} onChange={handleChange} />
      </Form.Group>

    </Form>
    <UUIDGenerator />
  </Box>
);

// Step 3 Component
const InvoiceDetailsForm = ({ formData, handleChange }) => (
  <Box>
    <Typography variant="h4">Performa Invoice</Typography>
    <Row>
      <Col md={6} lg={6} xl={6}>
        <h5 className='text-decoration-underline text-danger'>Shipper's Info:</h5>
        <Form>
          <Form.Group className="mb-3 col">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" name="invoiceShipperCompanyName" value={formData.invoiceShipperCompanyName} onChange={handleChange} placeholder="Please Enter Company Name" />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>Country</Form.Label>
            <Form.Control list="countries" placeholder='Add the Country' name="invoiceShipperCountry" value={formData.invoiceShipperCountry} onChange={handleChange} id="country" />
            <datalist id="countries">
              <option value="Pakistan" />
              <option value="Germany" />
              <option value="United Kingdom" />
              <option value="United States" />
              <option value="France" />
              <option value="United Arab Emirates" />
              <option value="Saudia Arabia" />
              <option value="Spain" />
              <option value="Canada" />
            </datalist>
          </Form.Group>

          <Form.Group className="mb-3 col">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="invoiceShipperAddress" value={formData.invoiceShipperAddress} onChange={handleChange} placeholder="Please Add a Address" />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>Contact Name</Form.Label>
            <Form.Control type="text" name='invoiceShipperContactName' value={formData.invoiceShipperContactName} onChange={handleChange} placeholder="Enter Contact Name" />
          </Form.Group>

          <Form.Group className="mb-3 col">
            <Form.Label>Phone / Fax No.</Form.Label>
            <Form.Control type="number" name="invoiceShipperPhoneNumber" value={formData.invoiceShipperPhoneNumber} onChange={handleChange} placeholder="Enter Phone/Fax Number" />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>CNIC/NTN No</Form.Label>
            <Form.Control type="text" name="invoiceShipperCNICNTNNumber" value={formData.invoiceShipperCNICNTNNumber} onChange={handleChange} placeholder="Enter CNIC/NTN" />
          </Form.Group>

          <Form.Group className="mb-3 col">
            <Form.Label>Consignment No</Form.Label>
            <Form.Control type="text" name="invoiceShipperConsignmentNumber" value={formData.invoiceShipperConsignmentNumber} onChange={handleChange} placeholder="Auto Generate Consignment Number" />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>No of Pieces</Form.Label>
            <Form.Control type="text" name="invoiceShipperPieces" value={formData.invoiceShipperPieces} onChange={handleChange} placeholder="Enter Number of Pieces" />
          </Form.Group>

          <Form.Group className="mb-3 col">
            <Form.Label>Weight</Form.Label>
            <Form.Control type="text" name="invoiceShipperWeight" value={formData.invoiceShipperWeight} onChange={handleChange} placeholder="Enter Weight in KG's" />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>State / City</Form.Label>
            <Form.Control type="text" name="invoiceShipperState" value={formData.invoiceShipperState} onChange={handleChange} placeholder="Enter State / City" />
          </Form.Group>

        </Form>
      </Col>
      <Col md={6} lg={6} xl={6}>
        <h5 className='text-decoration-underline text-danger'>Receiver:</h5>
        <Form>
          <Form.Group className="mb-3 col">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" name="invoiceReceiversCompanyName" value={formData.invoiceReceiversCompanyName} onChange={handleChange} placeholder="Please Enter Company Name" />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>Zip Code / Country</Form.Label>
            <Form.Control list="countries" placeholder='Add the Country' name="invoiceReceiversZipCountry" value={formData.invoiceReceiversZipCountry} onChange={handleChange} id="country" />
            <datalist id="countries">
              <option value="Pakistan" />
              <option value="Germany" />
              <option value="United Kingdom" />
              <option value="United States" />
              <option value="France" />
              <option value="United Arab Emirates" />
              <option value="Saudia Arabia" />
              <option value="Spain" />
              <option value="Canada" />
            </datalist>
          </Form.Group>

          <Form.Group className="mb-3 col">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="invoiceReceiversAddress" value={formData.invoiceReceiversAddress} onChange={handleChange} placeholder="Please Add the Address" />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>City / State</Form.Label>
            <Form.Control type="text" name="invoiceReceiversCityState" value={formData.invoiceReceiversCityState} onChange={handleChange} placeholder="Enter City / State" />
          </Form.Group>

          <Form.Group className="mb-3 col">
            <Form.Label>Contact Name</Form.Label>
            <Form.Control type="text" name="invoiceReceiversContactName" value={formData.invoiceReceiversContactName} onChange={handleChange} placeholder='Please Enter a Contact Name' />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>Phone No</Form.Label>
            <Form.Control type="text" name="invoiceReceiversPhoneNumber" value={formData.invoiceReceiversPhoneNumber} onChange={handleChange} placeholder='Please Enter a Contact Name' />
          </Form.Group>

          <Form.Group className="mb-3 col">
            <Form.Label>Booking Date</Form.Label>
            <Form.Control type="date" name="invoiceReceiversBookingDate" value={formData.invoiceReceiversBookingDate} onChange={handleChange} placeholder='Enter a Booking Date' />
          </Form.Group>

        </Form>
      </Col>

      <hr className='my-4' />

      {/* Description Form */}
      <h5 className='text-decoration-underline text-center text-danger'>Description:</h5>
      <Form>
        <Row>
          <Form.Group className="mb-3 col">
            <Form.Label>DESCRIPTION</Form.Label>
            <Form.Control type="text" name="invoiceDescription" value={formData.invoiceDescription} onChange={handleChange} placeholder="Please add Description" />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>QTY</Form.Label>
            <Form.Control type="text" name="invoiceDescriptionQTY" value={formData.invoiceDescriptionQTY} onChange={handleChange} placeholder="Please Add the Quantity" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3 col">
            <Form.Label>UNIT VALUE</Form.Label>
            <Form.Control type="text" name="invoiceDescriptionUnitValue" value={formData.invoiceDescriptionUnitValue} onChange={handleChange} placeholder="Enter Unite Value" />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>COD</Form.Label>
            <Form.Control type="text" name="invoiceDescriptionCOD" value={formData.invoiceDescriptionCOD} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3 col">
            <Form.Label>HS CODE </Form.Label>
            <Form.Control type="text" name="invoiceDescriptionHSCode" value={formData.invoiceDescriptionHSCode} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>AMOUNT</Form.Label>
            <Form.Control type="number" name="invoiceDescriptionAmount" value={formData.invoiceDescriptionAmount} onChange={handleChange} placeholder='Enter Amount' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3 col">
            <Form.Label>CNIC Front</Form.Label>
            <Form.Control type="file" name="invoiceDescriptionCNICFront" value={formData.invoiceDescriptionCNICFront} onChange={handleChange} placeholder='Add CNIC Pictures' />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>CNIC Back</Form.Label>
            <Form.Control type="file" name="invoiceDescriptionCNICBack" value={formData.invoiceDescriptionCNICBack} onChange={handleChange} placeholder='Add CNIC Pictures' />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3 col">
          <Form.Label>TOTAL</Form.Label>
          <Form.Control type="number" name="invoiceDescriptionTotal" value={formData.invoiceDescriptionTotal} onChange={handleChange} placeholder='Enter Total Amount' />
        </Form.Group>
      </Form>
    </Row>
  </Box>
);

const ReviewDetails = ({ formData }) => (
  <Box>
    <Typography variant="h4">Shipper Details</Typography>
    <Alert severity="info" className='my-3 navigation-buttons'>Review the details before Printing.</Alert>
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


// Main Component
const CreateShippment = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Display Input Fields in Review's Step/Page...
  const [formData, setFormData] = useState({
    shipperName: '',
    shipperCountry: '',
    shipperAddress: '',
    shipperCityZip: '',
    shipperCellNo: '',
    shipperCNICNTN: '',
    shipperReference: '',
    shipperEmail: '',
    shipperDetails: '',
    shipperAlternateRef: '',
    PiecesDimensionalWeight: '',
    Content: '',
    BookingDate: '',

    consigneeCompanyName: '',
    consigneeCountry: '',
    consigneeAttention: '',
    consigneeAddress: '',
    consigneeStateZipCode: '',
    consigneePhoneNumber: '',
    consigneeEmailAddress: '',
    ServiceType: '',
    IsINTLStandard: '',
    ReceivedBy: '',
    ValueCurrency: '',
    ReferenceNumber: '12912098',

    invoiceShipperCompanyName: '',
    invoiceShipperAddress: '',
    invoiceShipperState: '',
    invoiceShipperCountry: '',
    invoiceShipperContactName: '',
    invoiceShipperPhoneNumber: '',
    invoiceShipperCNICNTNNumber: '',
    invoiceShipperConsignmentNumber: 'Bwe9s02891c3',
    invoiceShipperPieces: '',
    invoiceShipperWeight: '',

    invoiceReceiversCompanyName: '',
    invoiceReceiversAddress: '',
    invoiceReceiversCityState: '',
    invoiceReceiversZipCountry: '',
    invoiceReceiversContactName: '',
    invoiceReceiversPhoneNumber: '',
    invoiceReceiversBookingDate: '',

    invoiceDescription: '',
    invoiceDescriptionQTY: '',
    invoiceDescriptionUnitValue: '',
    invoiceDescriptionCOD: '',
    invoiceDescriptionHSCode: '',
    invoiceDescriptionCNICFront: '',
    invoiceDescriptionCNICBack: '',
    invoiceDescriptionAmount: '',
    invoiceDescriptionTotal: '',
    // Add other fields as needed
  });

  // Handlers for navigation
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Last step — open print dialog
      window.print();
    } else {
      // Move to next step
      setActiveStep((prev) => prev + 1);
    }
  };
  // const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => setActiveStep(0);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Function to render the form for each step
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <CreateShipperForm formData={formData} handleChange={handleChange} />;
      case 1:
        return <ConsigneeDetailsForm formData={formData} handleChange={handleChange} />;
      case 2:
        return <InvoiceDetailsForm formData={formData} handleChange={handleChange} />;
      default:
        return <ReviewDetails formData={formData} />;
    }
  };

  return (
    <Container>
      <Box sx={{ width: '100%' }} className="my-5">
        {/* Stepper */}
        <Stepper activeStep={activeStep} className="navigation-buttons">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Render Form Content */}
        {activeStep === steps.length ? (
          <>
            {/* Success Message */}
            <Typography sx={{ mt: 2, mb: 1 }}>
              <Alert severity="success" className="my-5">
                Data Successfully Added into the Database Management System.
              </Alert>
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
              <Button onClick={handleReset}>Set New Record</Button>
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ mt: 2, mb: 1 }}>{renderStepContent(activeStep)}</Box>
            {/* Navigation Buttons */}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="navigation-buttons">
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button
                variant="contained"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Print' : 'Next'}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default CreateShippment;
