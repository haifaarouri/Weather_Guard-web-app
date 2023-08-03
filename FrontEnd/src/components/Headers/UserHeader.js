// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  return (
    <>
      <div
        className="header pt-5 d-flex align-items-center"
        style={{
          minHeight: "600px",
          // backgroundImage:
          //   "url(" + require("../../assets/img/theme/profile-cover.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask opacity-8" style={{background: "linear-gradient(87deg, #11cdef 0, #00264d 100%)"}} />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              {/* <h1 className="display-2 text-white">Hello</h1> */}
              {/* <p className="text-white mt-0 mb-5">
                This is your profile page.
              </p> */}
              {/* <Button
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                style={{backgroundColor: "#f58733" , color: "white" , borderColor: "#f58733"}}
              >
                Edit profile
              </Button> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
