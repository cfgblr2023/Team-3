import React from 'react';
import './Counselling.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export const Counselling = () => {
 
  return (
    <div className="outer1">
        <div className="box">
        <Card className="card1">
          <Card.Header className="title">Commerce</Card.Header>
          <Card.Body>
            <Card.Title className="mentor">Vijay Varma</Card.Title>
            <Card.Text className="slot">
              12.30-1.30
            </Card.Text>
            {/* <Card.Text className="mentor">
              tag
            </Card.Text> */}
            <Button variant="primary" style={{ marginLeft: "40%" }}>Book</Button>
          </Card.Body>
        </Card>

        <br/>
        <br/>
        <Card className="card1">
          <Card.Header className="title">Science</Card.Header>
          <Card.Body>
            <Card.Title className="mentor">Shanti Devi</Card.Title>
            <Card.Text className="slot">
            4.30-5.30
            </Card.Text>
            {/* <Card.Text className="mentor">
              tag
            </Card.Text> */}
            <Button variant="primary" style={{ marginLeft: "40%" }}>Book</Button>
          </Card.Body>
        </Card>
        <br/>
        <br/>
        <Card className="card1">
          <Card.Header className="title">Computer</Card.Header>
          <Card.Body>
            <Card.Title className="mentor">Rohith Anand</Card.Title>
            <Card.Text className="slot">
            12.30-1.30
            </Card.Text>
            {/* <Card.Text className="mentor">
              tag
            </Card.Text> */}
            <Button variant="primary" style={{ marginLeft: "40%" }}>Book</Button>
          </Card.Body>
        </Card>
        </div>
    </div>
  );
}