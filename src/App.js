import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, Button, FormControl, Col } from "react-bootstrap";


function App() {
  return (
    <div>
      <div class="form">
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

<Form class="formulaire">
<Form.Row>
  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form.Row>

<Form.Group controlId="formGridAddress1">
  <Form.Label>Address</Form.Label>
  <Form.Control placeholder="1234 Main St" />
</Form.Group>

<Form.Group controlId="formGridAddress2">
  <Form.Label>Address 2</Form.Label>
  <Form.Control placeholder="Apartment, studio, or floor" />
</Form.Group>

<Form.Row>
  <Form.Group as={Col} controlId="formGridCity">
    <Form.Label>City</Form.Label>
    <Form.Control />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridState">
    <Form.Label>State</Form.Label>
    <Form.Control as="select" defaultValue="Choose...">
      <option>Choose...</option>
      <option>...</option>
    </Form.Control>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridZip">
    <Form.Label>Zip</Form.Label>
    <Form.Control />
  </Form.Group>
</Form.Row>

<Form.Group id="formGridCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
</Form.Group>

<Button variant="primary" type="submit">
  Submit
</Button>
</Form>
</div>
    </div>
  );
}

export default App;
