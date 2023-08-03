import React from "react";
import { useLocation } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
// import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

// import routes from "routes.js";
import Login from "views/examples/Login";
import Register from "views/examples/Register";
import { useState } from "react";

const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const [url,] = useState(window.location.pathname)
  // const [token, setToken] = useState("")

  const setToken = (userToken) => {
    sessionStorage.setItem('toekn', JSON.stringify(userToken))
  }

  const getToken = () => {

  }

  const token = getToken()

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  // const getRoutes = (routes) => {
  //   return routes.map((prop, key) => {
  //     if (prop.layout === "/auth") {
  //       return (
  //         <Route path={prop.path} element={prop.component} key={key} exact />
  //       );
  //     } else {
  //       return null;
  //     }
  //   });
  // }

  return (
    <>
      <div className="main-content" ref={mainContent}>
        {/* <AuthNavbar /> */}
        <div className="header py-7 py-lg-8" style={{ background: "linear-gradient(87deg, #11cdef 0, #00264d 100%)", color: "#00264d" }}>
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 style={{color: "#00264d"}}>Welcome to <img src={require("../assets/img/brand/WeatherGuardLogo.png")} width="30%" alt="logo" style={{ marginBottom: "12%" }} /> !</h1>
                  {url === "/auth/register" && <p className="text-lead text-light">
                    Please register to our web application, so you use more features.
                  </p>}
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            {/* <Routes>
              {getRoutes(routes)}
              <Route path="*" element={<Navigate to="/auth/login" replace />} />
            </Routes> */}
            {url === "/auth/register" && <Register />}
            {!token && url === "/auth/login" && <Login setToken={setToken} />}
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default Auth;
