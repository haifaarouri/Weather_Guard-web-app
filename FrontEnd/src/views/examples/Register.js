// reactstrap components
import ErrorModal from "layouts/ErrorModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Label,
  CustomInput,
} from "reactstrap";
import { postUser } from "services/userService";

const Register = () => {

  const [user, setUser] = useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
    "birthDate": "",
    "profilePicture": "",
    "gender": ""
  })
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user);
  }

  const handleChangeFile = (e) => {
    setUser({ ...user, profilePicture: e.target.files[0].name })
  }

  const navigate = useNavigate()

  const add = async (e) => {
    e.preventDefault()
    const res = await postUser(user)
    if (res.hasOwnProperty("error")) {
      toggle()
    } else {
      navigate("/auth/login")
    }
  }

  const handleChangeGender = e => {
    setUser({ ...user, gender: e.target.value })
  }

  return (
    <>
      <ErrorModal toggle={toggle} modal={modal} />
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign up with credentials</small>
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input required placeholder="FirstName" type="text" name="firstName" onChange={(e) => handleChange(e)} />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    required
                    placeholder="LastName"
                    type="text"
                    name="lastName" onChange={(e) => handleChange(e)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="email@example.com"
                    type="email"
                    autoComplete="new-email"
                    name="email" onChange={(e) => handleChange(e)}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    name="password" onChange={(e) => handleChange(e)}
                    required
                    minLength="8"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-calendar-grid-58" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="BirthDate" type="date" name="birthDate" onChange={(e) => handleChange(e)} required />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  {/* <Label for="exampleCustomFileBrowser">Profile Picture</Label> */}
                  <CustomInput required accept=".png, .jpg, .jpeg" type="file" id="exampleCustomFileBrowser" name="profilePicture" onChange={(e) => handleChangeFile(e)} label="Pick your Profile Picture !">
                  </CustomInput>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Gender</Label>
                <Input required type="select" id="exampleSelect" name="gender" onChange={(e) => handleChangeGender(e)}>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </Input>
              </FormGroup>
              <div className="text-center">
                <Button type="submit" onClick={add} className="mt-4" style={{ backgroundColor: "#f58733", color: "white" }}>
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
