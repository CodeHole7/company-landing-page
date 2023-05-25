/* eslint-disable @next/next/no-html-link-for-pages */
import { Modal, Form } from "react-bootstrap";
import { useCallback, useRef, useState, useEffect, useMemo } from "react";
// import ScrollLock from "./ScrollLock";
import { Container, Row, Col, Button } from 'reactstrap'
function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const header_ref = useRef("");

  const mob_close = useRef("");

  function logit() {
    if (window.screen.width > 768) {
      // header_ref.current.classList.toggle("sticky", window.scrollY > 0);
      if (window.scrollY > 0) {
        setIsSticky(!isSticky);
        setFlag(false);
      } else {
        setFlag(true);
        setIsSticky(false);
      }
    } else {
      setFlag(false);
      setIsSticky(!isSticky);

    }
  }
  useEffect(() => {
    if (window.screen.width < 768) {
      setIsMobile(true);
    }

    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const [sp, setSp] = useState({});
  // const [blockScroll, allowScroll] = ScrollLock();
  // old nav
  const [flag, setFlag] = useState(true);
  const [show, setShow] = useState(false);
  const [showform, setShowform] = useState(false);
  // ---------------hutaib form +------------
  const [cv, setCV] = useState();

  const initialVailue = {
    fullName: "",
    email: "",
    address: "",
    company: "",
    questions: "",
  };

  const [applicationform, setApplicationform] = useState(initialVailue);

  const getData = (e: any) => {
    e.preventDefault();
    setApplicationform({ ...applicationform, [e.target.name]: e.target.value });
  };
  // ------------------

  // const url = "https://hutaib.admin.simboz.com/ProductsAPI/Careers";

  const submitData = (e: any) => {
    e.preventDefault();
    const { fullName, email, address, company, questions } = applicationform;
    // if ((fullName, email)) {
    //   const subapplicationform = new FormData();
    //   subapplicationform.append("fullName", fullName);
    //   subapplicationform.append("email", email);
    //   subapplicationform.append("address", address);
    //   subapplicationform.append("company", company);
    //   subapplicationform.append("questions", questions);
    //   axios
    //     .post(url, subapplicationform)
    //     .then((res) => {
    //       if (res) {
    //         Swal.fire(
    //           "Application Submitted Successfully",
    //           "Thank you for Applying, One of our representative will get back to you soon",
    //           "success"
    //         );
    //         setShowform(false);
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // } else {
    //   alert("field is empty");
    // }
  };
  // ---------------hutaib form +------------
  // const [sub, setSub] = useState(false)
  // let sub = useRef(false);
  // // let [sub, setSub] = useState(false)
  // const setsub = () => {
  //   sub = !sub
  //   // setSub(!sub)
  //   console.log(sub)
  // }
  return (
    <>
      {/* <header ref={header_ref} className='agency loding-header nav-abs custom-scroll'> */}
      <header className={`agency loding-header nav-abs custom-scroll ${isSticky ? 'sticky' : ''}`}>
        <Container>
          <Row>
            <Col>
              <nav>
                <a className="m-r-auto" href="/">
                  <img src={'/assets/logo/thumb_web2logo.png'} alt="artxpro" style={{ width: 80, height: 80 }} />
                </a>
                <div className={`navbar`} id="togglebtn">
                  <ul className="main-menu">
                    <li className="">
                      <a className="" href="#home">Home</a>
                    </li>
                    <li className="">
                      <a className="" href="#about">Who we are</a>
                    </li>
                    <li className="">
                      <a className="" href="#services">Services</a>
                    </li>
                    <li className="">
                      <a className="" href="#ecommerce">E-Commerce</a>
                    </li>
                    <li className="">
                      <a className="" href="#results">Our Results</a>
                    </li>
                    <li className="">
                      <a className="" href="#blog">Blog</a>
                    </li>
                    <li>
                      <button
                        className="btn btn-default btn-gradient text-white active"
                        onClick={() => {
                          setShowform(true);
                        }}
                      >
                        Get Quote
                      </button>
                      {/* --------------------------------------- */}

                      <Modal
                        show={showform}
                        onHide={() => {
                          setShowform(false);
                        }}
                      >
                        <Modal.Header closeButton>GET QUOTE</Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Row className="mb-3">
                              <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                  required
                                  name="fullName"
                                  onChange={getData}
                                  type="text"
                                  placeholder="Enter Your Name."
                                />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                  required
                                  name="email"
                                  onChange={getData}
                                  type="email"
                                  placeholder="Enter Your Email."
                                />
                              </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                              <Form.Label>Contact</Form.Label>
                              <Form.Control
                                required
                                name="address"
                                onChange={getData}
                                placeholder="Enter Your Phone No."
                              />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                              <Form.Label>Company Name</Form.Label>
                              <Form.Control
                                required
                                name="company"
                                onChange={getData}
                                placeholder="Enter Your Company Name."
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>Ask Us Any Question</Form.Label>
                              <Form.Control
                                name="questions"
                                required
                                onChange={getData}
                                as="textarea"
                                rows={3}
                              />
                            </Form.Group>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button onClick={submitData}>Submit Form</Button>
                        </Modal.Footer>
                      </Modal>
                      {/* --------------------------------------- */}
                    </li >
                  </ul>
                </div>
              </nav>
            </Col>
          </Row>
        </Container>
      </header >
    </>
  );
}

export default Nav;
