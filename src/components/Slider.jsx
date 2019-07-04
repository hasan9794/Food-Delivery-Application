import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Card , Button} from "react-bootstrap";
import img1 from "../assets/woman-late-night-snacking-refridgerator-eating-food-iStock_000069204943_Medium.jpg";
import img2 from "../assets/download.jpg";
import img3 from "../assets/images.jpg";
import Login from "./Login.jsx"
var isLoggedIn = false

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const divStyle = {
      backgroundImage: `url(${img1})`,
      width: "100%",
      height: 900
    };
    const cardStyle = {
      width: "100%",
      height: 900,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
    return (
      <div style={divStyle}>
        <div style={cardStyle}>
          {/* <Card>
            <Card.Header as="h5">FoodHunter</Card.Header>
            <Card.Body>
              <Card.Title>Welcome! to the largest delivery Web Application</Card.Title>
              <Card.Text> 
                Login to proceed further
              </Card.Text>
              <Button variant="primary">LogIn</Button>
            </Card.Body>
          </Card> */}
            <Login />
          
        </div>
        {/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3>We Don't only deliver</h3>
      <p>We Love...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
      
    />

    <Carousel.Caption>
      <h3>Enjoy Alone</h3>
      <p>Or with friends</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
      
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}
      </div>
    );
  }
}

export default Slider;
