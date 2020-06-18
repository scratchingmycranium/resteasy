import React, {useState, useEffect} from "react"
import { Parallax, Background } from "react-parallax";
import "./Contact.css"
// import NavbarApp from "./NavbarApp"
import Footer from "../Footer/Footer"
import Header from "../Landing/Sections/Header"
import {
    Button,
    Form,
    Container,
    Row,
    Col,
  } from "react-bootstrap";


const headerStyle = {
    position: "absolute",
    fontSize: "vw",
    padding: "15px",
    background: "rgba(255, 255, 255, 0.9)",
    top: "50%",
    left: "50%",
    borderRadius: "8px",
    "display": "block",
    "transform": "translate(-50%,-50%)",
    color: "black"
    

}
export default function Contact() {
    const [initialized, setInitialized] = useState(false);
    const [images, setImages] = useState([]);
    const [layers, setLayers] = useState([]);
    let pageHeader = React.createRef();

    // form data
    const [firstName, setFirstName] = useState("First Name");
    const [lastName, setLastName] = useState("Last Name");
    const [jobTitle, setJobTitle] = useState("Job Title");
    const [organization, setOrganization] = useState("Company / Organization");
    const [website, setWebsite] = useState("Company Website");
    const [email, setEmail] = useState("Email Address");
    const [phoneNum, setPhoneNum] = useState("Phone Number");
    const [comments, setComments] = useState("Questions or Comments");


    const image1 = require("../../assets/img/ron-otsu-62_2KGyX13E-unsplash.jpg")
    const image2 = require("../../assets/img/1600x900-anti-flash-white-solid-color-background.jpg")
    return (
        <div>
            <Header />
            <div className="main">
                <Container fluid={true}>
                    <Row className="justify-content-md-center header">
                        <Col style={{ "padding-left": 0, "padding-right": 0 }}>
                        <Parallax
                                bgImage={image1} 
                                strength={200}
                            >
                                <div style={{ height: 200 }}>
                                    <div style={headerStyle}>Learn More About Becoming A <span className="emphasis">Business Partner</span></div>
                                </div>
                            </Parallax>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="6">
                            <h3 className="join-header">Join the RestEasy Ecosystem</h3>
                            <div className="section">
                                <Form >
                                    <Form.Row>
                                        <Col>
                                            <Form.Control required placeholder={firstName.length >= 0 ? "First Name" : firstName} onChange={e => setFirstName(e.target.value)} />
                                        </Col>
                                        <Col>
                                            <Form.Control required placeholder={lastName.length >= 0 ? "Last Name" : lastName} onChange={e => setLastName(e.target.value)} />
                                        </Col>
                                    </Form.Row>

                                    <Form.Group>
                                        <Form.Control required placeholder={jobTitle.length >= 0 ? "Job Title" : jobTitle} onChange={e => setJobTitle(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control required placeholder={organization.length >= 0 ? "Company / Organization" : organization} onChange={e => setOrganization(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control required placeholder={website.length >= 0 ? "Company Website" : website} onChange={e => setWebsite(e.target.value)} />
                                    </Form.Group>

                                    <Form.Row>
                                        <Col>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control required type="email" placeholder={email.length >= 0 ? "Email Address" : email} onChange={e => setEmail(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Control required placeholder={phoneNum.length >= 0 ? "Phone Number" : phoneNum} onChange={e => setPhoneNum(e.target.value)} />
                                        </Col>
                                    </Form.Row>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows="3" placeholder={comments.length >= 0 ? "Questions or Comments" : comments} onChange={e => setComments(e.target.value)}/>
                                    </Form.Group>
                                    <div className="center">
                                        <Button className="center" variant="outline-success" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <Row className="grey-section">
                        <Col md={12} >
                            <div className="emphasis center">
                                <h2>We will be in touch soon!</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ "padding-left": 0, "padding-right": 0 }}>
                            <Footer />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}